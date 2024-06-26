import React, { useEffect, useState } from "react";

function ByClassRes() {
  const port = import.meta.env.VITE_PORT
  const [data, setData] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    fetch(`${port}/cars`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const showMore = () => {
    setLimit((prev) => prev + 2);
  };

  useEffect(() => {
    filteredCars();
  }, [category, data]);

  const filteredCars = () => {
    let filtered = data;

    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }
    setFilterCategory(filtered);
  };

  return (
    <div className="w-[100%]">
      <h1 className="text-center text-[32px] py-4">
        İcarəyə verilən avtomobillər (klass üzrə)
      </h1>
      <div className="buttons w-[70%] m-auto lg:flex hidden justify-between my-4">
        <button
          className="border  hover:border-orange-500 border-white py-[10px] font-[600] px-[20px] text-[#979797] rounded-[8px]"
          value=""
          onClick={(e) => setCategory(e.target.value)}
        >
          Hamisi
        </button>
        <button
          className="border transiii hover:border-orange-500 border-white py-[10px] font-[600] px-[20px] text-[#979797] rounded-[8px]"
          value="econom"
          onClick={(e) => setCategory(e.target.value)}
        >
          Ekonom
        </button>
        <button className="border  hover:border-orange-500 border-white py-[10px] font-[600] px-[20px] text-[#979797] rounded-[8px]">
          Biznes
        </button>
        <button className="border hover:border-orange-500 border-white py-[10px] font-[600] px-[20px] text-[#979797] rounded-[8px]">
          Premium
        </button>
        <button className="border hover:border-orange-500 border-white py-[10px] font-[600] px-[20px] text-[#979797] rounded-[8px]">
          Crossover&SUVs
        </button>
        <button className="border hover:border-orange-500 border-white py-[10px] font-[600] px-[20px] text-[#979797] rounded-[8px]">
          Avtobuslar və Mikroavtobuslar
        </button>
      </div>
      <div className="car-cards grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-[90%] m-auto py-4">
        {filterCategory.slice(0, limit).map((car) => (
          <div
            className="card hover:scale-y-105 transition-all mx-auto  pb-2 bg-white border my-1 w-[270px] rounded-[10px]"
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
      <div className="allsee  m-auto  w-[300px]">
        <button
          onClick={showMore}
          className="w-[231px]  rounded-[10px] ml-8 text-[18px] font-[600] text-[#F36F20]  border border-orange-500 p-3"
        >
          Hamisini Goster
        </button>
      </div>
    </div>
  );
}

export default ByClassRes;
