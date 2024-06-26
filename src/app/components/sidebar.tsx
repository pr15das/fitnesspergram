// pages/sidebar.tsx

import { useState } from "react";
import { NextPage } from "next";
import { IndianRupee } from "lucide-react";

const Sidebar: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <div className="fixed bottom-4 left-4 z-50">
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 bg-yellow-400 rounded-full"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="cart"
              className="w-[25px] h-[40px] lg:h-[65px] lg:w-[50px]"
              version="1.1"
              viewBox="0 0 52 52"
            >
              <path d="m43.51 32.165 6.44-19.17a1 1 0 0 0-.14-.9.986.986 0 0 0-.81-.41H12.74l-1.29-5.21c-.47-1.66-2-2.82-3.72-2.82H3c-.55 0-1 .44-1 1 0 .55.45 1 1 1h4.73c.83 0 1.57.56 1.78 1.33l7.99 32.18a4.696 4.696 0 0 0-3.32 4.49c0 2.58 2.1 4.69 4.69 4.69 2.58 0 4.68-2.11 4.68-4.69 0-1-.31-1.93-.84-2.69h15.88c-.54.76-.85 1.69-.85 2.69 0 2.58 2.1 4.69 4.68 4.69 2.59 0 4.69-2.11 4.69-4.69 0-2.59-2.1-4.69-4.69-4.69-.04 0-.09 0-.13.01-.02-.01-.04-.01-.06-.01H19.51l-1.52-6.11h24.57c.43 0 .81-.28.95-.69z"></path>
            </svg>
          </button>
        </div>
        {open && (
          <div className="fixed inset-0 z-40 overflow-hidden mt-24">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-0 transition-opacity" />
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-xl font-semibold text-black">Your Cart</h2>
                    <button
                      onClick={() => setOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4 px-4">
                    <input
                      type="text"
                      placeholder="Search post here"
                      className="w-full p-2 border border-gray-300 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                    />
                  </div>
                  <div className="mt-4 px-4">
                    <p className="ml-2 text-gray-400">Items</p>
                  </div>
                  <div className="mt-4 px-4 h-full overflow-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <div
                          key={index}
                          className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300"
                        >
                          <h3 className="text-lg font-semibold text-black mb-2">
                            Item {index}
                          </h3>
                          <p className="text-gray-600">
                            Content for Item {index}.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 px-4">
                    <button className="flex justify-center items-center bg-black text-white rounded-md text-sm p-2 gap-1">
                    <IndianRupee />
                      Checkout{" "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
