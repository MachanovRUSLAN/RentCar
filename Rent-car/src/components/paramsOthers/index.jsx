import React, { useEffect, useState } from "react";

function OtherCrs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/cars`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-[90%] m-auto my-4">
      <div className="flex justify-between items-center px-4">
        <h1 className="m-auto">Digər avtomobillər</h1>
        <div className="flex justify-center"></div>
      </div>
      <div className="grid grid-cols-12 pl-5 py-4 w-[100%] m-auto">
        {data.slice(0, 4).map((car) => (
          <div
            className="card hover:scale-y-105  m-auto  lg:col-span-3 md:col-span-6 col-span-12 transition-all pb-2 bg-white border my-1 w-[270px] rounded-[10px]"
            key={car.id}
          >
            <img src={car.img} alt="" />
            <div className="cont px-4 py-2">
              <h1 className="text-[20px] text-[#282828]">{car.title}</h1>
              <p className="text-[16px] text-[#282828]">2021-ci il</p>
              <p className="text-[#F36F20] text-[20px]">75AZN/gun</p>
            </div>
            <hr className="w-[231px] m-auto" />
            <div className="flex px-4 py-2">
              <div className="bak flex items-center mx-1">
                <span>
                  <img src="/img/ltr.png" alt="" />
                </span>
                <p className="my-1">1.5 L</p>
              </div>
              <div className="auto flex items-center mx-1">
                <span>
                  <img src="/img/auto.png" alt="" />
                </span>
                <p className="my-1">Auto</p>
              </div>
              <div className="bak flex items-center m-1">
                <span>
                  <img src="/img/oil.png" alt="" />
                </span>
                <p className="my-1">Yanacaq</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-[231px]  rounded-[10px] text-[18px] font-[600] text-[#F36F20]  border border-orange-500 p-3">
                Ətraflı
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherCrs;
