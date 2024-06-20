import React, { useState } from "react";
import { useSelector } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import toast, { Toaster } from "react-hot-toast";
import "./form.css";
import { useSearchParams } from "react-router-dom";

function AddForm() {
  const [baby, setBaby] = useState(false);
  const [driver, setDriver] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [name, setName] = useState("");
  const [emailWar, setEmailWar] = useState("");
  const [searchParams] = useSearchParams();
  const price = parseFloat(searchParams.get("price"));
  const days = parseInt(searchParams.get("days"));

  const items = useSelector((state) => state.counter);

  const emailPross = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailCompleted = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCompleted.test(value)) {
      setEmailWar("Please enter correctly email adress");
    } else {
      setEmailWar("");
    }
  };

  const namePross = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const phonePross = (e) => {
    const value = e.target.value;
    SetPhone(value);
  };

  const babySitPerDay = 10;
  const choseBaby = () => {
    setBaby(!baby);
  };

  const privateDriverPrice = 50;
  const chooseDriver = () => {
    setDriver(!driver);
  };

  const submitPross = () => {
    const hassError = false;
    if (days < 1 || !price) {
      toast.error("choose day");
      hassError = true;
    }
    if (phone === "" || email === "") {
      toast.error("butun melumatlari daxl edn");
      hassError = true;
    }

    if (!hassError) {
      toast.success(`Sifaris qebul edildi
       
        `);
      setEmail(""), setName(""), SetPhone("");
    }
  };

  return (
    <div className="bg-slate-700 lg:py-20 ">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="lg:w-[700px] bg-white rounded-lg mx-auto p-2">
        <form className="">
          <div className="">
            <h1 className="text-center">Çatdırılma</h1>
            <div className="div  lg:flex col">
              <div className="mx-auto">
                <div className="div lg:my-2 mx-auto my-2  w-[300px] h-[50px] px-2 relative lg:flex  items-center border border-black">
                  <p className="mt-2">Seher secin</p>
                  <select
                    name=""
                    id=""
                    className="absolute right-0 top-3 outline-none"
                  >
                    <option value=""></option>
                    <option value="">Baki</option>
                    <option value="">Sumqayit</option>
                  </select>
                </div>
                <div className="div lg:my-2 mx-auto my-2  px-2 w-[300px] relative rounded-md overflow-hidden h-[50px] border border-black">
                  <input
                    type="text"
                    placeholder="tehvil alma tarixi"
                    className="h-[100%] outline-none"
                  />
                  <input
                    type="date"
                    className="w-[7%] h-[100%] absolute right-0 outline-none"
                  />
                </div>
                <div className="div lg:my-2  mx-auto my-2   w-[300px] h-[50px] border border-black">
                  <input
                    type="text"
                    placeholder="*Ad Syadiniz"
                    className="w-[100%] h-[100%] px-2"
                    value={name}
                    onChange={namePross}
                  />
                </div>
                <div className="div lg:my-2 mx-auto  my-2  w-[300px] h-[50px] border border-black">
                  <input
                    type="text"
                    placeholder="*Elaqe Nomresi"
                    className="w-[100%] h-[100%] px-2"
                    value={phone}
                    onChange={phonePross}
                  />
                </div>
                <div className="div w-[300px] mx-auto  my-2   h-[50px] border border-black">
                  <input
                    type="text"
                    value={email}
                    onChange={emailPross}
                    placeholder="*E-mail"
                    className="w-[100%] h-[100%] px-2"
                  />
                  {emailWar && <p>{emailWar}</p>}
                </div>
              </div>
              <div className="col-span-6 mx-auto">
                <div className="div lg:my-2 mx-auto my-2 w-[300px] h-[50px] border border-black">
                  <input
                    type="text"
                    placeholder="Unvan"
                    className="w-[100%] px-2 h-[100%]"
                  />
                </div>
                <div className="div lg:my-2 mx-auto my-2 px-2 w-[300px] relative rounded-md overflow-hidden h-[50px] border border-black">
                  <input
                    type="text"
                    placeholder="tehvil verme tarixi"
                    className="h-[100%] outline-none"
                  />
                  <input
                    type="date"
                    className="w-[7%] h-[100%] absolute right-0 outline-none"
                  />
                </div>
                <div className="div w-[300px] mx-auto my-1 rounded-md overflow-hidden h-[170px] border border-black">
                  <input
                    type="text"
                    placeholder="Elave Qeydleriniz"
                    className="w-[100%] outline-none p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="extra lg:flex  col p-4 my-2 ">
          <div className="checkbaby items-center flex justify-center">
            <input type="checkbox" onClick={choseBaby} />
            <p className="pt-3 text-[#de7920] font-bold">
              Uşaq oturacağı (10 AZN/gün)
            </p>
          </div>
          <div className="checkbaby justify-center flex items-center lg:ml-10">
            <input type="checkbox" onClick={chooseDriver} />
            <p className="pt-3 text-[#de7920] font-bold">
              Şəxsi sürücü (50 AZN/gün)
            </p>
          </div>
        </div>
        <div className="payment-type p-4">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              <h1>Odenis novu</h1>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Post Terminal"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Online"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Cash"
              />
            </RadioGroup>
          </FormControl>
        </div>

        {items.map((item) => (
          <div className="div p-4" key={item.id}>
            <div className="rent-price flex items-center my-10 relative border border-black">
              {price && (
                <p className="absolute left-0  bg-white">
                  Avtomobilin icare qiymeti({days}gun)
                </p>
              )}

              {price && (
                <p className="absolute right-0 top-[-13px] text-[#F36f20]  bg-white">
                  {price * days}
                </p>
              )}
            </div>

            <div className="babysit flex items-center m-auto w-[100%] relative border border-black">
              <p className="absolute left-0  bg-white">Uşaq oturacağı</p>

              <p className="absolute right-0 top-[-13px]  bg-white">10 AZN</p>
            </div>

            <div className="driver flex items-center my-10 relative border border-black">
              <p className="absolute left-0  bg-white">Şəxsi sürücü</p>

              <p className="absolute right-0 top-[-13px]  bg-white">50 AZN</p>
            </div>

            <div className="driver flex items-center relative border border-black">
              <h2 className="absolute left-0 lg:flex hidden  bg-white">
                CƏMİ QİYMƏT
              </h2>
              <p className="absolute left-0 lg:hidden flex  bg-white">
                CƏMİ QİYMƏT
              </p>
              {price && (
                <p className="absolute right-0 top-[-13px]  bg-white">
                  {price * days}+{babySitPerDay} + {privateDriverPrice}=
                  {price * days +
                    (baby ? babySitPerDay * days : 0) +
                    (driver ? privateDriverPrice * days : 0)}
                  AZN
                </p>
              )}
            </div>
          </div>
        ))}
        <div
          className="dayPrice flex justify-center items-center  w-[150px] rounded-[5px] h-[42px] bg-[#f36f20] top-[30%] mx-2"
          onClick={submitPross}
        >
          {" "}
          <button>İndi icarə et</button>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
