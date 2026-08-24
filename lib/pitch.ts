/* Pitch maths for the tuner. Everything here is pure, so the components that
   use it stay presentational. */

/* How far either side of the target the dial can show, in cents. A semitone is
   100 cents, so +/-50 covers the full distance to the neighbouring notes. */
export const CENTS_RANGE = 50;

/* Anything inside this window counts as in tune. */
export const IN_TUNE_CENTS = 5;

/* The pitch data/strings.json was written against. */
export const CONCERT_PITCH = 440;

export type TuningState = "flat" | "in-tune" | "sharp";

/* How far `frequency` sits from `target`, in cents. Positive means sharp. */
export const centsBetween = (frequency: number, target: number) =>
  1200 * Math.log2(frequency / target);

/* The reverse: the frequency sitting `cents` away from `target`. */
export const frequencyAtCents = (target: number, cents: number) =>
  target * 2 ** (cents / 1200);

/* The stored hertz values assume A=440, so shift them by whatever the user has
   set the reference pitch to. */
export const targetFrequency = (hertz: number, refPitch: number) =>
  hertz * (refPitch / CONCERT_PITCH);

export const clampCents = (cents: number) =>
  Math.max(-CENTS_RANGE, Math.min(CENTS_RANGE, cents));

export const getTuningState = (cents: number): TuningState => {
  if (Math.abs(cents) <= IN_TUNE_CENTS) return "in-tune";
  return cents < 0 ? "flat" : "sharp";
};

/* Where along the dial track a cents value sits, as a percentage from the left
   edge. 0 cents lands dead centre at 50%. */
export const centsToPercent = (cents: number) =>
  50 + (clampCents(cents) / CENTS_RANGE) * 50;
