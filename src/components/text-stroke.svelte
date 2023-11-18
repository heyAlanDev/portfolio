<script>
  export let upText = 'Fullstack'
  export let downText = 'Developer'
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 680 232"
  class="text-8xl tracking-[0.005rem] fill-white font-sans font-extrabold uppercase {$$props.class}"
>
  <g>
    <rect fill="#8c7b5a" width="50%" height="50%" x="25%" y="25%" />
    <text
      x="-19"
      transform="translate(50 99.2)"
      translate="no"
      style="
        stroke-linecap: round;
        stroke-linejoin: round;
      "
      class="stroke-[#8c7b5a] stroke-[56px] stroke"
    >
      {upText}
      <tspan x="-25" y="96">{downText}</tspan>
    </text>
    <text x="-19" transform="translate(50 99.2)" translate="no">
      {upText}
      <tspan x="-25" y="96">{downText}</tspan>
    </text>
  </g>
</svg>
