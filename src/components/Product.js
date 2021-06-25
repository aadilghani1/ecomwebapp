import { useState } from "react";

const Product = () => {
  const [mouse, setMouse] = useState(false);
  return (
    <div className="w-48 cursor-pointer border hover:border-opacity-100  border-opacity-0 border-gray-500">
      <div
        className="p-5 flex flex-col space-y-2 "
        onMouseOver={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <img
          loading="lazy"
          src="https://i.gadgets360cdn.com/products/large/sony-ps5-649x800-1592631239.jpeg"
          alt="product"
          className="h-32 w-32 object-contain"
        />
        <div className="flex flex-col space-y-2  w-full">
          <h5 className="text-sm w-full text-gray-400 border-b pb-2 border-gray-300">
            Gaming Console
          </h5>
          <h5 className="text-md text-blue-600">PS5</h5>
        </div>
        <div className={`${mouse ? "hidden" : "flex flex-col h-10"}`}>
          <div className="flex text-xs items-center space-x-2">
            <div className="flex">
              {Array(3)
                .fill()
                .map((_, i) => (
                  <span key={i} role="img" aria-label="star">
                    ⭐️
                  </span>
                ))}
            </div>
            <p>3</p>
          </div>
          <h3 className="text-sm text-gray-900">Rp 300,000</h3>
        </div>
        <div className={`${mouse ? "block h-10" : "hidden"}`}>
          <button className="px-8 py-1 text-white text-sm bg-black rounded-sm hover:opacity-25">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
