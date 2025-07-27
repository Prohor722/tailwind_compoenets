"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export default function Calendar() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div>
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

      
    </div>
  );
}
