"use client";
import { useState } from "react";
import StringsWrapper from "./strings-panel/StringsPanelWrapper";
import RainbowButton from "../RainbowButton";
import ReferencePitch from "./strings-panel/ReferencePitch";
import TuningPanel from "./tuning-panel/TuningPanel";
import strings from "../../data/strings.json";
import { CONCERT_PITCH } from "../../lib/pitch";

const Tuner = () => {
  const [selectedInstrument, setSelectedInstrument] =
    useState<string>("guitar");
  const [refPitch, setRefPitch] = useState(CONCERT_PITCH);
  const [activeStringId, setActiveStringId] = useState("");
  const [isTuning, setIsTuning] = useState(false);

  const stringsInfo = strings[selectedInstrument as keyof typeof strings];
  /* Falling back to the first string covers both the initial empty id and an
     id left over from an instrument that no longer has that string. */
  const activeString =
    stringsInfo.find(
      (string) => `${string.stringName}${string.octave}` === activeStringId,
    ) ?? stringsInfo[0];

  return (
    <>
      <div className="bg-circle-purple h-105 w-105 absolute -top-40 -left-30"></div>
      <div className="bg-circle-blue h-105 w-105 absolute -bottom-60 right-0"></div>
      <div className="bg-circle-pink h-75 w-75 absolute right-[10%] top-[20%] blur-[50px]"></div>
      <div className="max-w-6xl xl:mx-auto sm:mx-10 mx-5 mt-5">
        <section className="flex justify-between mb-5">
          <div className="flex gap-x-5">
            <div className="w-6 h-6 rounded-md rotate-45 bg-linear-[135deg,oklch(0.72_0.19_340),oklch(0.62_0.19_300),oklch(0.68_0.19_250)]"></div>
            <p className="font-extrabold text-lg">Music Buddy</p>
          </div>
          <select
            value={selectedInstrument}
            onChange={(e) => setSelectedInstrument(e.target.value)}
            className="tuner-select text-sm border rounded-xl py-2.5 px-4"
          >
            <option value="guitar">Guitar</option>
            <option value="bass">Bass</option>
            <option value="violin">Violin</option>
            <option value="ukelele">Ukelele</option>
          </select>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-[360px_1fr] max-w-6xl gap-6">
          <div className="bg-glass border border-white/9 flex flex-col order-2 md:order-1 rounded-3xl p-6 gap-5">
            <p className="text-xs text-grey font-bold tracking-widest">
              STRINGS
            </p>
            <StringsWrapper
              stringsInfo={stringsInfo}
              selectedInstrument={selectedInstrument}
              activeStringId={`${activeString.stringName}${activeString.octave}`}
              setActiveStringId={setActiveStringId}
            />
            <hr />
            <ReferencePitch refPitch={refPitch} setRefPitch={setRefPitch} />
            <RainbowButton
              buttonText={isTuning ? "Stop Tuning" : "Start Tuning"}
              onClick={() => setIsTuning(!isTuning)}
            />
          </div>
          <TuningPanel
            activeString={activeString}
            refPitch={refPitch}
            isTuning={isTuning}
          />
        </section>
      </div>
    </>
  );
};

export default Tuner;
