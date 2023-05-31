const AboutPage = () => {
  return (
    <>
    <section className="mt-6 lg:mt-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4">
          <div className="max-w-6xl">
            <h1 className="text-3xl font-extrabold py-6 sm:text-4xl">
              Platform kami hadir dengan tujuan mendorong inklusifitas dalam pendidikan
            </h1>

            <p className="mt-4 sm:text-lg/relaxed text-slate-700">
              Meskipun pendidikan dianggap sebagai hak universal, masih banyak yang sulit mengaksesnya terutama sumber belajar 
              berbayar karena faktor finansial, sosial, dan lainnya. Setiap orang berhak belajar tanpa batasan apapun.
            </p>

            <p className="mt-4 sm:text-lg/relaxed text-slate-700">
              Aplikasi ini adalah platform untuk sumbangan pendidikan yang memungkinkan siapa saja memberikan bantuan 
              berbentuk finansial ataupun materi untuk menunjang pendidikan kepada penerima yang memenuhi persyaratan. 
              Donatur dapat memberikan dana langsung untuk pembelian buku, kursus online, dan lainnya sesuai kesepakatan.
            </p>
          </div>

        </div>
      </section>
      <section className="mt-4 lg:mt-2">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4">
          <div className="max-w-6xl">
            <h1 className="text-3xl font-bold py-2 sm:text-4xl text-center">
              Meet our Team
            </h1>
            <div className="flex justify-center space-x-4 pt-2" role="tablist" aria-orientation="horizontal">
              <div className="w-12 h-12 bg-gray-900 rounded-full">
              </div>
              <div className="w-12 h-12 bg-gray-900 rounded-full">
              </div>
              <div className="w-12 h-12 bg-gray-900 rounded-full">
              </div>
              <div className="w-12 h-12 bg-gray-900 rounded-full">
              </div>
            </div>

            <div className="flex justify-center space-x-4 pt-2" role="tablist" aria-orientation="horizontal">
              <p> Rony W</p>
              <p> Candra W</p>
              <p> Sindi R </p>
              <p> Suci S </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage