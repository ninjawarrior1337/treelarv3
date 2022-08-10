<script lang="ts">
    import * as THREE from "three"
    import { onMount, onDestroy } from "svelte";
    import {browser} from "$app/env"

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, 1/1)
    let canvas: HTMLCanvasElement
    let logo: THREE.Object3D
    let renderer: THREE.WebGLRenderer
    let animationFrameId = 0
    let counter = 0

    const animate = () => {
        animationFrameId = requestAnimationFrame(animate)
        counter += 0.01
        logo.position.y = Math.sin(counter)
        renderer.render(scene, camera)
    }

    onDestroy(() => {
        scene.remove()
        if(browser) {
            cancelAnimationFrame(animationFrameId)
        }
    })

    onMount(async () => {
        renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            canvas,
        })

        camera.position.z = 30
        camera.position.y = 10

        let al = new THREE.AmbientLight(0xffffff, 1)
        scene.add(al)

        let dirLight = new THREE.DirectionalLight(0xffffff, 1)
        dirLight.position.set(-1, 1.75, 1)
        scene.add(dirLight)
        
        let {GLTFLoader} = await import("three/examples/jsm/loaders/GLTFLoader")
        let loader = new GLTFLoader()

        loader.load("logo2020.glb", (gltf) => {
            logo = gltf.scene.children[1]
            const box = new THREE.Box3().setFromObject(logo)
            const center = box.getCenter(new THREE.Vector3())
            logo.position.x += logo.position.x - center.x
            logo.position.y += logo.position.y - center.y
            logo.position.z += logo.position.z - center.z
            logo.rotation.z += (Math.PI) / 8
            logo.rotation.x += 0
            logo.traverse(n => {
                if(n.type == "mesh") {
                    n.castShadow = true
                    n.receiveShadow = true
                }
            })
            scene.add(logo)
            animate()
        })
    })
</script>

<script context="module">
    export const prerender = false;
    export const ssr = false
</script>

<canvas class="lg:order-last" bind:this={canvas} width="450" height="450"></canvas>