import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { programmers } from "@/app/data/programmers";

function aboutPage() {
  return (
    <main className="w-full h-screen">
      <div className="mt-[3.125rem] h-full">
        <div className="flex flex-col items-center justify-center h-full px-[9.375rem] gap-[2.1875rem]">
          <div className="flex flex-col items-center max-w-[56.25rem]">
            <h1 className="font-semibold text-4xl">Conoce Nuestro Equipo</h1>
            <p className="mt-[1.875rem] text-center">
              Conoce a las mentes creativas y apasionadas que han dado vida a
              nuestra página. Cada uno aporta una perspectiva única, habilidades
              excepcionales y una dedicación inquebrantable a nuestra visión
              compartida.
            </p>
          </div>
          <div className="flex w-full justify-between gap-[3.125rem]">
            {programmers.map((programmer) => (
              <ProgrammerCard key={programmer.id} programmer={programmer} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function ProgrammerCard({ programmer }) {
  return (
    <div className="relative transition-all programmer-card max-w-[300px]">
      <div className="flex flex-col bg-black-dark rounded-2xl overflow-hidden">
        <div className=" w-full h-[360px]" width={396} height={360}>
          <img src={programmer.imageUrl} alt={programmer.name} className="w-full h-full object-cover "/>
        </div>
        <div className="flex-1 px-[20px] py-[20px]">
          <h3 className="text-[1.125rem]">{programmer.name}</h3>
          <h4 className="mt-[15px]">{programmer.rol}</h4>

          <div className="flex justify-center gap-[25px] mt-[20px] py-[.625rem]">
            <a href={programmer.gitHubUrl} target="_blank">
              <GitHubIcon />
            </a>
            <a href={programmer.instagramUrl} target="_blank">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div>
        {/* <h3>Fabrizio Ortiz</h3>
        <h4>Implementador</h4>
        <p>Aqui ira un breve comentario de cada persona</p>
        <div>
            <div>1</div>
            <div>2</div>
          </div> */}
      </div>
    </div>
  );
}

export default aboutPage;
