<script lang="ts">
    import "../../styles.css"
    import Left from "@/assets/medako2_l.png"
    import Right from "@/assets/medako2_r.png"

    let canvas: HTMLCanvasElement
    let mousePos = $state({x: 0, y: 0})
    let screenSize = $state({width: 0, height: 0})

    let scale = $derived(Math.min(screenSize.height / 1080, screenSize.width / 1920))
    let medakoModel = $derived(mousePos.x > screenSize.width / 2 ? Left : Right)
</script>

<svelte:window bind:innerHeight={screenSize.height} bind:innerWidth={screenSize.width} onmousemove={e => mousePos = {x: e.clientX, y: e.clientY}}/>


<div class="relative bg-seijin-red">
    <div style={`transform: scale(${scale});`} class="absolute top-0 left-0 h-full w-full select-none flex flex-col justify-between text-seijin-text font-bold text-center text-wrap break-all leading-none font-seijin">
        <p class="text-[30vw]">ダンス</p>
        <p class="text-[10vw]">ロボットダンス</p>
        <div class="inset-0 absolute flex justify-center">
            <img src={medakoModel} class="max-h-full" alt="medako-left"/>
        </div>
    </div>
</div>
