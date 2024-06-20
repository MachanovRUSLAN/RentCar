import React from "react";

function Reservation() {
  return (
    <div className="bg-[#282828] py-4">
      <div className="grid grid-cols-12 w-[80%] m-auto">
        <div className="lg:col-span-6 col-span-12">
          <h1 className="text-[36px] text-[#fff]">
            Bir neçə dəqiqəyə <br />
            arenda maşın Bakıda
          </h1>
          <p className="text-[#fff] py-4">
            Bakıda avtomobil kirayəsinin ən yaxşı şərtlərlə <br />
            sürətli sifarişi üçün bizimlə əlaqə saxlayın
          </p>
          <div className="inputs lg:flex col">
            <div className="in-box h-[30px] lg:my-0 my-4 border-b border-white bg-transparent">
              <input
                type="text"
                className="w-[100%] h-[100%]  bg-transparent text-[#fff] outline-none"
                placeholder="adiniz ve soyadiniz"
              />
            </div>
            <div className="in-box h-[30px] lg:ml-2  lg:my-0 my-4 border-b border-white bg-transparent">
              <input
                type="text"
                className="w-[100%] h-[100%] text-[#fff] bg-transparent outline-none"
                placeholder="Əlaqə nömrəniz"
              />
            </div>
          </div>
          <div className="dayPrice flex justify-center items-center mt-[20px] w-[208px] rounded-[5px] h-[62px] bg-[#f36f20]">
            <button className="text-[#fff]">Reservasiya</button>
          </div>
        </div>
        <div className="div lg:col-span-6 col-span-12">
          <img src="/img/reserHom.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reservation;
