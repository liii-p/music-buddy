import {
  CENTS_RANGE,
  IN_TUNE_CENTS,
  TuningState,
  centsToPercent,
  clampCents,
  getTuningState,
} from "../../../lib/pitch";

type DialProps = {
  cents: number;
};

/* Written out in full so Tailwind's scanner picks them up. */
export const TONE_CLASSES: Record<TuningState, string> = {
  flat: "text-flat",
  "in-tune": "text-in-tune",
  sharp: "text-sharp",
};

/* Nine dividers cut the track into ten even segments. */
const TICKS = Array.from({ length: 9 }, (_, i) => (i + 1) * 10);

/* The in-tune window as a share of the whole track. */
const IN_TUNE_WIDTH = (IN_TUNE_CENTS / CENTS_RANGE) * 100;

/* Half the puck's width, so it can never hang over either end of the track. */
const PUCK_INSET = "1rem";

const Dial: React.FunctionComponent<DialProps> = ({ cents }) => {
  const tone = TONE_CLASSES[getTuningState(cents)];
  const offset = clampCents(cents);
  const rounded = Math.round(cents);

  /* The fill grows out from the centre towards whichever side is off. */
  const fillWidth = `${(Math.abs(offset) / CENTS_RANGE) * 50}%`;
  const fillPosition =
    offset < 0
      ? { right: "50%", width: fillWidth }
      : { left: "50%", width: fillWidth };

  return (
    <div className="max-w-1/2 mx-auto">
      <div className="flex items-baseline justify-between mb-3">
        <p className="text-xs text-grey font-bold tracking-widest">FLAT</p>
        <p className={"font-jetbrains text-base font-semibold " + tone}>
          {rounded > 0 ? "+" : ""}
          {rounded}¢
        </p>
        <p className="text-xs text-grey font-bold tracking-widest">SHARP</p>
      </div>

      <div className="relative h-10">
        <div
          role="meter"
          aria-label="Tuning offset in cents"
          aria-valuemin={-CENTS_RANGE}
          aria-valuemax={CENTS_RANGE}
          aria-valuenow={rounded}
          aria-valuetext={`${rounded} cents`}
          className="relative h-3.5 rounded-md bg-bright-white/5 border border-white/9 overflow-hidden"
        >
          <div
            className="absolute inset-y-0 bg-in-tune/20"
            style={{
              left: `${50 - IN_TUNE_WIDTH / 2}%`,
              width: `${IN_TUNE_WIDTH}%`,
            }}
          />
          {TICKS.map((tick) => (
            <div
              key={tick}
              className="absolute inset-y-0 w-px bg-white/10"
              style={{ left: `${tick}%` }}
            />
          ))}
          <div
            className="absolute inset-y-0 bg-rainbow transition-[width] duration-100 ease-out motion-reduce:transition-none"
            style={fillPosition}
          />
          {/* Sits above the fill so the target stays visible whichever way the
              bar has grown. */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-in-tune" />
        </div>

        <div
          className={
            "dial-puck absolute top-2 w-8 h-8 rounded-full -translate-x-1/2 " +
            tone
          }
          style={{
            left: `clamp(${PUCK_INSET}, ${centsToPercent(cents)}%, calc(100% - ${PUCK_INSET}))`,
          }}
        />
      </div>
    </div>
  );
};

export default Dial;
