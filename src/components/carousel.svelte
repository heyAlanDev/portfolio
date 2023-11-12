<script lang="ts">
  let slider: HTMLDivElement | null = null
  let isSliderDragging = false
  let xSliderScroll = 0

  const dragStart = (): boolean => (isSliderDragging = true)

  const dragMove = (e: MouseEvent): void => {
    if (!isSliderDragging || slider === null) return

    slider.scrollLeft -= e.movementX
    xSliderScroll = slider.scrollLeft
  }

  const dragStop = (): boolean => (isSliderDragging = false)
</script>

<div
  role="slider"
  tabindex="0"
  aria-valuenow={xSliderScroll}
  class="select-none flex overflow-x-scroll"
  on:mousedown={dragStart}
  on:mousemove={dragMove}
  on:mouseup={dragStop}
  on:mouseleave={dragStop}
  bind:this={slider}
>
  <div
    class="flex items-center flex-shrink-0 gap-2"
    style:cursor={isSliderDragging ? 'grabbing' : 'grab'}
  >
    <slot />
  </div>
</div>
