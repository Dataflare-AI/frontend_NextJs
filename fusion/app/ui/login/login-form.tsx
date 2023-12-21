import Image from "next/image";
import { inter } from "@/app/ui/fonts";

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center md:flex-row h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2 h-full">
        <div className="flex items-center justify-center w-full h-full relative md:ml-40">
          <Image src="/login.png" alt="Login Image" width={400} height={400} />
        </div>
      </div>
      <div className="flex items-center justify-center w-full md:w-3/4 h-full bg-white text-black md:mr-20">
        <div className="w-full max-w-md">
          <div className="text-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={250} // Ajuste a largura conforme necessário
              height={60} // Ajuste a altura conforme necessário
              quality={100} // Ajuste a qualidade da imagem
              className="mx-auto"
            />
          </div>
          <form className="space-y-3">
            <div className="flex-1 rounded-lg px-6 pb-4 pt-2 md:pt-4">
              <h1 className={`${inter.className} mb-3 text-2xl`}>
                Faça login para continuar.
              </h1>
              <div className="w-full">
                <div>
                  <label
                    className="mb-3 mt-3 block text-xs font-medium text-gray-900"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      dataSlot="icon"
                      className="w-4 h-4 text-black absolute left-3 top-1/2 transform -translate-y-1/2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    className="mb-3 mt-4 block text-xs font-medium text-gray-900"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="peer block w-full rounded-md border border-bla py-[9px] pl-10 pr-8 text-sm outline-2 placeholder:text-gray-500"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      required
                      minLength={6}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      dataSlot="icon"
                      className="w-4 h-4 text-black absolute left-3 top-1/2 transform -translate-y-1/2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-2 text-white">
                Log in
              </button>
              <div
                className="flex h-8 items-end space-x-1 mt-4"
                aria-live="polite"
                aria-atomic="true"
              >
                {/* {errorMessage && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  </>
                )} */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
