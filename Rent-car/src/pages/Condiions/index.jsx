import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function Conditions() {
  return (
    <div className="py-10">
    <h1 className="text-center text-[36px] mb-20 mt-6">
      Ən çox verilən suallar
      <hr className="w-[60px] h-[4px] bg-[#F36F20] m-auto" />
    </h1>
    <div className="lg:w-[70%] w-[90%] m-auto">
      <Accordion defaultActiveKey={["0"]} alwaysOpen className="relative">
        <Accordion.Item eventKey="0" className="my-2 relative">
          <div className="absolute w-[5px] h-[100%] left-0 bg-[#F36F20] z-10"></div>
          <Accordion.Header>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="my-2 relative">
          <div className="absolute w-[5px] h-[100%] left-0 bg-[#F36F20] z-10"></div>
          <Accordion.Header>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="my-2 relative">
          <div className="absolute w-[5px] h-[100%] left-0 bg-[#F36F20] z-10"></div>
          <Accordion.Header>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="my-2 relative">
          <div className="absolute w-[5px] h-[100%] left-0 bg-[#F36F20] z-10"></div>
          <Accordion.Header>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  </div>
  )
}

export default Conditions