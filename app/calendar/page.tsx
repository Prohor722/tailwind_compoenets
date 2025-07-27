"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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

      <Popover>
      <PopoverTrigger className="w-72 px-4 py-3 border border-gray-300 rounded-lg text-left bg-white shadow focus:outline-none">
        {date ? format(date, 'PPP') : <span className="text-gray-500">Pick a date</span>}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
    </div>
  );
}
