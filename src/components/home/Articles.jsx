"use client";
import { useState } from "react";

// articlesData.js
const articlesData = [
  {
    id: 1,
    title: "Grilled Tomatoes at Home",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imgSrc: "/Home/grilled-tomatoes.jpeg",
    imgAlt: "Grilled Tomatoes",
  },
  {
    id: 2,
    title: "Snacks for Travel",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imgSrc: "/Home/peacg-salsa.jpeg",
    imgAlt: "Snacks for Travel",
  },
  {
    id: 3,
    title: "Breakfast Snacks",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imgSrc: "/Home/meal3.jpeg",
    imgAlt: "Breakfast Snacks",
  },
  {
    id: 4,
    title: "How To Grill Corn",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imgSrc: "/Home/grilled-corn.jpeg",
    imgAlt: "Grilled Tomatoes",
  },
  {
    id: 5,
    title: "Crunchwrap Supreme",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imgSrc: "/Home/vegan-crunchwraps.jpeg",
    imgAlt: "Snacks for Travel",
  },
  {
    id: 6,
    title: "Broccoli Cheese Soup",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imgSrc: "/Home/brocolli-cheese.jpeg",
    imgAlt: "Breakfast Snacks",
  },
];

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;
  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesData.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === "next") {
        return prevPage < totalPages ? prevPage + 1 : prevPage;
      } else {
        return prevPage > 1 ? prevPage - 1 : prevPage;
      }
    });
  };

  const prevButtonColor = currentPage === 1 ? "#424961" : "#93A2D361";
  const nextButtonColor = currentPage === totalPages ? "#424961" : "#93A2D361";

  return (
    <main className="flex justify-center">
      <section className="flex flex-col rounded-none py-20">
        <header className="z-10 self-start font-semibold font-sourcesans text-primary-blue text-[28px] md:text-[56px] leading-[54px] md:leading-[42px] tracking-[4%]">
          Latest Articles
        </header>
        <div className="mt-2 w-full md:mt-20 max-md:max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 max-md:flex-col">
            {currentArticles.map((article) => (
              <article
                key={article.id}
                className="flex flex-col w-full"
              >
                <div className="flex flex-col grow px-5 py-5 w-[271px] md:h-[554px] md:w-[381px] rounded-3xl border-2 md:border border-solid border-primary-gray-2 md:border-primary-gray-border border-opacity-40 max-md:px-5 max-md:mt-10 min-h-[484px]">
                  <img
                    loading="lazy"
                    src={article.imgSrc}
                    className="object-cover w-full h-[258px] rounded-[21px] aspect-[1.27]"
                    alt={article.imgAlt}
                  />
                  <div className="flex flex-col mt-4 md:mt-9 mx-4 min-h-[195px] max-md:mx-2.5">
                    <h2 className="font-poppins text-[16px] md:text-[21px] font-bold leading-[20px] md:leading-[27px] tracking-[5%] text-primary-blue text-center md:text-start">
                      {article.title}
                    </h2>
                    <p className="font-opensans mt-2.5 md:mt-3.5 text-[12px] md:text-[15px] tracking-[-1%] md:tracking-[-2%] leading-[22px] md:leading-[27px] text-primary-gray-1 font-[400]">
                      {article.description}
                    </p>
                    <a
                      href="#"
                      className="font-sourcesans text-center items-center md:py-1 mt-3.5 md:mt-7 max-w-full text-[11px] md:text-[16.44px] font-semibold tracking-normal leading-[23px] md:leading-[35.59px] text-primary-gray-2 hover:text-bgwhitecol-1 hover:bg-primary-gray-2 rounded-3xl md:rounded-[21px] border-2 border-primary-gray-2 border-solid w-[118px] h-[26px] md:h-auto md:w-[131px] max-md:px-5 mx-auto md:mx-0"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex flex-row items-center gap-2">
            <span
              className={`border-2 rounded-md p-2 cursor-pointer transition-colors duration-300`}
              style={{ borderColor: nextButtonColor }}
              onClick={() => handlePageChange("prev")}
            >
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.44189 15.8523C9.99486 15.5393 10.1753 14.7427 9.80834 14.234C9.70603 14.0921 8.12567 12.6312 6.29636 10.9875L2.97042 7.99899L6.2973 5.01011C8.12699 3.36619 9.70744 1.90503 9.80928 1.76312C9.92885 1.59653 9.99467 1.35683 9.99505 1.08643C9.99562 0.714453 9.95488 0.630597 9.62964 0.333876C9.29554 0.0291567 9.21935 0 8.75851 0H8.25353L4.12681 3.76388L0 7.52768V7.959C0 8.21418 0.062993 8.47719 0.154181 8.60293C0.377575 8.91117 7.52253 15.452 7.95885 15.7478C8.38772 16.0386 9.03263 16.084 9.44189 15.8523Z"
                  fill="#AFAFAF"
                />
              </svg>
            </span>
            <p>{`${currentPage} / ${totalPages}`}</p>
            <span
              className={`border-2 rounded-md p-2 cursor-pointer transition-colors duration-300`}
              style={{ borderColor: prevButtonColor }}
              onClick={() => handlePageChange("next")}
            >
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.558107 0.147705C0.00513666 0.460681 -0.175258 1.25727 0.19166 1.766C0.293975 1.9079 1.87433 3.3688 3.70364 5.01247L7.02958 8.00101L3.7027 10.9899C1.87301 12.6338 0.292561 14.095 0.190718 14.2369C0.0711464 14.4035 0.00532551 14.6432 0.00494831 14.9136C0.00438252 15.2855 0.0451198 15.3694 0.370358 15.6661C0.70446 15.9708 0.780652 16 1.24149 16H1.74647L5.87319 12.2361L10 8.47232V8.041C10 7.78582 9.93701 7.52281 9.84582 7.39707C9.62243 7.08883 2.47747 0.547977 2.04115 0.252202C1.61228 -0.0385846 0.967365 -0.0839958 0.558107 0.147705Z"
                  fill="#AFAFAF"
                />
              </svg>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Articles;