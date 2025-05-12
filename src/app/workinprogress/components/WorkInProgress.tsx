import React from 'react'

export default function WorkInProgress() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-[#F5F2EC]">
      <div className="bg-white rounded-2xl p-10 text-center max-w-md mx-auto shadow-xl">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-[#000F8F] rounded-full animate-spin" />
        </div>
        <h1 className="text-5xl font-extrabold text-[#000F8F] mb-4">Work In Progress</h1>
        <p className="text-lg text-gray-700 mb-8">
          Estamos mejorando esta sección para brindarte la mejor experiencia. ¡Pronto estará lista! 🚀
        </p>
        <div className="flex space-x-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-[#000F8F] text-white font-semibold rounded-full hover:bg-indigo-700 transition"
          >
            Volver al inicio
          </a>
          <a
            href="mailto:support@lataza.com"
            className="px-6 py-3 border-2 border-[#000F8F] text-[#000F8F] font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  )
}

