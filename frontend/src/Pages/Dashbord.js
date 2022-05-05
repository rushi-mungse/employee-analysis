import { useState } from "react";

const Dashbord = () => {
  const [link, setLink] = useState("home");
  return (
    <section className="text-gray-600 body-font">
      <div className=" mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/5 md:w-1/2 md:pr-10 md:py-6 flex  justify-between flex-col h-[731px] shadow-xl items-center ">
            <div className="flex flex-col">
              <div className="flex relative pb-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2
                    className={`font-bold title-font text-2xl  mb-1 tracking-wider ${
                      link === "home" ? "text-orange-500" : "text-gray-900"
                    }`}
                  >
                    <button onClick={() => setLink("home")}>Home</button>
                  </h2>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2
                    className={`font-bold title-font text-2xl  mb-1 tracking-wider ${
                      link === "fill-form" ? "text-orange-500" : "text-gray-900"
                    }`}
                  >
                    <button onClick={() => setLink("fill-form")}>
                      Fill Form
                    </button>
                  </h2>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2
                    className={`font-bold title-font text-2xl  mb-1 tracking-wider ${
                      link === "dashbord" ? "text-orange-700" : "text-gray-900"
                    }`}
                  >
                    <button onClick={() => setLink("dashbord")}>
                      Dashbord
                    </button>
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex relative pb-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-2xl text-gray-900 mb-1 tracking-wider">
                    Help
                  </h2>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-2xl text-gray-900 mb-1 tracking-wider">
                    LogOut
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {link === "home" && <h1>Home</h1>}
          {link === "fill-form" && <h1>Fill Form</h1>}
          {link === "dashbord" && <h1>Dashbord</h1>}
        </div>
      </div>
    </section>
  );
};

export default Dashbord;
