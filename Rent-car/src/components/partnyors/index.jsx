import React from "react";

function Partnyors() {
  return (
    <div className="mb-6">
      <h1 className="text-center text-[36px] mb-20 mt-6">
        Partnyorlar
        <hr className="w-[60px] h-[4px] bg-[#F36F20] m-auto" />
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 w-[90%] m-auto">
        <img className="lg:m-0 m-auto" src="/img/kapital.png" alt="" />
        <img className="lg:m-0 m-auto" src="/img/cci.png" alt="" />
        <img className="lg:m-0 m-auto" src="/img/socar.png" alt="" />
        <img className="lg:m-0 m-auto" src="/img/hallbrt.png" alt="" />
        <img className="lg:m-0 m-auto" src="/img/silk.png" alt="" />
        <img className="lg:m-0 m-auto" src="/img/getrav.png" alt="" />
      </div>
    </div>
  );
}

export default Partnyors;
