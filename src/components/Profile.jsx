'use client'

import { AngleDownSvg } from "@/app/assets/icons/AllSvgs";
import { StatusBadge } from "@/app/styles/StatusBadge";
import { Avatar } from "@mui/material";
import React, { useState } from "react";

import userIcon from "@/app/assets/icons/user.png";

const Profile = ({ user, logout }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleClick = () => {
    setIsButtonActive(!isButtonActive);
  };

  return (
    <div
      className={
        "relative flex items-center gap-2 px-[6px] py-[4px] rounded-full cursor-pointer hover:bg-grey-main"
      }
      onClick={handleClick}
    >
      <StatusBadge
        variant="dot"
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Avatar
          src={
            "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
          }
          alt="profile of user"
          className="w-[32px] h-[32px]"
        />
      </StatusBadge>
      <article
        className={
          "flex flex-col whitespace-nowrap self-stretch justify-evenly"
        }
      >
        <span className={"text-[14px]"}>
          {user.name} {user.last_name}
        </span>
        <span className={"text-[12px]"}>Online</span>
      </article>
      <img src={user} alt="" />
      <AngleDownSvg className={`w-[18px] h-[18px] fill-white ${isButtonActive ? 'rotate-180': ''}`} />

      <button
        className={`absolute w-full h-[48px] bg-red hover:bg-rose-900 rounded-xl bottom-[-48px] flex justify-center items-center ${isButtonActive ? "block" : "hidden"}`}
        onClick={logout}
      >
        <p>Log out</p>
      </button>
    </div>
  );
};

export default Profile;
