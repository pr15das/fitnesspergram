import React from "react";

export default function IdealCard() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid lg:grid-cols-4 gap-7 lg:gap-28 mt-10 mb-10 justify-center items-center">
          <div className="block max-w-[18rem] rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="rounded-t-lg"
                src="https://ideogram.ai/api/images/direct/Cakezo40ShmoTsAhXJSEiw.png"
                alt=""
              />
            </div>
            <div className="p-6 text-center bg-white">
              <h1 className="text-bold text-black text-2xl text-center">For workholic</h1>
              <p className="text-base text-black">
                Get nutritious and budget-friendly Thali meals delivered
                directly to your workplace. Save time, boost focus, and enhance
                productivity every day with healthy food available at the click
                of a button.
              </p>
            </div>
          </div>
          <div className="block max-w-[18rem] rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="rounded-t-lg"
                src="https://ideogram.ai/api/images/direct/kbVi7ZB7TJGh27Avpz-jcQ.jpg"
                alt=""
              />
            </div>
            <div className="p-6 text-center bg-slate-900">
              <h1 className="text-bold text-2xl text-center">For Athletes</h1>

              <p className="text-base text-slate-400">
                Enjoy meals that are gluten-free or high in protein, low in fat,
                and packed with nutrients to strengthen your body and optimize
                your performance to have optimal focus for your goals.
              </p>
            </div>
          </div>
          <div className="block max-w-[18rem] rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="rounded-t-lg"
                src="https://ideogram.ai/api/images/direct/xgzotLNmRvmk70mr6zJ9vQ.png"
                alt=""
              />
            </div>
            <div className="p-6 text-center bg-white">
              <h1 className="text-bold text-black text-2xl text-center">For Students</h1>

              <p className="text-base text-black">
                Students, we've got you covered. Our nutrition-rich thali meal
                plan provides the perfect food options tailored for you,
                conveniently packaged in a meal kit that can be taken anywhere.
              </p>
            </div>
          </div>
          <div className="block max-w-[18rem] rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="rounded-t-lg"
                src="https://ideogram.ai/api/images/direct/faHC6ca0Qs6EFNqWAETRpw.png"
                alt=""
              />
            </div>
            <div className="p-6 text-center bg-slate-900">
              <h1 className="text-bold text-2xl text-center">For Gymbros</h1>

              <p className="text-base text-slate-400">
                Your health is our priority. That's why we provide weekly meal
                plans designed for various needs, whether it's weight loss,
                muscle gain, or overall fitness. We assist you in reaching your
                fitness goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
