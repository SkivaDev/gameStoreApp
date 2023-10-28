"use client";

import React from "react";
import { ContactForm, MapComponent } from "@/components";

function ContactPage() {
  return (
    <main className="pt-[5rem] mx-auto pl-[3.4375rem] max-w-[100rem] h-screen">
      {/* <div className="p-y-[1.875rem] text-center">
        <h1 className="font-bold text-[2.5rem]">Como podemos ayudarte?</h1>
      </div>

      <div className="">
        <h2>Contactanos</h2>

        <div>
          <h3>Contactanos</h3>

          <p>
            If you didn't find your answer in our FAQ's, please use our Live
            Chat service or send us an email. It might take us a little longer
            than usual to reply to emails but we will aim to reply within 5
            working days.
          </p>

          <h4>Live Chat Opening Hours</h4>

          <p>
            Monday to Friday: 8:30am to 9:30pm <br />
            Saturday and Sunday: 9:30am to 5:30pm <br />
            Christmas Day: Closed
          </p>

          <h4>GAME Technical Product Support Guides</h4>
          
          <p>Need help with setting up or troubleshooting your new purchase?</p>
        </div>
      </div> */}

      <div className="relative mt-[8.125rem] max-w-full rounded-lg">
        {/* <MapComponent /> */}

        <ContactForm />
      </div>
    </main>
  );
}

export default ContactPage;
