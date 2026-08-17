import { Dispatch, SetStateAction } from "react";

type StringsProps = {
    stringName: string;
    octave: number;
    hertz: number;
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<String>>;
    stringId: string;
}

const Strings: React.FunctionComponent<StringsProps> = ({stringName, octave, hertz, isActive, setIsActive, stringId}) => {
    
    return (
        <div onClick={() => setIsActive(stringId)} className={"flex justify-between rounded-xl items-center py-2.5 px-3.5 text-bright-white bg-transparent cursor-pointer" + (isActive ? " active-string" : "")}>
            <div className="flex items-baseline gap-x-1">
                <p className="text-xl font-bold">{stringName}</p>
                <p className="text-xs">{octave}</p>
            </div>
            <div>
                <p className="font-jetbrains text-sm text-grey">{hertz} Hz</p>
            </div>
        </div>
    )
};

export default Strings;