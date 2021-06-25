export default function HeaderMain() {
  return (
    <div className="flex items-center py-1 justify-between px-10 sticky top-0 bg-white z-50">
      <img
        src="https://shop.xprogroup.com.au/asset/logo/tajalapak-black1.png"
        alt=""
        className=""
      />
      <div className="flex h-11 -ml-32">
        <select
          name="option"
          id="option"
          className="pr-16 rounded-l-md border border-solid border-gray-300 focus:outline-none"
        >
          <option value="Select">All</option>
          <option value="Antiques">Antiques</option>
          <option value="Art">Art</option>
        </select>
        <input
          type="text"
          placeholder="I'm Shopping For..."
          className="border border-solid border-gray-300 focus:outline-none pr-32"
        />
        <button className="bg-black bg-opacity-30 px-7 rounded-r-md font-bold text-sm hover:opacity-80 transition-all ease-in duration-200">
          Search
        </button>
      </div>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 mr-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="gray"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 mr-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="gray"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 mr-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="gray"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}
