type RainbowButtonType = {
  buttonText: string;
  onClick?: () => void;
};

const RainbowButton: React.FunctionComponent<RainbowButtonType> = ({
  buttonText,
}) => {
  return (
    <button className="flex items-center justify-center rounded-2xl font-bold text-base text-bright-white bg-rainbow p-3.5 gap-2.5">
      {buttonText}
    </button>
  );
};

export default RainbowButton;
