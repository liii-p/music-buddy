import { Dispatch, SetStateAction, useState } from "react";

type ReferencePitchType = {
  refPitch: number;
  setRefPitch: Dispatch<SetStateAction<number>>;
};

const ReferencePitch: React.FunctionComponent<ReferencePitchType> = ({
  refPitch,
  setRefPitch,
}) => {
  return (
    <div className="flex items-center justify-between bg-bright-white/5 border border-white/9 rounded-lg py-2 px-3.5">
      <button
        onClick={() => setRefPitch(refPitch - 1)}
        className="w-8 h-8 rounded-2xl text-base border border-bright-white/60 cursor-pointer"
      >
        -
      </button>
      <p className="font-jetbrains font-semibold">{refPitch} Hz</p>
      <button
        onClick={() => setRefPitch(refPitch + 1)}
        className="w-8 h-8 rounded-2xl text-base border border-bright-white/60 cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default ReferencePitch;
