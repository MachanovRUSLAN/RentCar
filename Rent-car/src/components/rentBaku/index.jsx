import React from "react";
import "./rent.css";

function RentBaku() {
  return (
    <div className="grid grid-cols-12 w-[85%] m-auto py-10">
      <div className="img-box border lg:col-span-6 col-span-12 rounded-[10px] border-red-500 w-[100%] relative  lg:h-[500px] h-[300px]"></div>
      <div className="div lg:px-6  lg:col-span-6 col-span-12">
        <h1 className="text-[40px]">Avtomobil kirayəsi Bakıda</h1>
        <hr className="bg-[#f36f20] w-[10%] h-[5px]" />
        <p className="text-[#707070] lg:py-1 font-semibold">
          İstər xidmət səviyyəmiz, istərsə də yüksək keyfiyyətimizlə bir çox
          icarə maşıin şirkətlərdən seçilir.
        </p>
        <p className="text-[#707070] lg:py-1 font-semibold">
          Şirkət bu növ icarə maşınlar ilə məşğuldur: minik maşınlar,
          mikroavtobus və avtobusların (günlük, aylıq və uzunmüddətli).
        </p>
        <p className="text-[#707070] lg:py-1 font-semibold">
          Geniş avtoparkımız sizə Bakı və Azərbaycanda istənilən vaxt istənilən
          növ icarə maşın götürməyə imkan verir.
        </p>
        <p className="text-[#707070] lg:py-1 font-semibold">
          Şirkətin balansında son model sedan, suv, crossover, minivan, 4 – 55
          nəfər tutumlu komfortlu, geniş və təmiz icarə maşıinlar yer
          almaqdadır.
        </p>
        <div className="dayPrice flex justify-center items-center mt-[20px] w-[208px] rounded-[5px] h-[62px] bg-[#f36f20]">
          <button>İndi icarə et</button>
        </div>
      </div>
    </div>
  );
}

export default RentBaku;
