<script lang="ts">
  import { Spring } from 'svelte/motion';
    import "../../styles.css"

    const Left = "https://nayutalien.com/y/medako2_l.png"
    const Right = "https://nayutalien.com/y/medako2_r.png"

    let canvas: HTMLCanvasElement
    let mousePos = $state({x: 0, y: 0})
    let screenSize = $state({width: 0, height: 0})

    // let scale = $derived(Math.min(screenSize.height / 1080, screenSize.width / 1920))
    let transformSpring = new Spring({x: 1, y: 2})

    $effect(() => {
        // transformSpring.target.x = 
    })

    let scale = 1
    let medakoModel = $derived(mousePos.x > screenSize.width / 2 ? Left : Right)
</script>

<svelte:window bind:innerHeight={screenSize.height} bind:innerWidth={screenSize.width} onmousemove={e => mousePos = {x: e.clientX, y: e.clientY}}/>


<div class="bg-seijin-red h-screen">
    <div style={`transform: scale(${scale}) translateX(${transformSpring.current.x}) translateX(${transformSpring.current.y});`} class="h-full select-none flex flex-col justify-between text-seijin-text font-bold text-center text-wrap break-all leading-none font-seijin">
        <p class="text-[30vw]">ダンス</p>
        <p class="text-[15vw]">ロボットダンス</p>
        <div class="inset-0 absolute flex justify-center">
            <img src={medakoModel} class="max-h-full" alt="medako-left"/>
        </div>
    </div>
</div>
