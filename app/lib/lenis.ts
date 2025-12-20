"use client";

import Lenis from "@studio-freight/lenis";

export const initLenis = () => {
  const lenis = new Lenis({
    lerp: 0.08, // smoothness intensity
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};
