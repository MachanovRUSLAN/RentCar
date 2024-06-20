import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons/faLocation";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="w-[100%] h-[100%] relative">
        <img
          src="/img/footbg.png"
          className="bg-[#262626] lg:w-[100%] lg:flex hidden"
          alt=""
        />
        <img
          src="/img/fotmb.png"
          className="bg-[#262626] w-[100%] h-[100%] lg:hidden flex"
          alt=""
        />
        <div className="absolute  lg:w-[1138px] top-8 justify-between left-[9%] lg:flex col">
          <div className="footLogo">
            <img src="/img/logo 2.png" alt="" />
          </div>
          <ul>
            <li className="flex justify-start items-center lg:py-2">
              <span>
                <img src="/img/point.png" />
              </span>
              <p className="text-[#fff] m-1">Əsas səhifə</p>
            </li>
            <Link to="/categ" className="no-underline">
              <li className="flex justify-start items-center lg:py-2">
                <span>
                  <img src="/img/point.png" />
                </span>
                <p className="text-[#fff] m-1">İcarə maşınlar</p>
              </li>
            </Link>
            <Link to="/About"  className="no-underline">
              <li className="flex justify-start items-center lg:py-2">
                <span>
                  <img src="/img/point.png" />
                </span>
                <p className="text-[#fff] m-1">Haqqımızda</p>
              </li>
            </Link>
            <Link to="/Conditions"  className="no-underline">
              <li className="flex justify-start items-center lg:py-2">
                <span>
                  <img src="/img/point.png" />
                </span>
                <p className="text-[#fff] m-1">Suallar</p>
              </li>
            </Link>
            <Link to="/Contact"  className="no-underline">
              <li className="flex justify-start items-center lg:py-2">
                <span>
                  <img src="/img/point.png" />
                </span>
                <p className="text-[#fff] m-1">Əlaqə</p>
              </li>
            </Link>
          </ul>
          <ul>
            <Link to="/About"  className="no-underline">
              <li className="flex justify-start items-center lg:py-2">
                <span>
                  <img src="/img/point.png" />
                </span>
                <p className="text-[#fff] m-1">Econom class</p>
              </li>
            </Link>
            <li className="flex justify-start items-center lg:py-2">
              <span>
                <img src="/img/point.png" />
              </span>
              <p className="text-[#fff] m-1">Business class</p>
            </li>
            <li className="flex justify-start items-center lg:py-2">
              <span>
                <img src="/img/point.png" />
              </span>
              <p className="text-[#fff] m-1">Crossover&SUVs</p>
            </li>
            <li className="flex justify-start items-center lg:py-2">
              <span>
                <img src="/img/point.png" />
              </span>
              <p className="text-[#fff] m-1">Premium class</p>
            </li>
            <li className="flex justify-start items-center">
              <span>
                <img src="/img/point.png" />
              </span>
              <p className="text-[#fff] m-1">Buses&Minivans</p>
            </li>
          </ul>

          <ul>
            <li className="flex justify-start items-center lg:py-2">
              <span className="text-[#f36f20]">
                <FontAwesomeIcon icon={faLocation} />
              </span>
              <p className="text-[#fff] m-1">Bakı şəhəri, Xocalı pr.13</p>
            </li>
            <li className="flex justify-start items-center lg:py-2">
              <span>
                <img src="/img/phonFoot.png" />
              </span>
              <p className="text-[#fff] m-1">(+994) 50 394 91 94</p>
            </li>
            <li className="flex justify-start items-center lg:py-2">
              <span>
                <img src="/img/phonFoot.png" />
              </span>
              <p className="text-[#fff] m-1">(+994) 12 490 11 64</p>
            </li>
            <li className="flex justify-start items-center lg:py-2">
              <span>
                <img src="/img/lettFoot.png" />
              </span>
              <p className="text-[#fff] m-1">info@afn.az</p>
            </li>
          </ul>

          <ul>
            <li className="text-[#fff] m-1">Bizi izləyin</li>
            <li className="flex lg:py-2">
              <span className="px-1">
                <img src="/img/facebok.png" alt="" />
              </span>
              <span className="px-1">
                <img src="/img/insta.png" alt="" />
              </span>
              <span className="px-1">
                <img src="/img/telegram.png" alt="" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
