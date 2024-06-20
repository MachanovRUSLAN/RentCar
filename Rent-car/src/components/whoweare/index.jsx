import React from "react";
import "./who.css";

function WhoWeAre() {
  return (
    <div className="grid grid-cols-12 w-[85%] m-auto lg:py-10">
      <div className="box-img border lg:col-span-6 col-span-12 bg-black border-red-500 lg:w-[80%] relative  lg:h-[436px] h-[300px]"></div>
      <div className="div  lg:col-span-6 col-span-12 py-4">
        <p className="text-[#F36F20]">Biz Kimik?</p>
        <h1 className="text-[30px]">
          AFN Transport və Nəqliyyat şirkəti Azərbaycanda öz nəqliyyat bazasına
          görə ilk sıralarda yerləşən şirkətlərdən biridir.
        </h1>

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
      </div>
    </div>
  );
}

export default WhoWeAre;
