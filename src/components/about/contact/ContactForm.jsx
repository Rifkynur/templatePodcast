import React from "react";
import Input from "./Input";
import ButtonForm from "./ButtonForm";
import ShiningStars from "../../../assets/vector/Shiningstars.svg";
import Spring from "../../../assets/vector/Spring.svg";

const ContactForm = () => {
  return (
    <div className="relative">
      <img src={ShiningStars} alt="illustration" className="absolute hidden md:block top-0 right-0 lg:right-20" />
      <img src={Spring} alt="illustration" className="absolute hidden md:block left-0 w-[75px] bottom-20 lg:w-[120px] lg:left-10 " />
      <form className=" pt-5 w-[80%] md:w-[70%] lg:w-[50%] mx-auto border-t-[.5px] border-black lg:pt-8 ">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:gap-5 md:justify-center">
            <div className="md:w-[50%]">
              <Input label={"Full name"} type={"text"} placeholder={"Name"} />
              <Input label={"Email"} type={"email"} placeholder={"johndoe@gmail.com"} />
            </div>
            <div className="md:w-[50%]">
              <Input label={"Phone"} type={"number"} placeholder={"Phone"} />
              <Input label={"Subject"} type={"text"} placeholder={"Subject..."} />
            </div>
          </div>
          <div className="w-full ">
            <div className="flex flex-col text-[12px] gap-3 mt-2 mx-auto lg:text-base">
              <label className="font-bold after:content-['*'] after:text-accentRed">Message</label>
              <textarea type="text" placeholder="Your message goes here..." className="border border-black rounded-lg py-2 px-3 focus:outline-accentRed" rows={5}></textarea>
            </div>
          </div>
        </div>

        <ButtonForm />
      </form>
    </div>
  );
};

export default ContactForm;
