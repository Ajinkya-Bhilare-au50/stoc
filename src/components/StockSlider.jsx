import React from "react";
import Slider from "react-slick";
import { TiArrowUpOutline, TiArrowDownOutline } from "react-icons/ti";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stocks = [
  {
    name: "HDFC BANK",
    price: "₹ 1695",
    image: "https://5.imimg.com/data5/RE/SP/EN/SELLER-95153528/hdfc-logo.png",
    change: 5.2, // Example percentage change
  },
  {
    name: "Reliance",
    price: "₹ 3060",
    image:
      "https://rilstaticasset.akamaized.net/sites/default/files/images/ril-logo-social_media.jpg",
    change: -3.7, // Example percentage change
  },
  {
    name: "Dr Reddy",
    price: "₹ 6240",
    image:
      "https://baselarea.swiss//wp-content/uploads/2020/06/dr-reddys-logo.jpg",
    change: 1.8, // Example percentage change
  },
];

const backgrounds = ["bg-blue-200", "bg-green-200", "bg-yellow-200"];

function StockSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 790, // Adjust this value as per your design needs
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full p-2">
      <Slider {...settings} className="mx-6">
        {stocks.map((stock, index) => (
          <div
            key={index}
            className={`flex flex-col  items-center justify-center ${
              backgrounds[index % backgrounds.length]
            } p-4 rounded-lg `}
          >
            <div className="flex justify-center items-center md:flex-none md:justify-start ">
              <img
                src={stock.image}
                alt={stock.name}
                className="w-20 h-20 rounded-xl m-2 shadow-md"
              />
            </div>
            <h2 className="text-xl text-black font-body text-center md:text-left">
              {stock.name}
            </h2>
            <div className="flex justify-center items-center gap-2 font-bold md:flex-none md:items-center md:gap-2 md:font-bold md:justify-start">
              <p className="text-lg text-gray-700 text-center md:text-start">
                {stock.price}
              </p>
              <div className="gap-2 justify-center items-center ">
                <p
                  className={`text-sm  flex items-center ${
                    stock.change > 0 ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {stock.change > 0 ? `+${stock.change}%` : `${stock.change}%`}
                  {stock.change > 0 ? (
                    <TiArrowUpOutline className="ml-1 text-green-700" />
                  ) : (
                    <TiArrowDownOutline className="ml-1 text-red-700" />
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default StockSlider;
