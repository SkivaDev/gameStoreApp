"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Duru_Sans } from "next/font/google";
import useUsers from "@/hooks/useUsers";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/auth";
import { AuthSessionStatus, InputError } from "@/components";

const duru_sans = Duru_Sans({
  weight: "400",
  styles: ["normal", "italic"],
  subsets: ["latin"],
});

function LoginPage() {

  ///aaaaaaaaaaaa

  const router = useRouter();

  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (router.query?.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.query.reset));
      console.log("status is: ", status);
    } else {
      setStatus(null);
    }
  });

  const submitForm = async (event) => {
    event.preventDefault();

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };
  //aaa

  return (
    <main className="mt-[9.375rem]">
      <div className="w-full flex  justify-center items-center background-img-form h-[43.75rem]">
        <div className="flex flex-col justify-center items-center gap-[.9375rem]">

          {/* Session Status */}
          <AuthSessionStatus className="mb-4" status={status} />

          <h1 className="self-start text-xl">Loguearse</h1>
          <div className="px-[2rem] py-[1.5rem] bg-black-form w-[25rem] rounded-[.4375rem]">

            <form onSubmit={submitForm} className="flex flex-col gap-[.75rem] w-full">
              {/* Email Address */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className={`${duru_sans.className} text-blue uppercase text-[.75rem]`}
                >
                  CORREO
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />

                <InputError messages={errors.email} className="mt-2" />
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
                  autoComplete="current-password"
                />

                <InputError messages={errors.password} className="mt-2" />
              </div>

              {/* Remember Me */}
              <div className="block mt-4">
                <label
                  htmlFor="remember_me"
                  className="inline-flex items-center"
                >
                  <input
                    id="remember_me"
                    type="checkbox"
                    name="remember"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={(event) =>
                      setShouldRemember(event.target.checked)
                    }
                  />

                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-[16.875rem] mx-auto p-[.75rem] text-center background-btn-form"
              >
                Ingresar
              </button>

              <span className="mt-[.9375rem] text-[.875rem]">
                Aun no tienes una cuenta?{" "}
                <Link href={"/register"} className="hover:text-blue">
                  Registrarse
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
