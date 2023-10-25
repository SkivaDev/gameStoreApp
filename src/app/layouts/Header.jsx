"use client";

import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Navbar from "@/components/Navbar";
import logo from "../../../public/logo.png";
import Search from "@/components/Search";
import { StyledTooltip } from "../styles/StyledTooltip";
import { Badge, IconButton } from "@mui/material";
import { AdjustmentsSvg, CartSvg } from "../assets/icons/AllSvgs";
import Link from "next/link";
import useUsers from "@/hooks/useUsers";
import { useAuth } from "@/hooks/auth";
import { Profile } from "@/components";

function Header() {

  const { isLogined, loginedUser } = useUsers();

  const [usuarioLogeado, setUsuarioLogeado] = useState({})

  // useEffect(() => {
  //   setUsuarioLogeado(loginedUser)
  //   alert("cambio el estado de logeo " + isLogined )
  // }, [isLogined])
  
  // const user = {
  //   name: "Rohan Shrestha",
  //   email: "roga@gaa.com"
  // }

  const { user, logout } = useAuth({ middleware: 'guest' })


  return (
    <header className="fixed top-0 left-0 flex justify-between gap-[8.125rem] w-full h-[3.125rem] z-50 bg-black-light">
      <section className="flex items-center gap-[1.25rem] ">
        <div className="flex justify-center items-center w-[3.4375rem] self-stretch bg-primary-main cursor-pointer">
          <img
            src={
              "https://raw.githubusercontent.com/RohanShrestha01/firestore-react/main/src/assets/logo.png"
            }
            alt="logo"
          />
        </div>
        <Navbar />
      </section>

      <section className="flex items-center justify-center gap-[1.25rem] basis-[31.25rem]">
        <Search />
        <StyledTooltip title="Filtrador">
          <IconButton className="px-[.625rem] py-[.375rem] bg-primary-main rounded-[.4375rem] hover:bg-primary-dark">
            <AdjustmentsSvg className="w-[1.125rem] h-[1.125rem] fill-white" />
          </IconButton>
        </StyledTooltip>
      </section>

      <section className="flex items-center gap-[1.25rem] mr-[1.875rem]">
        <StyledTooltip title="Compras">
          <IconButton className="px-[.625rem] py-[.375rem] bg-primary-main rounded-[.4375rem] hover:bg-primary-dark">
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon className="w-[1.125rem] h-[1.125rem] fill-white" />
            </Badge>
          </IconButton>
        </StyledTooltip>
            {user ? 
            (<Profile user={user} logout={logout}/>)
            :(
            <button type="button" className="text-[.8125rem] px-[.625rem] py-[.375rem] bg-primary-main rounded-[.4375rem] hover:bg-primary-dark">
          <Link href={'/login'}>Login</Link>
        </button>
        )}


        
      </section>
    </header>
  );
}

export default Header;
