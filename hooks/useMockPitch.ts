/* PLACEHOLDER. This stands in for real microphone pitch detection so the
   tuning panel has something to react to. Delete this file once the audio
   layer lands and feed the panel a real detected frequency instead. */

import { useEffect, useState } from "react";
import { CENTS_RANGE, frequencyAtCents, IN_TUNE_CENTS } from "../lib/pitch";

const TICK_MS = 100;
/* How much of the remaining distance to the goal we close each tick. */
const EASING = 0.12;
/* Roughly how long to sit near a goal before picking the next one. */
const TICKS_PER_GOAL = 18;

/* Alternate between a wide swing and a near-perfect one so a watcher sees all
   three states rather than waiting on luck for the in-tune window. */
const nextGoal = (wasWide: boolean) =>
  wasWide
    ? (Math.random() * 2 - 1) * IN_TUNE_CENTS * 0.6
    : (Math.random() * 2 - 1) * (CENTS_RANGE - 5);

const useMockPitch = (target: number, isRunning: boolean) => {
  const [cents, setCents] = useState(0);

  useEffect(() => {
    setCents(0);
    if (!isRunning) return;

    let wide = false;
    let goal = nextGoal(wide);
    let ticks = 0;

    const id = setInterval(() => {
      ticks += 1;
      if (ticks >= TICKS_PER_GOAL) {
        wide = !wide;
        goal = nextGoal(wide);
        ticks = 0;
      }
      /* Ease toward the goal, plus a little jitter so it reads like a real
         signal rather than a scripted animation. */
      setCents(
        (prev) => prev + (goal - prev) * EASING + (Math.random() - 0.5) * 1.5,
      );
    }, TICK_MS);

    return () => clearInterval(id);
  }, [isRunning, target]);

  return { cents, frequency: frequencyAtCents(target, cents) };
};

export default useMockPitch;
