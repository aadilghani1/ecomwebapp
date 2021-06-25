const Feature = ({ Icon, text, subText }) => {
  return (
    <div className="flex justify-start items-center space-x-3 px-5 py-2 md:py-5 md:border-r border-gray-300">
      <Icon className="h-10 w-10" />
      <div className="flex flex-col space-y-1">
        <h1 className="font-semibold">{text}</h1>
        <h3 className="text-gray-700 text-sm">{subText}</h3>
      </div>
    </div>
  );
};

export default Feature;
