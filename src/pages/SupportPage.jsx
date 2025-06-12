import React from "react";
import { LifeBuoy } from 'lucide-react';


export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans px-6 py-8">
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-2xl font-bold text-green-900 flex items-center mb-1">
          <span className="mr-2">
            <LifeBuoy className="w-5 h-5" />
          </span>
          Support Center
        </h2>
        <p className="text-sm text-gray-600">
          Ask questions and get advice from extension officers.
        </p>
      </div>

      <div className="bg-white p-6 rounded shadow mb-8">
        <label className="block font-semibold text-gray-700 mb-1">
          Ask a Question
        </label>
        <p className="text-sm text-gray-500 mb-2">
          Your Question (in English, Swahili, or Kikamba)
        </p>
        <textarea
          rows="4"
          className="w-full border border-gray-300 p-2 rounded text-sm"
          placeholder="Type your question here..."
        />
        <button className="mt-3 bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800">
          Submit Query
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow space-y-6">
        <h3 className="text-lg font-bold mb-2">Your Query History</h3>

        <div className="p-4 border border-gray-300 rounded bg-gray-50">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">Your Query:</p>
              <p className="text-sm text-gray-700">
                How do I treat anthracnose in young mango trees?
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Submitted on: June 9, 2025 at 2:30 PM
              </p>
            </div>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
              New
            </span>
          </div>
        </div>

        <div className="p-4 border border-gray-300 rounded bg-gray-50">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">Your Query:</p>
              <p className="text-sm text-gray-700">
                What fungicide is best for avocado black spots?
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Submitted on: June 6, 2025 at 10:00 AM
              </p>
            </div>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
              Answered
            </span>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-green-700 font-semibold mb-1">Answer:</p>
            <p className="text-sm text-gray-700">
              Use copper-based fungicides during the early stages and monitor fruit regularly.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Answered on: June 7, 2025 at 3:15 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
