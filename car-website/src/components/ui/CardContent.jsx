import React from "react";

const CardContent = ({ item }) => (
  <div className="flex relative items-center justify-center bg-[#111213] p-6 rounded-3xl h-[290px] w-[200px] text-white mt-20">
    <div className="absolute rounded-3xl inset-0 overflow-hidden pointer-events-none">
      <div
        className="
          absolute w-[120px] h-[180px]
          top-[-10%] left-[-10%]
          bg-[radial-gradient(circle_at_top_left,_rgba(55,74,109,1)_0%,_rgba(55,74,109,0.5)_40%,_transparent_80%)]
          blur-[60px] 
        "
      ></div>
    </div>
    <div className="relative z-10">
      <div className="flex flex-col">
        <h1 className="text-xl">{item.name}</h1>
        <h2 className="text-base">{item.model}</h2>
      </div>
      <div className="flex">
        <img
          src={item.image}
          alt={`${item.model}`}
          className="h-16 object-contain m-6"
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="flex gap-2 items-center text-xs ">
          <img src={item.accelerationIcon} alt="" />
          <span>{item.acceleration} Sec</span>
        </div>
        <div className="flex gap-2 items-center text-xs ">
          <img src={item.maxSpeedIcon} alt="" />
          <span>{item.maxSpeed}Km/h</span>
        </div>
        <div className="flex gap-2 items-center text-xs ">
          <img src={item.fuelIcon} alt="" />
          <span>{item.fuel}</span>
        </div>
      </div>
      <div className="flex mt-5 justify-between text-base">
        <span>${item.prices}</span>
      </div>
      <div className="py-3 px-3 bottom-[-9%] right-[-15%] rounded-tl-2xl rounded-br-2xl absolute bg-blue-400">
        <button>
          <img src={item.saveIcon} className="h-4" />
        </button>
      </div>
    </div>
  </div>
);
export default CardContent;
