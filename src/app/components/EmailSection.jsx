"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [result, setResult] = React.useState("");

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

  //formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  formData.append("access_key", "afddbbc6-6922-44c6-8639-20cd50a5ed54");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully");
    event.target.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  }

};
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className=" ">
        <h1 className="text-4xl font-bold text-black my-2">
         Contact me
        </h1>
       
        <div className="socials flex flex-row gap-2 ">
          <Link href="https://github.com/Ashwin2926">
            <Image src={GithubIcon} alt="Github Icon" className=" bg-black" />
          </Link>
          <Link href="https://www.linkedin.com/in/ashwin-nyamainashe/">
            <Image src={LinkedinIcon} alt="Linkedin Icon"  className=" bg-gradient-to-br from-blue-500 to-blue-700"/>
          </Link>
        </div>
      </div>
      <div>
          <form className="flex flex-col" onSubmit={onSubmit}>
          
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-black block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Subject"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
          <span>{result}</span>
      
      </div>
      
    </section>
  );
};

export default EmailSection;
