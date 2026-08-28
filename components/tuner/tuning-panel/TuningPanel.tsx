import useMockPitch from "../../../hooks/useMockPitch";
import {
  TuningState,
  getTuningState,
  targetFrequency,
} from "../../../lib/pitch";
import Dial, { TONE_CLASSES } from "./Dial";

type TuningPanelProps = {
  activeString: { stringName: string; octave: number; hertz: number };
  refPitch: number;
  isTuning: boolean;
};

const STATUS_TEXT: Record<TuningState, string> = {
  flat: "Too flat — tighten the string",
  "in-tune": "In tune",
  sharp: "Too sharp — loosen the string",
};

const TuningPanel: React.FunctionComponent<TuningPanelProps> = ({
  activeString,
  refPitch,
  isTuning,
}) => {
  const target = targetFrequency(activeString.hertz, refPitch);
  const { cents, frequency } = useMockPitch(target, isTuning);
  const state = getTuningState(cents);

  return (
    <div className="bg-glass border border-white/9 flex flex-col order-1 md:order-2 rounded-3xl p-6 min-h-96">
      <p className="text-xs text-grey font-bold tracking-widest">TUNING</p>
      <div className="flex flex-1 flex-col items-center justify-center gap-8 py-6">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-baseline gap-x-1">
            <p className="text-7xl font-bold">{activeString.stringName}</p>
            <p className="text-xl">{activeString.octave}</p>
          </div>
          <p className="font-jetbrains text-sm text-grey">
            {frequency.toFixed(2)} Hz
          </p>
        </div>
        <div className="w-full max-w-2xl">
          <Dial cents={cents} />
        </div>
        <p
          aria-live="polite"
          className={
            "text-sm font-semibold " +
            (isTuning ? TONE_CLASSES[state] : "text-grey")
          }
        >
          {isTuning ? STATUS_TEXT[state] : "Press Start Tuning to begin"}
        </p>
      </div>
    </div>
  );
};

export default TuningPanel;
