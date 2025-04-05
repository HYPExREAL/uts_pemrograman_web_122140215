import React from "react"

function App() {
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Judul */}
      <h1 className="text-4xl font-bold text-yellow-600 mb-6">Uji Coba Tailwind CSS</h1>

      {/* Tombol */}
      <button className="bg-green-500 hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded mb-6">
        Klik Saya!
      </button>

      {/* Kartu */}
      <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Judul Kartu</h2>
          <p className="text-gray-600">
            Ini adalah deskripsi singkat untuk kartu ini. Tailwind CSS sangat mudah digunakan!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
