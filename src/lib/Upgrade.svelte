<script lang="ts">
  export let name: string;
  export let level: number;
  import { state } from "./store";

  $: cost = level * 100 + 100;

  let buttonScale = false;
  const animate = () => {
    buttonScale = true;
    setTimeout(() => {
      buttonScale = false;
    }, 50);
  };

  const levelUp = () => {
    level++;
    localStorage.setItem(name, level.toString());
    $state.points -= cost;
  };
</script>

<div
  class="flex justify-around items-center bg-gray-800 py-2 rounded-md shadow-lg shadow-gray-950"
>
  <p class="max-w-[5rem]">{name}</p>
  <p>Lv. {level}</p>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="flex flex-col justify-center items-center bg-[#FFD700] px-3 rounded-xl text-[#0E141D] min-w-[5rem]"
    class:buttonScale
    on:click={animate}
    on:click={levelUp}
  >
    <p>Buy</p>
    <p>{cost}pts</p>
  </div>
</div>

<style>
  .buttonScale {
    transform: scale(1.1);
  }
</style>
