import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons/faLocation";

function Contact() {
  return (
    <div className="grid lg:grid-cols-12">
      <div className="lg:col-span-5">
        <img className="w-[100%] lg:flex hidden" src="/img/cont.png" alt="" />
      </div>
      <div className="col-span-7 bg-[#F3F3F3]">
        <div className="flex justify-center items-center w-[100%] lg:h-[100%]">
          <div className="lg:h-[300px] bg-[url(/img/map.png)] px-4 w-[100%]">
            <h1>Elaqe</h1>
            <div className="grid lg:grid-cols-12 w-[90%]">
              <div className="div bg-[#fff]  col-span-6 m-2 rounded-lg p-2">
                <div className="flex items-center">
                  <img
                    className="w-[20px] h-[20px]"
                    src="/img/phonFoot.png"
                    alt=""
                  />
                  <p className="pt-2">Telefon</p>
                </div>
                <p>(+994) 50 394 91 94</p>
                <p>(+994) 12 490 11 64</p>
              </div>
              <div className="div bg-[#fff] col-span-6   m-2   rounded-lg p-2">
                <div className="flex items-center">
                  <img
                    className="w-[20px] h-[20px]"
                    src="/img/phonFoot.png"
                    alt=""
                  />
                  <p className="pt-2">Telefon</p>
                </div>
                <p>(+994) 50 394 91 94</p>
                <p>(+994) 12 490 11 64</p>
              </div>
              <div className="div bg-[#fff]  col-span-6   m-2  rounded-lg p-2">
                <div className="flex items-center">
                  <span className="text-[#f36f20]">
                    <FontAwesomeIcon icon={faLocation} />
                  </span>
                  <p className="pt-2">Telefon</p>
                </div>
                <p>(+994) 50 394 91 94</p>
                <p>(+994) 12 490 11 64</p>
              </div>
              <div className="div bg-[#fff]  col-span-6  m-2   rounded-lg p-2">
                <div className="flex items-center">
                  <img
                    className="w-[20px] h-[20px]"
                    src="/img/ses.png"
                    alt=""
                  />
                  <p className="pt-2">Telefon</p>
                </div>
                <p>(+994) 50 394 91 94</p>
                <p>(+994) 12 490 11 64</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
