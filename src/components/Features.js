import Feature from "./Feature";
import { BiRocket } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
const Features = () => {
  return (
    <div className="hidden sm:block bg-gray-100 mx-10 ">
      <div className="grid grid-cols-2 md:grid-cols-4 text-2xl py-3">
        <Feature
          Icon={BiRocket}
          text="FREE DELIVERY"
          subText="On Orders Over $90"
        />
        <Feature
          Icon={AiOutlineCreditCard}
          text="FREE DELIVERY"
          subText="On Orders Over $90"
        />
        <Feature
          Icon={BiRocket}
          text="FREE DELIVERY"
          subText="On Orders Over $90"
        />
        <Feature
          Icon={BiRocket}
          text="FREE DELIVERY"
          subText="On Orders Over $90"
        />
      </div>
    </div>
  );
};

export default Features;
