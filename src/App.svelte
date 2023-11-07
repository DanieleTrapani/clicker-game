<script lang="ts">
  import earthImg from "./assets/earth.png";
  import spaceImg from "./assets/space.jpeg";
  let points = 0;

  const addPoints = () => {
    points += 100;
  };
</script>

<main>
  <h4 class="text-white text-center text-xl mt-4">Score: {points}</h4>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img
    src={earthImg}
    alt="earth"
    class="w-56 m-auto mt-10 hover:scale-110"
    on:click={addPoints}
  />
  <div />
</main>

<style>
  h4 {
    font-family: "Chakra Petch", sans-serif;
  }
</style>
