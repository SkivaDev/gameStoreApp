import Link from "next/link";
import React from "react";

function NoticiasPage() {
  return (
    <main className="mt-[5rem] mb-[1.875rem] mx-auto pl-[3.4375rem] max-w-[100rem]">
      <h1 className="text-[1.125rem] mb-[1.875rem]">
        GameWorld Noticias
      </h1>
      <div className="flex gap-3">
        <NewsContainer news={{link: 'noticia-1'}} />
        <NewsContainer news={{link: 'noticia-2'}} />
      </div>
    </main>
  );
}

const NewsContainer = ({news}) => {

  const imgUrlTest = 'https://cdn2.unrealengine.com/the-lord-of-the-rings-return-to-moria-header-1920x1080-6b8c76f15224.jpg'

  return (
    <div className="flex flex-col gap-4">
      <img src={imgUrlTest} alt="news image" className="w-full h-[390px] hover:brightness-150 hover:opacity-70 cursor-pointer" />

      <div>
        <p className="uppercase text-[.6875rem]">12h ago</p>
        <Link href={`news/${news.link}`} className="font-semibold cursor-pointer">The Lord of the Rings: Return to Moria guide to survival and secrets</Link>
        <p>You shall not pass without this basic knowledge for The Lord of the Rings: Return to Moria</p>
        <Link href={`news/${news.link}`}>Read More</Link>
      </div>
    </div>
  )
}

const NewsCard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-[1.125rem] mb-[1.875rem]">
          GameWorld Noticias
        </h1>
      </div>
    </div>
  )
}


export default NoticiasPage;
