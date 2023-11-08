<script lang="ts">
  import earthImg from "./assets/earth.png";
  import Upgrade from "./lib/Upgrade.svelte";
  import { writable } from "svelte/store";

  export const state = writable({
    points: parseInt(localStorage.getItem("points")!) || 0,
    autoclickerLevel: parseInt(localStorage.getItem("Autoclicker")!) || 0,
    tapLevel: parseInt(localStorage.getItem("Points per click")!) || 0,
  });

  $: pointsPerSec = $state.autoclickerLevel * 1;
  $: pointsPerTap = $state.tapLevel * 1 + 1;

  const addPoints = () => {
    $state.points += pointsPerTap;
    localStorage.setItem("points", $state.points.toString());
  };

  let scale = false;
  const animate = () => {
    scale = true;
    setTimeout(() => {
      scale = false;
    }, 50);
  };

  setInterval(() => {
    $state.points += pointsPerSec;
    localStorage.setItem("points", $state.points.toString());
  }, 1000);
</script>

<main class="flex flex-col">
  <h4 class="text-white text-center text-xl mt-4">
    Score: {$state.points} pts
  </h4>
  <h6 class="text-white text-center text-xs">{pointsPerSec} pts/s</h6>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img
    src={earthImg}
    alt="earth"
    class="w-56 m-auto mt-10"
    class:scale
    on:click={addPoints}
    on:click={animate}
  />
  <div
    class="upgrade-list flex flex-col gap-4 w-full h-screen bg-gray-900 text-white px-5 py-4 mt-12"
  >
    <Upgrade name={"Autoclicker"} bind:level={$state.autoclickerLevel} />
    <Upgrade name={"Points per click"} bind:level={$state.tapLevel} />
  </div>
</main>

<style>
  main {
    font-family: "Chakra Petch", sans-serif;
  }

  .scale {
    transform: scale(1.1);
  }
</style>
