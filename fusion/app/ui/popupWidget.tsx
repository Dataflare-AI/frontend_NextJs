"use client";

import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

const PopupWidget = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data, e) => {
    console.log(data);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data, null, 2),
      });

      const json = await response.json();

      if (json.success) {
        setIsSuccess(true);
        setMessage(json.message);
        e.target.reset();
        reset();
      } else {
        setIsSuccess(false);
        setMessage(json.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage(
        "Client Error. Please check the console.log for more info"
      );
      console.log(error);
    }
  };

  const handleIconClick = () => {
    setIsFormVisible(true);
  };

  const handleGoBack = () => {
    setIsFormVisible(false);
    reset();
  };

  return (
    <div className="fixed z-40">
      <button
        onClick={handleIconClick}
        className="flex items-center justify-center transition duration-300 bg-indigo-500 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 ease"
      >
        <span className="sr-only">Open Contact form Widget</span>
        <div className="absolute w-6 h-6 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
      </button>
      {isFormVisible && (
        <div className="fixed z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto">
          <div className="flex flex-col overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
            {/* ... Restante do código do formulário */}
            <div className="mb-3">
              <button
                onClick={handleSubmit(onSubmit)}
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
            <p className="text-xs text-center text-gray-400" id="result">
              <span>
                Powered by{" "}
                <a
                  href="https://Web3Forms.com"
                  className="text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web3Forms
                </a>
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupWidget;
