import React, { useEffect, useState } from "react";
import "./categ.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function CategHead() {
  const [data, setData] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [brend, setBrend] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  // const currentItems = data.slice(itemOffset, itemOffset + itemsPerPage);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  const showMore = () => {
    setLimit((prev) => prev + 2);
  };

  useEffect(() => {
    filteredCars();
  }, [data]);

  const filteredCars = () => {
    let filtered = data;

    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }
    if (year) {
      filtered = filtered.filter((item) => item.year === year);
    }
    if (model) {
      filtered = filtered.filter((item) => item.model === model);
    }
    if (brend) {
      filtered = filtered.filter((item) => item.brend === brend);
    }
    setFilterCategory(filtered);
  };

  return (
    <>
      <div className="box-im bg w-[100%] lg:h-[400px] relative">
        <img className="w-[100%] h-[100%]" src="/img/walp.jpg" alt="" />
        <div className="img-cont absolute left-0 top-0 w-[100%] h-[100%] bg-[#05040478]">
          <h1 className="text-white text-center text-[36px] mt-[10%]">
            İcarəyə verilən avtomobillər
          </h1>
        </div>
      </div>

      <div className="selectors absolute lg:top-[60%] top-[35%] lg:left-[16%] left-[3%] grid lg:grid-cols-12 lg:w-[70%] w-[95%] m-auto border rounded-[10px] bg-white lg:p-10 p-5 my-2  shadow-md">
        <div className="select col-span-2 lg:m-0  m-2  border-r border-black">
          <h1 className="text-[25px]">sinif</h1>
          <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select</option>
            <option value="econom">econom</option>
            <option value="premium">premium</option>
            <option value="biznes">biznes</option>
            <option value="crossover">crossover</option>
            <option value="extreme">extreme</option>
          </select>
        </div>
        <div className="select col-span-2 lg:m-0  m-2 lg:border-r border-black ">
          <h1 className="text-[25px]">il</h1>
          <select name="" id="" onChange={(e) => setYear(e.target.value)}>
            <option value="">Select</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="select col-span-2 border-r border-black lg:m-0  m-2 ">
          <h1 className="text-[25px]">model</h1>
          <select name="" id="" onChange={(e) => setModel(e.target.value)}>
            <option value="">Select</option>
            <option value="hatchback">hatchback</option>
            <option value="jeep">jeep</option>
            <option value="pickup">pickup</option>
            <option value="sport">sport</option>
            <option value="vito">vito</option>
            <option value="avtobus">avtobus</option>
          </select>
        </div>
        <div className="select col-span-2 lg:m-0  m-2 ">
          <h1 className="text-[25px]">brend</h1>
          <select name="" id="" onChange={(e) => setBrend(e.target.value)}>
            <option value="">Select</option>
            <option value="hundai">hundai</option>
            <option value="toyota">toyota</option>
            <option value="mercedes">mercedes</option>
            <option value="ford">ford</option>
            <option value="volvo">volvo</option>
            <option value="rangerover">RangeRover</option>
            <option value="mazerrati">Mazerrati</option>
          </select>
        </div>
        <div
          className="dayPrice flex justify-center col-span-4 w-[200px] lg:my-0  items-center  rounded-[5px] h-[62px] bg-[#f36f20]"
          onClick={filteredCars}
        >
          <button className="text-[#fff]">Axtar</button>
        </div>
      </div>

      <div className="cars-b lg:my-40 mt-[110%] mb-[0%] grid lg:grid-cols-4 grid-cols-1">
        {filterCategory
          .slice(itemOffset, itemOffset + itemsPerPage)
          .map((car) => (
            <Link
              to={`/paramsPage/${car.id}`}
              key={car.id}
              className="no-underline"
            >
              <div
                className="card hover:scale-y-105 shadow-md transition-all mx-auto  pb-2 bg-white border my-2 w-[270px] rounded-[10px]"
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
            </Link>
          ))}
      </div>
      <div className="paginate22">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

export default CategHead;
