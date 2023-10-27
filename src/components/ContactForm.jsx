"use client";
import { Duru_Sans } from "next/font/google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

import React, { useState } from "react";

const duru_sans = Duru_Sans({
  weight: "400",
  styles: ["normal", "italic"],
  subsets: ["latin"],
});

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (event) => {
    event.preventDefault();

    // register({
    //   name,
    //   email,
    //   password,
    //   password_confirmation: passwordConfirmation,

    //   country,
    //   last_name: lastName,
    //   setErrors,
    // });
  };

  return (
    <div className="absolute top-[-80px] left-[80px] z-[999999999999999999] w-[500px] h-[700px] flex justify-center items-center p-7 bg-rose-600 rounded-lg">
      <div className="w-full h-full flex flex-col items-center justify-between p-8 bg-red rounded-lg">
        <form onSubmit={submitForm} className="w-full text-center">
          <h2 className="w-full mb-8 font-bold text-[22px]">Get in toch</h2>

          {/* Name */}
          <div className="flex flex-col gap-5 w-full text-start mb-12">
            <label
              htmlFor="name"
              className={`${duru_sans.className} font-bold`}
            >
              Nombre
            </label>

            <input
              id="name"
              type="text"
              className="border-b border-white bg-transparent w-full outline-none"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              autoFocus
            />

            {/* <InputError messages={errors.name} className="mt-2" /> */}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-5 w-full text-start mb-12">
            <label
              htmlFor="email"
              className={`${duru_sans.className} font-bold`}
            >
              Correo
            </label>

            <input
              id="email"
              type="email"
              className="border-b border-white bg-transparent w-full outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            {/* <InputError messages={errors.email} className="mt-2" /> */}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-5 w-full text-start mb-12">
            <label
              htmlFor="message"
              className={`${duru_sans.className} font-bold`}
            >
              Mensaje
            </label>

            <input
              id="message"
              type="text"
              className="border-b border-white bg-transparent w-full outline-none"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />

            {/* <InputError messages={errors.message} className="mt-2" /> */}
          </div>

          <button
            type="submit"
            className="w-[7.5rem] mt-[2rem] mx-auto p-[.5313rem] text-center uppercase rounded-full background-btn-contact-form box-shadow-default hover:opacity-90"
          >
            Enviar
          </button>
        </form>

        <div className="flex justify-between w-[255px] mx-auto">
          <a className="cursor-pointer" href="https://www.facebook.com/" target="_blank">
            <FacebookIcon />
          </a>
          <a className="cursor-pointer" href="https://github.com/SkivaDev/gameStoreApp" target="_blank">
            <GitHubIcon />
          </a>
          <a className="cursor-pointer" href="https://twitter.com/Fabrizio_Ortiz0" target="_blank">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
