import React from "react";

import {
  AppleSvg,
  WindowsSvg,
  LinuxSvg,
  PlaystationSvg,
  XboxSvg,
  NintendoSvg,
} from "@/app/assets/icons/AllSvgs";

const GamePlatforms = ({ platforms }) =>
  platforms?.map(({ platform: { slug } }, i) =>
    slug === "pc" ? (
      <WindowsSvg key={i} />
    ) : slug === "playstation" ? (
      <PlaystationSvg key={i} />
    ) : slug === "xbox" ? (
      <XboxSvg key={i} />
    ) : slug === "nintendo" ? (
      <NintendoSvg key={i} />
    ) : slug === "mac" ? (
      <AppleSvg key={i} />
    ) : slug === "linux" ? (
      <LinuxSvg key={i} />
    ) : (
      ""
    )
  );

export default GamePlatforms;
