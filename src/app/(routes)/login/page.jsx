import Link from "next/link";
import React from "react";
import { Duru_Sans } from "next/font/google";

const duru_sans = Duru_Sans({
  weight: "400",
  styles: ["normal", "italic"],
  subsets: ["latin"],
});

function page() {
  return (
    <main className="mt-[9.375rem]">
      <div className="w-full flex  justify-center items-center background-img-form h-[43.75rem]">
        <div className="flex flex-col justify-center items-center gap-[.9375rem]">
          <h1 className="self-start text-xl">Loguearse</h1>
          <div className="px-[2rem] py-[1.5rem] bg-black-form w-[25rem] rounded-[.4375rem]">
            <form action="" className="flex flex-col gap-[.75rem] w-full">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className={`${duru_sans.className} text-blue uppercase text-[.75rem]`}
                >
                  CORREO
                </label>
                <input
                  type="email"
                  className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className={`${duru_sans.className} text-blue uppercase text-[12px]`}
                >
                  CONTRASEÑA
                </label>
                <input
                  type="password"
                  className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                />
              </div>

              <button
                type="submit"
                className="w-[16.875rem] mx-auto p-[.75rem] text-center background-btn-form"
              >
                Ingresar
              </button>

              <span className="mt-[.9375rem] text-[.875rem]">
                Aun no tienes una cuenta?{" "}
                <Link href={"/register"} className="hover:text-blue">Registrarse</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
