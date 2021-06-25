export default function HeaderBanner() {
  return (
    <div className="flex bg-gray-200 text-sm py-2 mb-6 justify-between px-7">
      <h2 className="font-bold cursor-default">
        Welcome to Aussie Market Place
      </h2>
      <div className="flex items-center ">
        <h5 className="mr-9 cursor-pointer">Track Your Package</h5>
        <label for="options" className="mr-2">
          Currency
        </label>

        <select
          name="options"
          id="options"
          className="pr-8 bg-transparent focus:outline-none font-bold mr-14"
        >
          <option value="Rupiah">Rupiah</option>
          <option value="saab">Hongkong dollar</option>
          <option value="mercedes">Australia dollar</option>
        </select>
        <div className="flex text-gray-500">
          <h5 className="cursor-pointer hover:text-yellow-600 transition-all ease-in duration-300">
            Login
          </h5>
          <p className="mx-2 cursor-default">/</p>
          <h5 className="cursor-pointer hover:text-yellow-600 transition-all ease-in duration-300">
            Register
          </h5>
        </div>
      </div>
    </div>
  );
}
