import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Error = ({ message = "Oops! Something went wrong. The URL doesn't Exist", statusCode = 404 }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <div className="flex justify-center mb-4 text-red-500">
          <AlertTriangle className="w-16 h-16" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Error {statusCode}</h1>
        <p className="text-lg text-gray-600 mb-6">{message}</p>
        <a
          href="/"
          className="inline-block bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition duration-200"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Error;
