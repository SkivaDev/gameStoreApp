import Link from "next/link";
import React from "react";

function NoticiasPage() {
  return (
    <main className="mt-[5rem] mb-[1.875rem] mx-auto pl-[3.4375rem] max-w-[100rem]">
      <h1 className="text-[1.125rem] mb-[1.875rem]">GameWorld Noticias</h1>
      <div className="flex justify-between">
        <NewsContainer news={{ link: "noticia-1" }} />
        <NewsContainer news={{ link: "noticia-2" }} />
      </div>

      <div className="mt-16">
        <NewsCard news={{ link: "noticia-1" }}/>
        <NewsCard news={{ link: "noticia-1" }}/>
        <NewsCard news={{ link: "noticia-1" }}/>
        <NewsCard news={{ link: "noticia-1" }}/>
        <NewsCard news={{ link: "noticia-1" }}/>
        <NewsCard news={{ link: "noticia-1" }}/>
      </div>
    </main>
  );
}

const NewsContainer = ({ news }) => {
  const imgUrlTest =
    "https://cdn2.unrealengine.com/the-lord-of-the-rings-return-to-moria-header-1920x1080-6b8c76f15224.jpg";

  return (
    <div className="flex flex-col gap-4">
      <img
        src={imgUrlTest}
        alt="news image"
        className="w-full h-[425px] hover:brightness-150 hover:opacity-70 cursor-pointer rounded-lg"
      />

      <div>
        <p className="text-gray-400 uppercase text-[.6875rem] mb-2">12h ago</p>
        <Link
          href={`news/${news.link}`}
          className="font-semibold cursor-pointer mb-3"
        >
          The Lord of the Rings: Return to Moria guide to survival and secrets
        </Link>
        <p className="text-gray-400 mb-3">
          You shall not pass without this basic knowledge for The Lord of the
          Rings: Return to Moria
        </p>
        <Link
          href={`news/${news.link}`}
          className="border-b border-gray-500 hover:border-white"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const NewsCard = ({ news }) => {

  const imgUrlTest = 'https://cdn2.unrealengine.com/en-halloween-blog-asset-1920x1080-7840e62a513d.jpg?h=270&quality=medium&resize=1&w=480'

  return (
    <div className="flex gap-6 border-t border-gray-500 pt-[1.25rem] mb-[1.3125rem]">
      <img src={imgUrlTest} alt="news image" className="w-[12.5rem] h-full"/>

      <div className="flex flex-col flex-1 items-start">
        <p className="text-gray-400 uppercase text-[.6875rem] mb-1">12h ago</p>
        <Link
          href={`news/${news.link}`}
          className="font-semibold cursor-pointer mb-2"
        >
          The Lord of the Rings: Return to Moria guide to survival and secrets
        </Link>
        <p className="text-gray-400 mb-2">
          You shall not pass without this basic knowledge for The Lord of the
          Rings: Return to Moria
        </p>
        <Link
          href={`news/${news.link}`}
          className="border-b border-gray-500 hover:border-white"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NoticiasPage;
