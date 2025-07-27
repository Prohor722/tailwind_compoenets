"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar1 } from "lucide-react";

export default function Calendar() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [date, setDate] = useState("");

  return (
    <div className="flex gap-5 flex-wrap items-center justify-center">
      {/* Calendar 1  */}
      <div className="relative w-72">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText=" "
          className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <label
          className={`absolute left-4 top-2 text-sm text-gray-500 transition-all duration-300 ${
            startDate
              ? "scale-75 -translate-y-3 text-blue-500"
              : "peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-500"
          }`}
        >
          Select a date
        </label>
      </div>

      {/* Calendar 2  */}
      <div className="relative w-72">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <Calendar1 className="absolute left-3 top-3 w-5 h-5 text-gray-500 pointer-events-none" />
      </div>

      {/* Calendar 3  */}
      <div className="relative w-72 my-6">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Choose your date"
          className="peer w-full px-4 pt-6 pb-2 border-2 border-transparent focus:border-blue-500 shadow-lg rounded-xl transition-all focus:outline-none"
        />
        <label
          className={`absolute left-4 top-2 text-sm text-gray-500 transition-all duration-300 ${
            startDate
              ? "scale-75 -translate-y-3 text-blue-500"
              : "peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-500"
          }`}
        >
          Event Date
        </label>
      </div>

      {/* Calendar 4  */}
      <div className="relative w-72 my-6">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder=" "
          className="peer w-full px-4 pt-6 pb-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />
        <label
          className={`absolute left-10 top-2 text-sm text-gray-500 transition-all duration-300 ${
            date
              ? "scale-75 -translate-y-3 text-purple-500"
              : "peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-purple-500"
          }`}
        >
          Select Deadline
        </label>
        <Calendar1 className="absolute left-3 top-3 w-5 h-5 text-purple-500 pointer-events-none" />
      </div>

      {/* Calendar 5  */}
    </div>
  );
}
