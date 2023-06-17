import { NavLink } from "react-router-dom";
import Footer from "../components/footer";
import FaqSection from "../components/landing-page/faq";
import Featured from "../components/landing-page/featured";

import { RiHandHeartLine, RiGlobalLine } from "react-icons/ri";
import { TbRocket } from "react-icons/tb";

const LandingPage = () => {
  return (
    <>
      <div
        id="landingPage"
        className="mx-auto max-w-screen-xl px-4  sm:px-6   lg:items-center lg:px-8"
      >
        {/* hero section */}
        <section className="relative  bg-cover bg-center bg-no-repeat py-20 flex  items-center justify-between ">
          <div className=" ">
            <div className="max-w-xl ">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Pendidikan dimulai dari
                <strong className="block font-extrabold text-cyan-600">
                  kita dan untuk kita
                </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-lg/relaxed text-slate-700">
                Sisihkan danamu, donasikan, dan jadilah bagian dari gerakan
                untuk memberikan akses pendidikan bagi semua orang
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <NavLink
                  to="/home/timeline"
                  className="block w-full rounded bg-cyan-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-cyan-800 transition duration-200  focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Jelajahi
                </NavLink>
              </div>
            </div>
          </div>

          <div className="hidden md:flex">
            <img src="/hero.svg" alt="" />
          </div>
        </section>

        {/* about section */}
        <section className="">
          <h2 className="text-3xl text-center font-bold">
            Apa yang kami lakukan?
          </h2>
          <p className="text-base text-center">
            Togetherboost berkomitment untuk membantu pendidikan bagi siapa saja
            yang membutuhkan
          </p>

          {/* feature section */}
          <div className="flex flex-col md:flex-row  justify-between gap-2 py-10">
            <Featured
              text="Meningkatkan minat belajar"
              description="Kami berkomitmen untuk meningkatkan minat belajar bagi siapa saja yang membutuhkan"
              icon={<TbRocket />}
            />
            <Featured
              text="Membantu pendidikan bagi yang membutuhkan"
              description="Pendidikan adalah hak semua orang, membantu pendidikan bagi siapa saja yang membutuhkan adalah tanggung jawab kita bersama"
              icon={<RiHandHeartLine />}
            />
            <Featured
              text="Memberi kesempatan bagi siapa saja untuk berkontribusi dalam pendidikan"
              description="Kami percaya bahwa pendidikan adalah tanggung jawab kita bersama, dan siapa saja dapat berkontribusi dalam pendidikan"
              icon={<RiGlobalLine />}
            />
          </div>
        </section>
        {/* faq section */}
        <section className="">
          <div className="py-20">
            <h2 className="text-4xl font-bold mb-3 underline underline-offset-8">
              FAQ
            </h2>
            <FaqSection />
          </div>
        </section>

        {/* testimonials section */}
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
