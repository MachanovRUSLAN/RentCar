import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToForm } from "../../redux/Slice";

function InfoPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [data, setData] = useState([]);
  const [price, setPrice] = useState("");
  const [days, setDays] = useState(0);
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  const calculatePrice = (price, days) => {
    if (days > 10 && days <= 20) {
      return price * 0.8;
    } else if (days > 20 && days <= 30) {
      return price * 0.7;
    } else {
      return price;
    }
  };

  const totalPrice = calculatePrice(data.price, days);
  const handleAddForm = () => {
    const totalPrice = calculatePrice(data.price, days);
    setSearchParams({ price: totalPrice, days });
    dispatch(
      addToForm({
        id: data.id,
        title: data.title,
        price: totalPrice,
        days,
      })
    );
    navigate(`/AddForm?price=${totalPrice}&days=${days}`);
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="lg:ml-20 lg:my-10 my-3  p-1">
        <div className="w-[100%]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 h-[328px]"
          >
            {data?.images?.map((item) => (
              <SwiperSlide key={item.id}>
                <img className="w-[100%] h-[100%]" src={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper h-[100%] grid grid-cols-3"
          >
            {data?.images?.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <div className="lg:mx-10 lg:my-12 ml-3">
          <div className="dayPrice w-[100px] my-1 justify-center items-center  rounded-[5px] bg-[#f36f20]">
            <button className="w-[100px]">{data.category}</button>
          </div>
          <h1 className="font-bold lg:my-2 lg:text-[44px] text-[48px]">
            {data.title}
          </h1>
          <h1 className="text-[#F36F20] my-4 font-bold">{totalPrice}AZN/gun</h1>
          <div className="conditions lg:w-[400px]">
            <div className="days-con flex items-center lg:border-b border-black">
              <p className="font-bold lg:text-[19px] text-[#707070]">
                2-9 gun icare :
              </p>
              <p className="lg:text-[19px] text-[#707070] font-bold mx-4">
                {data.price}AZN/gun
              </p>
            </div>
            <div className="days-con pt-2 flex items-center  justify-start lg:border-b border-black">
              <p className="font-bold lg:text-[19px] text-[#707070]">
                10-20 gun icare :
              </p>
              <p className="lg:text-[19px] text-[15px] text-[#707070] font-bold flex lg:mx-4">
                {data.price * 0.8}AZN/gun
                <span className="flex lg:hidden">(10% ndirim)</span>
              </p>
            </div>
            <div className="days-con pt-2 flex lg:border-b border-black">
              <p className="font-bold lg:text-[19px] text-[#707070]">
                20-30 gun icare :
              </p>
              <p className="lg:text-[19px] text-[15px] flex lg:mx-4 text-[#707070] font-bold">
                {data.price * 0.7}AZN/gun
                <span className="flex lg:hidden">(10% ndirim)</span>
              </p>
            </div>
          </div>
          <div className="buts flex mt-4">
            <select
              value={days}
              className="border border-black w-[150px] h-[40px] rounded-[10px] px-10"
              onChange={(e) => setDays(e.target.value)}
            >
              <option value="">gun</option>
              {[...Array(30).keys()].map((day) => (
                <option key={day + 1} value={day + 1}>
                  {day + 1} gun
                </option>
              ))}
            </select>

            <div
              className="dayPrice flex justify-center items-center  w-[150px] rounded-[5px] h-[42px] bg-[#f36f20] top-[30%] mx-2"
              onClick={handleAddForm}
            >
              <button>İndi icarə et</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
