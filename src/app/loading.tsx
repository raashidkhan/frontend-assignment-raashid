import React from "react";

const Loading = () => {
  return (
    <>
      <title>Loading...</title>
      <div className="page-loading">
        <svg
          aria-hidden="true"
          role="status"
          className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
            fill="transparent"
          />
          <path
            d="M93.9716 50C93.9716 75.1288 75.1288 93.9716 50 93.9716C24.8712 93.9716 6.02844 75.1288 6.02844 50C6.02844 24.8712 24.8712 6.02844 50 6.02844C75.1288 6.02844 93.9716 24.8712 93.9716 50Z"
            stroke="#0070f3"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default Loading;
