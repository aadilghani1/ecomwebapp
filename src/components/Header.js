export default function Header() {
  return (
    <div className="flex items-center justify-center bg-darkGray w-full h-9 font-semibold text-sm my-8">
      <div className="flex items-center mr-32 -ml-72">
        <h3 className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </h3>
        <h3 className="text-white ml-2 cursor-pointer">Product Category</h3>
      </div>
      <div className="flex divide-x-2 divide-black text-white font-normal">
        <h3 className="px-5 cursor-pointer">About Us</h3>
        <h3 className="px-5 cursor-pointer">How To Shop</h3>
        <h3 className="px-5 cursor-pointer">Tracking Orders</h3>
        <h3 className="px-5 cursor-pointer">Orders Confirmation</h3>
        <h3 className="px-5 cursor-pointer">Shop ( Seller)</h3>
      </div>
    </div>
  );
}
