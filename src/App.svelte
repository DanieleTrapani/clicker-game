<script lang="ts">
  import earthImg from "./assets/earth.png";
  import spaceImg from "./assets/space.jpeg";
  import Upgrade from "./lib/Upgrade.svelte";
  let points = 0;

  const addPoints = () => {
    points += 100;
  };
</script>

<main class="flex flex-col">
  <h4 class="text-white text-center text-xl mt-4">Score: {points} pts</h4>
  <h6 class="text-white text-center text-xs">0 pts/s</h6>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img
    src={earthImg}
    alt="earth"
    class="w-56 m-auto mt-10 hover:scale-110"
    on:click={addPoints}
  />
  <div
    class=" flex flex-col gap-4 w-full h-screen bg-gray-900 text-white px-5 py-4 mt-12"
  >
    <Upgrade />
    <Upgrade />
  </div>
</main>

<style>
  main {
    font-family: "Chakra Petch", sans-serif;
  }
</style>
