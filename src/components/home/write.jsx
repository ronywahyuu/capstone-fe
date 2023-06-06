const FormDonasi = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h4 className="text-center text-lg font-medium sm:text-2xl">
        Buat Donasi
        </h4>
        
        <form action=""
          className="mb-0 mt-4 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 border-t-4 border-cyan-500">
          <div>
            <label className="sr-only">Judul</label>
            <div className="relative">
              <input
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Judul"
                type="text"
                id="judul"
              />
            </div>
          </div>

          <div>
            <label className="sr-only">Deskripsi</label>
            <div className="relative">
              <textarea
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Deskripsi"
                rows="1"
                id="deskripsi"
              />
            </div>
          </div>

          <div>
            <label htmlFor="input-link" className="sr-only">Input Link</label>
            <div className="relative">
              <input
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Input Link"
                type="text"
                id="input-link"
              />
            </div>
          </div>

          <div>
            <label className="sr-only">Upload file</label>
            <div className="relative">
              <input 
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Upload File"
                type="file"
                id="upload-file"
              />
            </div>
          </div>

          <button
            type="submit"
              className="block w-full rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-white"
            >
            Kirim
          </button>
        </form>

      </div>
    </div>
  );
};

export default FormDonasi;
