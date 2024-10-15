{self}: {
  config,
  lib,
  pkgs,
  ...
}:
with lib; let
  cfg = config.services.treelarv3;
in {
  options.services.treelarv3 = {
    enable = mkEnableOption "Enable the treelarv3 server";

    port = mkOption {
      type = types.port;
      default = 8080;
      description = "port to listen on";
    };

    package = mkOption {
      type = types.package;
      default = self.packages.${pkgs.system}.default;
    };
  };

  config = mkIf cfg.enable {
    systemd.services.treelarv3 = {
      description = "treelarv3 server";
      wantedBy = ["multi-user.target"];
      after = ["network.target"];

      script = ''
        PORT=${toString cfg.port} ${cfg.package}/bin/treelarv3
      '';

      serviceConfig = {
        DynamicUser = "yes";
        Restart = "on-failure";
        RestartSec = "5s";
      };
    };
  };
}
