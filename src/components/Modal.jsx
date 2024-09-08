import React, { useState } from "react";
import {useRef } from "react"

function Modal() {
    const modalRef = useRef();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 sm:w-full h-full">
      <form ref={modalRef} className="mt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <div className="px-8 py-12 md:px-9">
              <h2 className="text-4xl font-extrabold text-center text-gray-200">
                ¡Bienvenido de nuevo!
              </h2>
              <p className="text-center text-gray-200 mt-3">
                Te extrañamos, inicia sesión para continuar
              </p>
              <div className="mt-10">
                <div className="relative">
                  <label
                    className="block mb-3 text-sm font-medium text-gray-200 dark:text-zinc-200"
                    htmlFor="email"
                  >
                    Correo Electronico
                  </label>
                  <input
                    placeholder="ejemplo@gmail.com"
                    className="block w-full px-3 py-3 bg-gray-700 text-gray-200 border-0 rounded-md focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    name="email"
                    id="email"
                    type="email"
                  />
                </div>
                <div className="mt-6">
                  <label
                    className="block mb-3 text-sm font-medium text-gray-200 dark:text-zinc-200"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <input
                    placeholder="••••••••"
                    className="block w-full px-3 py-3 bg-gray-700 text-gray-200 border-0 rounded-md focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    name="password"
                    id="password"
                    type="password"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    className="w-full px-3 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold rounded-md mt-10 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                    type="submit"
                    // disabled={!isFormValid()}
                  >
                    {" "}
                    Ingresar{" "}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-2 text-sm text-gray-200 text-center">
                <a className="font-medium underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="text-sm text-gray-400 text-center">
                ¿No tienes una cuenta?
                <br />
                <a className="font-medium underline text-gray-200">
                  {" "}
                  REGISTRATE
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
