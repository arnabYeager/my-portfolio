import React from 'react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col items-center">
        <div className="w-8 h-12 border-2 border-gray-400 dark:border-gray-600 rounded-full relative">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gray-500 dark:bg-gray-600 rounded-full animate-scroll"></div>
        </div>
        <div className="mt-2">
          <svg className="w-6 h-6 text-gray-400 dark:text-gray-600 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translate(-50%, 0); }
            50% { transform: translate(-50%, 100%); }
            100% { transform: translate(-50%, 0); }
          }
          .animate-scroll {
            animation: scroll 1s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ScrollIndicator;