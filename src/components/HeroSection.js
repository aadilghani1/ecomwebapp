import Carousel, {
  arrowsPlugin,
  autoplayPlugin,
  Dots,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function HeroSection() {
  return (
    <div className="mx-10 mb-10">
      <div className="flex justify-between">
        <Carousel
          className="relative mr-2 cursor-pointer"
          plugins={[
            "infinite",
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <button className="bg-gray-300 p-3 absolute left-0 z-50 bg-opacity-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                ),
                arrowLeftDisabled: <button></button>,
                arrowRight: (
                  <button className="bg-gray-300 p-3 absolute right-0 z-50 bg-opacity-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ),
                arrowRightDisabled: <button></button>,
                addArrowClickHandler: true,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
              stopAutoPlayOnHover: true,
            },
          ]}
        >
          <img
            src="https://shop.xprogroup.com.au/asset/foto_slide/slide-1.jpg"
            alt=""
          />
          <img
            src="https://shop.xprogroup.com.au/asset/foto_slide/slide-2.jpg"
            alt=""
          />
          <img
            src="https://shop.xprogroup.com.au/asset/foto_slide/slide-3.jpg"
            alt=""
          />
        </Carousel>
        <div className="flex flex-col w-1/2">
          <img
            src="https://shop.xprogroup.com.au/asset/foto_pasangiklan/promotion-2.jpg"
            className="h-1/2 mb-4"
            alt=""
          />
          <img
            src="https://shop.xprogroup.com.au/asset/foto_pasangiklan/promotion-1.jpg"
            className="h-1/2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
