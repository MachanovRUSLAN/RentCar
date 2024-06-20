import React from "react";
import "./choose.css";

function WhyChooseUs() {
  return (
    <div className="grid grid-cols-12 w-[80%] m-auto my-10 lg:py-10">
      <div className="div  lg:col-span-6 col-span-12 gap-2">
        <p className="text-[#F36F20]">NİYƏ BİZİ SEÇMƏLİSİNİZ?</p>
        <h1 className="text-[30px]">
          Şirkətimiz 10 ildən artıqdır ki, fəaliyyət göstərir.
        </h1>

        <p className="text-[#707070] lg:py-1 font-semibold ">
          Fəaliyyət göstərdiyimiz müddət ərzində bir çox dövlət qurumları,
          hökümət və qeyri-hökümət təşkilatları, çoxlu sayda şirkətlərlə
          əməkdaşlıq etmişik.
        </p>
        <p className="text-[#707070] lg:py-1 font-semibold">
          Nümunə olaraq bunlardan GEO Travel, Paşa Travel, Konsis, Conco, Socar
          AQŞ, Caspian Events, Balaxanı Sənaye Parkı və s. kimi tanınmış
          şirkətlərin adını çəkə bilərik.
        </p>
        <p className="text-[#707070] lg:py-1 font-semibold">
          Həmçinin bir çox dövlət tədbirlərinin də nəqliyyat işlərini təşkil
          etmişik. Bunlara misal olaraq, Eurovision (2012), Qəbələ Atıcılıq
          Klubu Dünya Kuboku (2014), Bakı Avropa oyunları (2015), İslam oyunları
          (2017), Cüdo Dünya Çempionatı (2018), UEFA (2019), International
          Business Forum (2021).
        </p>
        <p className="text-[#707070]  font-semibold">
          AFN Transporta məxsus bütün nəqliyyatlar mütəmadi olaraq (oturacaqlar,
          tutacaqlar, yük daşıma yerləri və s.) dezinfeksiya olunur.
        </p>
      </div>
      <div className="box-img-2   lg:ml-10 lg:col-span-6 col-span-12 bg-black my-10 border border-red-500 lg:w-[80%] relative lg:h-[436px] h-[300px]"></div>
    </div>
  );
}

export default WhyChooseUs;
