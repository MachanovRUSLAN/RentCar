import React from "react";

function Reached() {
  return (
    <div className="bg-[url(/img/bgwhite.png)] w-[100%] bg-cover bg-center">
      <div className="grid grid-cols-12 ">
        <div className="lg:col-span-6 col-span-12">
          <img className="w-[100%]" src="/img/salon.png" alt="" />
        </div>
        <div className="div lg:col-span-6 col-span-12  py-4 px-6">
          <h1 className="text-[40px]">Çatdırılma</h1>
          <hr className="bg-[#f36f20] w-[10%] h-[5px]" />
          <p className="text-[#707070] py-2 font-semibold">
            AFN Transport olaraq her Class”a uygun arenda avtomobil <br />
            modellərimizi istənilən ünvana çatdırılma mövcuddur.
          </p>
          <p className="text-[#707070] py-2 font-semibold">
            AFN Transport tam 10 ildir ki müştərilərinə arenda masinlar <br />
            ilə təmin edir.
          </p>
          <p className="text-[#707070] py-2 font-semibold">
            Keyfiyyetli avotomobil, avtobus ve mikroavtobuslarin icaresi <br />
            ucun AFN Transport.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reached;
