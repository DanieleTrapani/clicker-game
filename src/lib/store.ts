import { writable } from "svelte/store";

export const state = writable({
    points: parseInt(localStorage.getItem("points")!) || 0,
    autoclickerLevel: parseInt(localStorage.getItem("Autoclicker")!) || 0,
    tapLevel: parseInt(localStorage.getItem("Points per click")!) || 0,
});
