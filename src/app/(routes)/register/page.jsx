import React from "react";
import { Duru_Sans } from "next/font/google";
import Link from "next/link";

const duru_sans = Duru_Sans({
  weight: "400",
  styles: ["normal", "italic"],
  subsets: ["latin"],
});
function registerPage() {


  
  return (
    <main className="mt-[9.375rem]">
      <div className="w-full flex  justify-center items-center background-img-form h-[43.75rem]">
        <div className="flex flex-col justify-center items-center gap-[.9375rem]">
          <h1 className="self-start text-xl">Registrase</h1>
          <div className="px-[2rem] py-[1.5rem] bg-black-form w-[25rem] rounded-[.4375rem]">
            <form action="" className="flex flex-col gap-[.75rem] w-full">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className={`${duru_sans.className} text-blue uppercase text-[.75rem]`}
                >
                  Pais
                </label>
                <select
                  name=""
                  id=""
                  className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                >
                  <option value="Colombia">Colombia</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Peru" selected>Peru</option>
                  <option value="Chile">Chile</option>
                  <option value="Argentina">Argentina</option>
                </select>
              </div>

              <div className="flex w-full justify-between">
                <div className="flex flex-col w-[47%]">
                  <label
                    htmlFor=""
                    className={`${duru_sans.className} text-blue uppercase text-[.75rem]`}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                    pattern="[A-Za-z]{3,}"
                    placeholder="Ingresa tu nombre"
                  />
                </div>
                <div className="flex flex-col w-[47%]">
                  <label
                    htmlFor=""
                    className={`${duru_sans.className} text-blue uppercase text-[.75rem]`}
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                    placeholder="Ingresa tu Apellido"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className={`${duru_sans.className} text-blue uppercase text-[12px]`}
                >
                  CORREO
                </label>
                <input
                  type="email"
                  className="rounded-[.125rem] p-[.625rem] outline-none text-[.9375rem] text-black"
                  placeholder="correo@gmail.com"
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

              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className={`${duru_sans.className} text-blue uppercase text-[12px]`}
                >
                  REPETIR CONTRASEÑA
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
