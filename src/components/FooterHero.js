const FooterHero = () => {
  return (
    <div className="flex justify-center mb-10">
      <div className=" bg-gray-100 flex  space-x-5 pb-5 pt-20 pr-10">
        <img
          src="https://shop.xprogroup.com.au/asset/images/app.png"
          alt="phone"
        />
        <div className="flex items-start flex-col space-y-5">
          <h1 className="text-xl">SHOP.EXPROGROUP.COM.AU</h1>
          <h1 className="text-sm text-gray-600">SHOP.EXPROGROUP.COM.AU</h1>
          <form className="flex items-center text-sm">
            <input
              type="email"
              className="py-1 w-64 px-3 border-none focus:outline-none placeholder-opacity-5"
              placeholder="Email Address"
            />
            <button className="outline-none border-none px-4 py-1 text-sm bg-black text-white">
              Subscribe
            </button>
          </form>
          <div className="flex items-center space-x-3">
            <img
              src="https://shop.xprogroup.com.au/asset/images/google-play.png"
              alt="Play Store"
              className="h-8 object-contain"
            />
            <img
              src="https://shop.xprogroup.com.au/asset/images/app-store.png"
              alt="App Store"
              className="h-8 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHero;
