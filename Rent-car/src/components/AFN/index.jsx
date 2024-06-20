import React from "react";

function Afn() {
  return (
    <div className=" border  border-green-700 bg-[#D5D5D5] my-10">
      <h1 className="text-center lg:text-[36px] tet-[25px] mb-20 mt-6">
        AFN Transport-dan icarə maşın götürməyin üstünlükləri
        <hr className="w-[60px] h-[4px] bg-[#F36F20] m-auto" />
      </h1>
      <div className="w-[80%] p-[8%] lg:flex hidden justify-center items-center m-auto relative ">
        <img className="flex" src="/img/afn.png" alt="" />
        {/* auto icon start */}
        <img
          src="/img/vec1.png"
          className="absolute left-[18%] top-14"
          alt=""
        />
        <div className="vec1Cont flex justify-center items-center absolute left-[7%] top-[-11px]">
          <img
            src="/img/ic1.png"
            className="bg-[#fff] p-2 rounded-[5px]"
            alt=""
          />
          <p className="text-[13px] font-bold text-[#282828]">
            Dayanacağımızda 90 -dan
            <br /> çox icarə maşınlar mövcuddur
          </p>
        </div>
        {/* auto icon finish */}
        {/* garant icon start */}
        <img src="/img/vec2.png" className="absolute left-[48%] top-8" alt="" />
        <div className="vec1Cont flex justify-center  items-center absolute left-[45%] top-[-20px]">
          <img
            src="/img/ic2.png"
            className="bg-[#fff] p-2 rounded-[5px]"
            alt=""
          />
          <p className="text-[13px] font-bold text-[#282828]">
            Bütün avtomobillərimiz tam <br />
            sığortalıdır
          </p>
        </div>
        {/* garant icon finish */}
        {/* price icon start */}
        <img
          src="/img/vec3.png"
          className="absolute left-[68%]  top-8"
          alt=""
        />
        <div className="vec1Cont flex justify-center  items-center absolute left-[80%] top-[10px]">
          <img
            src="/img/ic33.png"
            className="bg-[#fff] p-2 rounded-[5px]"
            alt=""
          />
          <p className="text-[13px] font-bold text-[#282828]">
            Avtomobil kirayələmək <br /> üçün münasib qiymətlər
          </p>
        </div>
        {/* price icon finish */}
        {/* team icon start */}
        <img
          src="/img/vec4.png"
          className="absolute left-[14%]  top-[65%]"
          alt=""
        />
        <div className="vec1Cont flex justify-center  items-center absolute left-[4%] top-[62%]">
          <img
            src="/img/ic4.png"
            className="bg-[#fff] p-2 rounded-[5px]"
            alt=""
          />
          <p className="text-[13px] font-bold text-[#282828]">
            Təcrübəli və qayğıkeş
            <br /> heyət
          </p>
        </div>
        {/* team icon finish */}
        {/* 7/24 icon start */}
        <img
          src="/img/vec5.png"
          className="absolute left-[43%]  top-[70%]"
          alt=""
        />
        <div className="vec1Cont flex justify-center  items-center absolute left-[35%] top-[88%]">
          <img
            src="/img/ic5.png"
            className="bg-[#fff] p-2 rounded-[5px]"
            alt=""
          />
          <p className="text-[13px] font-bold text-[#282828]">
            24/7 xidmət mövcuddur
          </p>
        </div>
        {/* 7/24 icon finish */}
        {/* last icon start */}
        <img
          src="/img/vec6.png"
          className="absolute left-[66%]  top-[70%]"
          alt=""
        />
        <div className="vec1Cont flex justify-center  items-center absolute left-[75%] top-[81%]">
          <img
            src="/img/ic6.png"
            className="bg-[#fff] p-2 rounded-[5px]"
            alt=""
          />
          <p className="text-[13px] pl-3 font-bold text-[#282828]">
            Kirayə maşını olduğunuz
            <br /> yerə çatdırırıq
          </p>
        </div>
        {/* last  icon finish */}
      </div>
      <div className="lg:hidden flex-col p-2">
        <div className="vec1Cont flex  my-1 items-center">
          <img
            src="/img/ic6.png"
            className="bg-[#fff] p-2 my-1 rounded-[5px]"
            alt=""
          />
          <p className="font-bold  pt-3 pl-2 text-[#282828]">
            Dayanacağımzda 90 -dan çox arenda maşınlar mövcuddur
          </p>
        </div>
        <div className="vec1Cont flex items-center">
          <img
            src="/img/ic6.png"
            className="bg-[#fff] p-2 my-1 rounded-[5px]"
            alt=""
          />
          <p className="font-bold  pl-2 pt-3 text-[#282828]">
            Avtomobil icarə götürmək üçün depozit tələb olunmur
          </p>
        </div>
        <div className="vec1Cont flex  items-center">
          <img
            src="/img/ic6.png"
            className="bg-[#fff] p-2  my-1 rounded-[5px]"
            alt=""
          />
          <p className="font-bold pl-2 pt-3 text-[#282828]">
            Avtomobil kirayələmək üçün münasib qiymətlər
          </p>
        </div>
        <div className="vec1Cont flex  items-center">
          <img
            src="/img/ic6.png"
            className="bg-[#fff] p-2 my-1 rounded-[5px]"
            alt=""
          />
          <p className="font-bold pl-2 pt-3 text-[#282828]">
            Kirayə maşını olduğunuz yerə çatdırırıq
          </p>
        </div>
        <div className="vec1Cont flex items-center">
          <img
            src="/img/ic6.png"
            className="bg-[#fff] p-2 my-3 rounded-[5px]"
            alt=""
          />
          <p className="font-bold pl-2 pt-3 text-[#282828]">
            Bütün avtomobillərimiz tam sığortalıdır
          </p>
        </div>
      </div>
    </div>
  );
}

export default Afn;
