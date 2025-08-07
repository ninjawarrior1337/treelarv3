{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    {
      nixosModules.treelarv3 = import ./nixosModule.nix {inherit self;};
      nixosModules.default = self.nixosModules.treelarv3;
    }
    // flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        inherit system;
      };

      nodejs = pkgs.nodejs_22;

      treelarv3 = pkgs.stdenv.mkDerivation (finalAttrs: {
        pname = "treelarv3";
        version = "0.0.1";

        src = ./.;

        nativeBuildInputs = with pkgs; [
          nodejs
          pnpm.configHook
          makeWrapper
          npmHooks.npmBuildHook
        ];

        pnpmDeps = pkgs.pnpm.fetchDeps {
          inherit (finalAttrs) pname version src;
          hash = "sha256-kgR74WDx3BaBgepL/EJQ4Ipph0PFyWGp80znp/U0gNA=";
        };

        buildPhase = ''
          IN_NIX=1 pnpm run build
        '';

        installPhase = ''
          runHook preInstall
          mkdir -p $out/bin $out/lib

          cp -r build $out/lib/treelarv3
          cp package.json $out/lib/treelarv3
          cp -r node_modules $out/lib/treelarv3

          makeWrapper ${pkgs.lib.getExe nodejs} $out/bin/treelarv3 \
            --inherit-argv0 \
            --add-flags $out/lib/treelarv3

          runHook postInstall
        '';
      });
    in {
      devShells.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_22
          pnpm
        ];
      };

      packages.default = treelarv3;

      checks = {
        treelarv3ServerTest = pkgs.nixosTest {
          name = "treelarv3-boots";
          nodes.machine = {
            config,
            pkgs,
            ...
          }: {
            imports = [
              self.nixosModules.default
            ];

            services.treelarv3 = {
              enable = true;
            };

            system.stateVersion = "24.05";
          };

          testScript = ''
            machine.wait_for_unit("treelarv3.service")
            machine.wait_for_open_port(8080)
          '';
        };
      };
    });
}
