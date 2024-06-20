import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="lg:w-[1138px] m-auto flex justify-between items-center relative">
      <Link to="/">
        <div className="imgLogo lg:w-auto w-[100px]">
          <img src="/img/logo.png" alt="" />
        </div>
      </Link>
      <ul className="lg:flex hidden justify-between items-center">
        <li className="px-4 flex items-center">
          <img src="/img/locat.png" alt="" />
          <p className="my-1">Bakı ş., Xocalı pr.13</p>
        </li>
        <li className="px-4 flex items-center">
          <img src="/img/phone.png" alt="" />
          <p className="my-1">(+994) 50 394 91 94</p>
        </li>
        <li className="px-4 flex items-center">
          <img src="/img/phone.png" alt="" />{" "}
          <p className="my-1">(+994) 12 490 11 64</p>
        </li>
        <li className="px-4 flex items-center">
          <img src="/img/letter.png" alt="" />
          <p className="my-1">info@afnrentacar.az</p>
        </li>
      </ul>
      <div className="bar" onClick={handleOpenMenu}>
        <img src="/img/bar.png" alt="" />
      </div>

      {/* responsive menu */}
      <div
        className={`${
          menu ? "left-[0]" : "left-[-100%]"
        } bar-menu lg:hidden blok  w-[100%]  transition-all py-2 top-[0] z-40 bg-[#030303fc] fixed  px-4`}
      >
        <div className="lang flex justify-between">
          <div>
            <img src="/img/logores.png" alt="" />
          </div>

          <div onClick={handleOpenMenu}>
            <img src="/img/can.png" alt="" />
          </div>
        </div>
        <div className="lang flex px-6 my-4 justify-between">
          <div className="my-1 text-[20px] font-bold  text-[#fff]">ENG</div>
          <div className="my-1 text-[20px] font-bold  text-[#fff]">AZE</div>
          <div className="my-1 text-[20px] font-bold  text-[#fff]">RUS</div>
        </div>
        <ul className="flex-col text-center">
          <Link to="/" onClick={true} className="no-underline">
            <li className=" items-center">
              <p className="my-1 text-[28px] font-bold hover:bg-slate-50 hover:text-[#000]  text-[#fff]">
                Əsas səhifə
              </p>
            </li>
          </Link>
          <Link to="/categ" onClick={true} className="no-underline">
            <li className="items-center">
              <p className="my-1  text-[28px]  hover:bg-slate-50 hover:text-[#000]  font-bold text-[#fff]">
                İcarə maşınlar
              </p>
            </li>
          </Link>
          <Link to="/About" className="no-underline" onClick={true}>
            <li className="items-center">
              <p className="my-1  text-[28px]  hover:bg-slate-50 hover:text-[#000]  font-bold text-[#fff]">
                Şirkət haqqında
              </p>
            </li>
          </Link>
          <Link to="/Conditions" className="no-underline" onClick={true}>
            <li className="items-center">
              <p className="my-1  text-[28px]  hover:bg-slate-50 hover:text-[#000]  font-bold text-[#fff]">
                Şərtlər
              </p>
            </li>
          </Link>
          <Link to="/Contact" className="no-underline" onClick={true}>
            <li className="items-center">
              <p className="my-1  text-[28px]  hover:bg-slate-50 hover:text-[#000]  font-bold text-[#fff]">
                Əlaqə
              </p>
            </li>
          </Link>
        </ul>
      </div>
      {/* responsive menu */}
    </div>
  );
}

export default Navbar;
