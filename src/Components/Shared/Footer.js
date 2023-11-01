import React from 'react';

const Footer = () => {
    return (
        <div className='bg-primary mt-8'>
            <div className='p-10 grid  lg:grid-cols-2 lg:w-[1200px] mx-auto '>
                <div className='mt-5'>
                    <h3 className='text-white text-2xl '>Newsletter Signup</h3>
                    <p className='text-gray-400 text-sm my-4'>country to popular beailar belife of lorem ipsum latin amere ltin from</p>
                    <input className='mt-5 w-72 p-2 bg-primary-focus outline-none text-gray-300' type="email" placeholder='Yout email address' />
                </div>

                <div className='text-gray-100 mt-5'>
                    <h3 className='text-2xl'>Best services</h3>
                    <p className=' text-gray-400 text-sm my-4'>we provide best and fast preemium & gree service</p>
                    <ul className='font-bold grid grid-cols-2 w-100 text-gray-200'>
                        <li>  Worldwide shipping   </li>
                        <li> Easy 30 days return  </li>
                        <li>  Money Back Guarentee   </li>
                        <li>  Member Discount</li>
                    </ul>
                </div>
            </div>



            <div className=" bg-primary-focus  p-10 ">

                <div className='lg:w-[1200px] text-white p-5  grid lg:grid-cols-3 gap-5 mx-auto'>
                    <ul >
                        <span className="footer-title">Services</span>
                        <li className="link link-hover">Branding</li>
                        <li className="link link-hover">Design</li>
                        <li className="link link-hover">Marketing</li>
                        <li className="link link-hover">Advertisement</li>
                    </ul>
                    <ul>
                        <span className="footer-title">Company</span>
                        <li className="link link-hover">About us</li>
                        <li className="link link-hover">Contact</li>
                        <li className="link link-hover">Jobs</li>
                        <li className="link link-hover">Press kit</li>
                    </ul>
                    <ul>
                        <span className="footer-title">Legal</span>
                        <li className="link link-hover">Terms of use</li>
                        <li className="link link-hover">Privacy policy</li>
                        <li className="link link-hover">Cookie policy</li>
                    </ul>
                </div>
            </div>

        </div >
    );
};

export default Footer;