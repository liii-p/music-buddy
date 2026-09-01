type RainbowButtonType = {
  buttonText: string;
  onClick?: () => void;
  classes?: string;
};

const RainbowButton: React.FunctionComponent<RainbowButtonType> = ({
  buttonText,
  onClick,
  classes,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-2xl font-bold text-base text-bright-white bg-rainbow p-3.5 gap-2.5 cursor-pointer ${classes}`}
    >
      {buttonText}
    </button>
  );
};

export default RainbowButton;
