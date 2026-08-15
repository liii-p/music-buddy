type StringsProps = {
    stringName: string;
    octave: number;
    hertz: number;
}

const Strings: React.FunctionComponent<StringsProps> = ({stringName, octave, hertz}) => {
    // Reusable component
    return (
        <div className="flex justify-between rounded-xl items-center py-2.5 px-3.5 text-bright-white bg-transparent active:string-active cursor-pointer">
            <div className="flex items-baseline gap-x-1">
                <p className="text-xl">{stringName}</p>
                <p className="text-xs">{octave}</p>
            </div>
            <div>
                <p className="font-jetbrains text-sm text-grey">{hertz} Hz</p>
            </div>
        </div>
    )
};

export default Strings;