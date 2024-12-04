import React, { useState } from "react";
import AboutImg from '../../assets/Images/png/need_requirement.jpg'
import youtubeIcon from '../../assets/Images/svg/youtube-icon-svgrepo-com.svg'
import "./AboutSection.css"; // Import the normal CSS file

const AboutSection = () => {
  const [active, setActive] = useState('buyer');

  const locations = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];

  const buyers = [
    "Post your requirements.",
    "Sit back for multiple suppliers to contact you.",
    "Choose among the suppliers based on the ratings and reviews.",
  ];

  const suppliers = [
    "Complete your profile and get verified.",
    "Choose service tags and get notified about each opportunity.",
    "Contact buyers, and expand your business.",
  ]

  return (
    <div className="about-section">
      {/* First Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 py-20">
        {/* Left Content */}
        <div className="content-left">
          <h2>
            Ready to dive into <span className="highlight">HABOT?</span>
          </h2>
          <p>
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="cta-button">Sign up Today! ➔</button>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-2 gap-4">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              {location}
            </div>
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div className="second-section p-[35px]">
        <div className="bg-[#072F57] text-white p-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={AboutImg}
                width={500}
                alt="Video Thumbnail"
                className="video-thumbnail"
              />
              <button className="video-button">
              
                  <img src={youtubeIcon} width={100} alt="" />
              
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            {/* Tabs */}
            <div className="flex justify-center text-center gap-2 sm:gap-10 font-bold mb-6">
             <div>
              <button className={`${active === 'buyer' ? "text-[orange]" : "text-white"} w-[150px]`} onClick={() => setActive('buyer')}>Buyer</button>
              <p className={`${active === 'buyer' ? 'border-b-4 border-b-[rgb(232,112,80)]  rounded-b-sm' : 'border-black'}w-[150px] ml-2 pt-2`}></p>              
            </div>
             <div>
              <button className={`${active === 'supplier' ? "text-[orange]" : "text-white"} w-[150px]`} onClick={() => setActive('supplier')}>Supplier</button>
              <p className={`${active === 'supplier' ? 'border-b-4 border-b-[rgb(232,112,80)]  rounded-b-sm' : 'border-black'} w-[100px] sm:w-[150px]  ml-2 pt-2`} ></p>            
            </div>
            </div>

            {/* buyer */}
            {
              active === 'buyer' ? 
              (
            <ul className="buyer-list">
              {buyers.map((step, index) => (
                <li key={index} className="buyer-item">
                  <span className="check-icon">✔</span>
                  {step}
                </li>
              ))}
            </ul>
            )
            :
            (
            <ul className="buyer-list">
              {suppliers.map((step, index) => (
                <li key={index} className="buyer-item">
                  <span className="check-icon">✔</span>
                  {step}
                </li>
              ))}
            </ul>
            )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
