import React from 'react'
import profile from '../../assets/Images/png/profile.png';
import reruirement from '../../assets/Images/png/requirement.png';
import search_supplier from '../../assets/Images/png/search_supplier.png';
import notified from '../../assets/Images/png/notified.png';
import list from '../../assets/Images/png/list.png';
import connected from '../../assets/Images/png/connected.png'

const ServiceSection = () => {

    const data = [
        {
            img: profile,
            title: "Select Your Role and Sign Up"
        },
        {
            img: reruirement,
            title: "Buyers Post Your Requirements"
        },
        {
            img: search_supplier,
            title: "Review, Select, and Contact the Best Suppliers"
        },
        {
            img: notified,
            title: "Suppliers Complete your profile and get notified for opportunities"
        },
        {
            img: list,
            title: "Contact to Buyers and Share your Quote for the service"
        },
        {
            img: connected,
            title: "Both the Parties can Connect and Make Business Leave a Feedback"
        },
    ];

  return (
    <div className='service-section'>
      <div className="service-first-section flex flex-wrap px-10 justify-around bg-[#E8FBFF] py-20 my-14">
        <h4 className='font-bold'>Let Suppliers Find You</h4>
        <button className='bg-orange-600 rounded-md text-white px-10'>Get Verified</button>
      </div>
      
      <div className="service-second-section">
        <div className="working-desc flex flex-col justify-center items-center text-center gap-2">
          <h2 className='font-bold'>How it works?</h2>
          <div>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with <div className='pl-7'>potential buyers, and build successful business relationships, sharing valuable feedback.</div></div>
        </div>
      </div>

      <div className="service-third-section flex flex-wrap justify-center items-center pt-5">
        {
            data.map((item, index) => {
                return(
                    <div key={index} className={`service-Person-data ${index % 2 === 0 ? "bg-[#E8FBFF]" : "bg-white"} w-[400px] h-[400px] border flex flex-col justify-center items-center px-24 py-10`}>

                        <img src={item.img} className='w-[100%]' alt={item.title} />
                        <p className='text-xl text-black'>{item.title}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default ServiceSection
