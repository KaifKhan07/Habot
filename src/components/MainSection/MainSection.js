import React from "react";
import "./MainSection.css";
import { Button } from "react-bootstrap";
import { MdEmail, MdLocationOn } from "react-icons/md";

const MainSection = () => {
  return (
    <div className="Hero-section">
      <div className="main-image flex justify-center py-20">
        <div className="text-white flex flex-col justify-center items-center text-center gap-2">
          <h1 className="font-bold p-0 m-0">Are You a Supplier?</h1>
          <h2>Explore Matching Opportunities.</h2>

          <div className="habot_input_field flex gap-2 flex-wrap justify-center items-center px-2 sm:px-10 ">
            <div className="flex gap-2 flex-wrap justify-center">
              <div className="habot_email_input flex items-center relative">
                <MdEmail className="habot_icon" />
                <input 
                  type="text"
                  placeholder="Search your required service here"
                  className="habot_input"
                />
              </div>

              <div className="habot_location_input flex items-center relative">
                <MdLocationOn className="habot_icon" />
                <input
                  type="text"
                  placeholder="Search your desired location here"
                  className="habot_input"
                />
              </div>
            </div>

            <Button
              variant="success"
              style={{ height: "55px", width: "120px" }}
            >
              Search
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center">
            <p>Are you a buyer?</p>
            <p className="underline">
              Click here if you are looking to post a requirements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
