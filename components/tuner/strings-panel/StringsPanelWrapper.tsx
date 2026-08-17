import { useState } from "react";
import strings from "../../../data/strings.json";
import StringsPanel from "./StringsPanel";

type StringsWrapperProps = {
  selectedInstrument: string;
};

const StringsPanelWrapper: React.FunctionComponent<StringsWrapperProps> = ({
  selectedInstrument,
}) => {
  const stringsInfo = strings[selectedInstrument as keyof typeof strings];
  const [isActive, setIsActive] = useState("");
  const activeStringId =
    isActive || `${stringsInfo[0].stringName}${stringsInfo[0].octave}`;
  return (
    <div>
      {stringsInfo.map((string) => {
        const stringId = `${string.stringName}${string.octave}`;
        return (
          <StringsPanel
            key={`${selectedInstrument}${stringId}`}
            stringId={stringId}
            isActive={stringId === activeStringId}
            setIsActive={setIsActive}
            stringName={string.stringName}
            octave={string.octave}
            hertz={string.hertz}
          />
        );
      })}
    </div>
  );
};

export default StringsPanelWrapper;
