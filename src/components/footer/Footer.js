import React,{Component} from 'react';
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import { IconContext } from "react-icons";

class Footer extends Component{
    render(){
        return (
            <IconContext.Provider value={{ color: "white" }}>
              <section className="footer" style={{color: "white"}}>
                <div className="bg-footer_gray text-white_dark py-10">
                  <p className="font-bold text-xl mx-auto w-4/5 pl-20">LOGO</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 w-4/5 m-auto md:grid-cols-3 lg:grid-cols-4 xl:auto-cols-auto justify-center content-center sm:justify-around sm:items-start gap-5">
                    <li className="flex flex-col justify-center sm:items-center">
                      <ul className="space-y-4">
                        <h1 className="font-bold my-2 text-lg">Policies</h1>
                        <li className="hover:underline cursor-pointer">Privacy</li>
                        <li className="hover:underline cursor-pointer">Disclaimer</li>
                        <li className="hover:underline cursor-pointer">
                          Terms & Conditions
                        </li>
                      </ul>
                    </li>
                    <li className="flex flex-col justify-center sm:items-center">
                      <ul className="space-y-4">
                        <h1 className="font-bold my-2 text-lg">My Account</h1>
                        <li className="hover:underline cursor-pointer">Track order</li>
                        <li className="hover:underline cursor-pointer">
                          Cancellation & Refund
                        </li>
                        <li className="hover:underline cursor-pointer">
                          Shipping and Delivery
                        </li>
                      </ul>
                    </li>
                    <li className="flex flex-col justify-center sm:items-center">
                      <ul className="space-y-4">
                        <h1 className="font-bold my-2 text-lg">Company</h1>
                        <li className="hover:underline cursor-pointer">About us</li>
                        <li className="hover:underline cursor-pointer">Contact us</li>
                        <li className="hover:underline cursor-pointer">FAQs</li>
                      </ul>
                    </li>
                    <li className="flex flex-col justify-center sm:items-center">
                      <ul className="space-y-4">
                        <h1 className="font-bold my-2 text-lg">Contact</h1>
                        <li className="cursor-pointer flex space-x-2">
                          <div className="w-6 h-6 bg-skin_dark rounded-full flex justify-center items-center">
                            <BiIcons.BiLocationPlus />
                          </div>
                          <span className="hover:underline">Bangalore</span>
                        </li>
                        <li className="cursor-pointer flex space-x-2">
                          <div className="w-6 h-6 bg-skin_dark rounded-full flex justify-center items-center">
                            <BiIcons.BiPhone />
                          </div>
                          <span className="hover:underline">9825725274</span>
                        </li>
                        <li className="cursor-pointer flex space-x-2">
                          <div className="w-6 h-6 bg-skin_dark rounded-full flex justify-center items-center">
                            <AiIcons.AiOutlineMail />
                          </div>
                          <span className="hover:underline underline">
                            abc@instamojo.in
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center items-center  bg-skin_dark p-2 space-x-2">
                  <div className="text-white">Follow us</div>
                  <ul className="flex justify-center items-center space-x-2">
                    <li className="p-2 h-8 w-8 bg-white rounded-full flex justify-center items-center ">
                      <img
                        className=" "
                        src="./assets/images/_x30_1._Facebook.svg"
                        alt="Facebook"
                        srcset=""
                      />
                    </li>
                    <li className="p-2 h-8 w-8 bg-white rounded-full flex justify-center items-center">
                      <img
                        className=" "
                        src="./assets/images/_x30_2.YouTube_1_.svg"
                        alt="Youtube"
                        srcset=""
                      />
                    </li>
                    <li className="p-2 h-8 w-8 bg-white rounded-full flex justify-center items-center">
                      <img
                        className=" "
                        src="./assets/images/_x31_0.Linkedin.svg"
                        alt="Linkedin"
                        srcset=""
                      />
                    </li>
                    <li className="p-2 h-8 w-8 bg-white rounded-full flex justify-center items-center">
                      <img
                        className=" "
                        src="./assets/images/google-plus.svg"
                        alt="GooglePlus"
                        srcset=""
                      />
                    </li>
                    <li className="p-2 h-8 w-8 bg-white rounded-full flex justify-center items-center">
                      <img
                        className=" "
                        src="./assets/images/instagram.svg"
                        alt="Instagram"
                        srcset=""
                      />
                    </li>
                    <li className="p-2 h-8 w-8 bg-white rounded-full flex justify-center items-center">
                      <img
                        className=" "
                        src="./assets/images/pinterest.svg"
                        alt="Pinterest"
                        srcset=""
                      />
                    </li>
                    <li className="p-2 h-8 w-8 bg-white rounded-full flex justify-center items-center">
                      <img
                        className=" "
                        src="./assets/images/twitter.svg"
                        alt="Twitter"
                        srcset=""
                      />
                    </li>
                  </ul>
                </div>
              </section>
            </IconContext.Provider>
          );
    }
};

export default Footer;
