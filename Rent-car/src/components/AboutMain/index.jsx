import React from "react";

function About() {
  return (
    <div className="div mb-[120px]">
      <div className="w-100% bg-slate-200 h-[300px] relative pt-[160px] bg-[url(/img/bgpic.png)] bg-cover bg-center">
        <h1 className="text-center text-[33px]  text-[#fff]">
          Şirkət haqqında
        </h1>
        <hr className="m-auto w-[200px] h-[5px] bg-[#ea740c]" />
        <div className="lg:flex col justify-center lg:left-[30%] hidden absolute">
          <div className="cart relative w-[200px] h-[120px] m-1 rounded-[10px] text-center flex justify-center items-center bg-[#fff] border bordr-black">
            <div className="flex-col w-[100px] h-[40px] m-auto">
              <h1 className="text-[30px] text-[#ff9a36]">80+</h1>
              <p className="text-[#040404]">icarə maşın</p>
            </div>
          </div>
          <div className="cart relative w-[200px] h-[120px] m-1 rounded-[10px] text-center flex justify-center items-center bg-[#fff] border bordr-black">
            <div className="flex-col w-[100px] h-[40px] m-auto">
              <h1 className="text-[30px] text-[#ff9a36]">80+</h1>
              <p className="text-[#040404]">icarə maşın</p>
            </div>
          </div>
          <div className="cart relative w-[200px] h-[120px] m-1 rounded-[10px] text-center flex justify-center items-center bg-[#fff] border bordr-black">
            <div className="flex-col w-[100px] h-[40px] m-auto">
              <h1 className="text-[30px] text-[#ff9a36]">80+</h1>
              <p className="text-[#040404]">icarə maşın</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
