<script lang="ts">
  import QRCode from "qrcode";
  import { onMount } from "svelte";
  export let text = "sample text";

  onMount(() => {
    const canvas = document.getElementById("canvas");
    QRCode.toCanvas(canvas, text, (error) => {
      if (error) console.error(error);
    });
  });

</script>

<div>
  <canvas id="canvas" />
</div>
