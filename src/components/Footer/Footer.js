import React from 'react';
import Footer_logo from '../../assets/Images/png/footer_logo.png';
import linkedin from '../../assets/Images/svg/linkedin.svg';
import twitter from '../../assets/Images/svg/twitter.svg';
import facebook from '../../assets/Images/svg/facebook.svg';
import instagram from '../../assets/Images/svg/instagram.svg';

const Footer = () => {
    return (
        <div className='habot_footer_section bg-[rgb(18,53,87)]'>

            <div className="habot_footer px-10 sm:px-20 md:px-32 lg:px-40 py-10 text-white">

                <div className='border-t border-b border-white flex flex-wrap  justify-center lg:justify-between items-center py-5 gap-5'>
                    {/* Left Section */}
                    <div className='flex flex-wrap items-center justify-center gap-5'>
                        <div className='habot_footer_logo h-[80px] w-[150px] md:h-[100px] md:w-[200px] flex flex-col justify-center items-center'>
                            <img src={Footer_logo} alt="" className='h-[100%] w-[100%]' />
                            <p className='text-center md:pl-5 mt-2'>R Singhania</p>
                        </div>
                        
                        <div className='flex flex-col  flex-wrap  gap-5 sm:flex-row sm:gap-2'>
                            <ul className=' p-0 md:text-left'>
                                <li className='font-bold pb-2'>Company</li>
                                <li className='text-gray-400'>About</li>
                                <li className='text-gray-400'>FAQ</li>
                            </ul>
                            <ul className=' p-0 md:text-left'>
                                <li className='font-bold pb-2'>Terms</li>
                                <li className='text-gray-400'>Data Privacy</li>
                                <li className='text-gray-400'>Terms</li>
                                <li className='text-gray-400'>Accessibility</li>
                            </ul>
                            <ul className=' p-0 md:text-left'>
                                <li className='font-bold pb-2'>Related</li>
                                <li className='text-gray-400'>Find Buyer</li>
                                <li className='text-gray-400'>Feedback</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className='habot_all_icon flex justify-center items-center gap-3'>
                        <div className='habot_icon_contact'>
                            <img src={linkedin} alt="LinkedIn"/>
                        </div>
                        <div className='habot_icon_contact'>
                            <img src={twitter} alt="Twitter"/>
                        </div>
                        <div className='habot_icon_contact'>
                            <img src={facebook} alt="Facebook" />
                        </div>
                        <div className='habot_icon_contact'>
                            <img src={instagram} alt="Instagram"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;