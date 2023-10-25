"use client";

import React, { useState } from "react";
import { Duru_Sans } from "next/font/google";
import Link from "next/link";
import { users } from "@/app/data/dataExample";
import useUsers from "@/hooks/useUsers";
import { useAuth } from "@/hooks/auth";
import { InputError } from "@/components";

const duru_sans = Duru_Sans({
  weight: "400",
  styles: ["normal", "italic"],
  subsets: ["latin"],
});

function registerPage() {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const [country, setCountry] = useState('')
  const [lastName, setLastName] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();

    register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      
      country,
      last_name: lastName,
      setErrors,
    });
  };

  return (
    <main className="mt-[9.375rem]">
      <div className="w-full flex  justify-center items-center background-img-form h-[43.75rem]">
        <div className="flex flex-col justify-center items-center gap-[.9375rem]">
          <h1 className="self-start text-xl">Registrase</h1>
          <div className="px-[2rem] py-[1.5rem] bg-black-form w-[25rem] rounded-[.4375rem]">
            <form
              className="flex flex-col gap-[.75rem] w-full"
              onSubmit={submitForm}
            >
              {/* Country */}
              <div className="flex flex-col">
                <label
                  htmlFor="country"
                  className={`${duru_sans.className} text-blue uppercase text-[.75rem]`}
                >
                  Pais
                </label>
                <select
                  id="country"
                  className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                >
                  <option value="Colombia">Colombia</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Peru">Peru</option>
                  <option value="Chile">Chile</option>
                  <option value="Argentina">Argentina</option>
                </select>
              </div>

              <div className="flex w-full justify-between">
                {/* Name */}
                <div className="flex flex-col w-[47%]">
                  <label
                    htmlFor="name"
                    className={`${duru_sans.className} text-blue uppercase text-[.75rem]`}
                  >
                    Nombre
                  </label>

                  <input
                    id="name"
                    type="text"
                    className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                    pattern="[A-Za-z]{3,}"
                    placeholder="Ingresa tu nombre"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    autoFocus
                  />

                  <InputError messages={errors.name} className="mt-2" />
                </div>

                {/* Last Name */}
                <div className="flex flex-col w-[47%]">
                  <label
                    htmlFor="lastName"
                    className={`${duru_sans.className} text-blue uppercase text-[.75rem]`}
                  >
                    Apellido
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                    placeholder="Ingresa tu Apellido"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className={`${duru_sans.className} text-blue uppercase text-[12px]`}
                >
                  CORREO
                </label>

                <input
                  id="email"
                  type="email"
                  className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                  placeholder="correo@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>

              {/* Password */}
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className={`${duru_sans.className} text-blue uppercase text-[12px]`}
                >
                  CONTRASEÑA
                </label>

                <input
                  id="password"
                  type="password"
                  className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  autoComplete="new-password"
                />

                <InputError messages={errors.password} className="mt-2" />
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col">
                <label
                  htmlFor="passwordConfirmation"
                  className={`${duru_sans.className} text-blue uppercase text-[12px]`}
                >
                  REPETIR CONTRASEÑA
                </label>

                <input
                  id="passwordConfirmation"
                  type="password"
                  className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                />

                <InputError messages={errors.password_confirmation} className="mt-2" />
              </div>

              <button
                type="submit"
                className="w-[16.875rem] mx-auto p-[.75rem] text-center background-btn-form"
              >
                Registrase
              </button>

              <span className="mt-[.9375rem] text-[.875rem]">
                Ya tienes una cuenta?{" "}
                <Link href={"/login"} className="hover:text-blue">
                  Loguearse
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default registerPage;
