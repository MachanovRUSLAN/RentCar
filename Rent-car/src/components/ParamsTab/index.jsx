import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", lg: "70%" },
        marginLeft: { lg: "80px", xs: "10px" },
        marginTop: { xs: "20px" },
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="grid lg:grid-cols-3 grid-cols-2">
          <div className="cart rounded-tl-lg bg-[#ebe7e7]  px-3 flex border border-back justify-start items-center">
            <img
              className="w-[40px] p-1  h-[40px]"
              src="/img/date.png"
              alt=""
            />
            <div className="cart-cont flex  items-center justify-center pt-3 px-1">
              <p>
                il:
                <br />
                2020
              </p>
            </div>
          </div>
          <div className="cart px-3 flex border border-back justify-start items-center">
            <img className="w-[40px] p-1  h-[40px]" src="/img/ic6.png" alt="" />
            <div className="cart-cont flex  items-center justify-center pt-3 px-1">
              <p>
                il:
                <br />
                2020
              </p>
            </div>
          </div>
          <div className="cart px-3 rounded-tr-lg bg-[#ebe7e7]  flex border border-back justify-start items-center">
            <img className="w-[40px] p-1  h-[40px]" src="/img/ic5.png" alt="" />
            <div className="cart-cont flex  items-center justify-center pt-3 px-1">
              <p>
                il:
                <br />
                2020
              </p>
            </div>
          </div>
          <div className="cart px-3 rounded-bl-lg bg-[#ebe7e7]  flex border border-back justify-start items-center">
            <img className="w-[40px] p-1  h-[40px]" src="/img/ic4.png" alt="" />
            <div className="cart-cont flex  items-center justify-center pt-3 px-1">
              <p>
                il:
                <br />
                2020
              </p>
            </div>
          </div>
          <div className="cart px-3 flex border border-back justify-start items-center">
            <img className="w-[40px] p-1  h-[40px]" src="/img/ic2.png" alt="" />
            <div className="cart-cont flex  items-center justify-center pt-3 px-1">
              <p>
                il:
                <br />
                2020
              </p>
            </div>
          </div>
          <div className="cart px-3 flex rounded-br-lg bg-[#ebe7e7]  border border-back justify-start items-center">
            <img className="w-[40px] p-1  h-[40px]" src="/img/ic1.png" alt="" />
            <div className="cart-cont flex  items-center justify-center pt-3 px-1">
              <p>
                il:
                <br />
                2020
              </p>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="grid lg:grid-cols-3 grid-cols-2">
          <div className="cart px-3 flex bg-[#ebe7e7]  border border-back justify-start items-center">
            <img src="/img/point.png" alt="" />
            <div className="cart-cont flex  items-center justify-center pt-3 px-1">
              <p>Sürücülük vəsiqəsi</p>
            </div>
          </div>
          <div className="cart px-3 flex  bg-[#ebe7e7]  border border-back justify-start items-center">
            <img src="/img/point.png" alt="" />
            <div className="cart-cont flex  items-center justify-center pt-3 px-1">
              <p>Depozit: 200 AZN</p>
            </div>
          </div>
          <div className="cart px-3 flex  bg-[#ebe7e7]  border border-back justify-start items-center">
            <img src="/img/point.png" alt="" />
            <div className="cart-cont flex  items-center justify-center pt-3 px-1">
              <p>İcarə üçün öncədən ödəniş</p>
            </div>
          </div>
          <div className="cart px-3 flex  bg-[#ebe7e7]  border border-back justify-start items-center">
            <img src="/img/point.png" alt="" />
            <div className="cart-cont flex  items-center justify-center pt-3 px-1">
              <p>Sürücülük təcrübəsi: 2 il</p>
            </div>
          </div>
          <div className="cart px-3 flex  bg-[#ebe7e7]  border border-back justify-start items-center">
            <img src="/img/point.png" alt="" />
            <div className="cart-cont flex  items-center justify-center pt-3 px-1">
              <p>Minimal yaş: 24</p>
            </div>
          </div>
          <div className="cart px-3 flex bg-[#ebe7e7]  border border-back justify-start items-center">
            <img src="/img/point.png" alt="" />
            <div className="cart-cont flex  items-center justify-center pt-3 px-1">
              <p>Şəxsiyyət vəsiqəsi</p>
            </div>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
