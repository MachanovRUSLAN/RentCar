import React from "react";

function DarkCards() {
  return (
    <div className="div mb-[120px]">
      <div className="w-100% bg-slate-200 py-10  lg:h-[130px]">
        <div className="lg:flex col lg:justify-center relative">
          <div className="cart relative mx-2 my-1">
            <img
              src="/img/bgDark.png"
              className="rounded-[10px] bg-black m-auto"
              alt=""
            />
            <div className="absolute top-[30%] left-[35%] text-center">
              <h1 className="text-[30px] text-[#fff]">20+ iL</h1>
              <p className="text-[#fff]">tecrube</p>
            </div>
          </div>
          <div className="cart relative  mx-2 my-1">
            <img
              className="rounded-[10px] bg-black m-auto"
              src="/img/bgDark.png"
              alt=""
            />
            <div className="absolute top-[30%] left-[35%] text-center">
              <h1 className="text-[30px] text-[#fff]">20+ iL</h1>
              <p className="text-[#fff]">tecrube</p>
            </div>
          </div>
          <div className="cart relative mx-2 my-1">
            <img
              src="/img/bgDark.png"
              className="rounded-[10px] bg-black m-auto"
              alt=""
            />
            <div className="absolute top-[30%] left-[35%] text-center">
              <h1 className="text-[30px] text-[#fff]">20+ iL</h1>
              <p className="text-[#fff]">tecrube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DarkCards;
