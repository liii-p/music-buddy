import { Dispatch, SetStateAction } from "react";
import StringsPanel from "./StringsPanel";

type StringsWrapperProps = {
  stringsInfo: { stringName: string; octave: number; hertz: number }[];
  selectedInstrument: string;
  activeStringId: string;
  setActiveStringId: Dispatch<SetStateAction<string>>;
};

const StringsPanelWrapper: React.FunctionComponent<StringsWrapperProps> = ({
  stringsInfo,
  selectedInstrument,
  activeStringId,
  setActiveStringId,
}) => {
  return (
    <div>
      {stringsInfo.map((string) => {
        const stringId = `${string.stringName}${string.octave}`;
        return (
          <StringsPanel
            key={`${selectedInstrument}${stringId}`}
            stringId={stringId}
            isActive={stringId === activeStringId}
            setIsActive={setActiveStringId}
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
