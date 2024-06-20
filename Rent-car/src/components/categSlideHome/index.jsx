import React from "react";
import ByClass from "../byClass";
import ByClassRes from "../byClassResp";

function CategSlide() {
  return (
    <>
      <div className="lg:flex hidden w-[100%]">
        <div className="cart rounded-none w-[300px] h-[300px] relative">
          <img
            src="/img/ford.png"
            className="w-[100%] after:bg-[#282828]"
            alt=""
          />
          <div className="button flex  h-[50px] justify-center bg-[#282828] hover:bg-[#ea6107]">
            <button className="text-[#fff]">Ekonom</button>
          </div>
        </div>

        <div className="cart rounded-none w-[300px] h-[300px] relative">
          <img
            src="/img/sntafe.png"
            className="w-[100%] after:bg-[#282828]"
            alt=""
          />
          <div className="button flex  h-[50px] justify-center bg-[#282828] hover:bg-[#ea6107]">
            <button className="text-[#fff]">Ekonom</button>
          </div>
        </div>

        <div className="cart rounded-none w-[300px] h-[300px] relative">
          <img
            src="/img/ford.png"
            className="w-[100%] after:bg-[#282828]"
            alt=""
          />
          <div className="button flex  h-[50px] justify-center bg-[#282828] hover:bg-[#ea6107]">
            <button className="text-[#fff]">Ekonom</button>
          </div>
        </div>
        <div className="cart rounded-none w-[300px] h-[300px] relative">
          <img
            src="/img/ford.png"
            className="w-[100%] after:bg-[#282828]"
            alt=""
          />
          <div className="button flex  h-[50px] justify-center bg-[#282828] hover:bg-[#ea6107]">
            <button className="text-[#fff]">Ekonom</button>
          </div>
        </div>
        <div className="cart rounded-none w-[300px] h-[300px] relative">
          <img
            src="/img/ford.png"
            className="w-[100%] after:bg-[#282828]"
            alt=""
          />
          <div className="button flex  h-[50px] justify-center bg-[#282828] hover:bg-[#ea6107]">
            <button className="text-[#fff]">Ekonom</button>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <ByClassRes />
      </div>
    </>
  );
}

export default CategSlide;
