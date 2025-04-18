'use client'

import { analyzeLifeRange, DayOfWeek } from "@/analyzeLifeRange";
import Greeting from "@/components/greeting";
import { useState } from "react";

const ageOptions = Array.from({ length: 45 - 18 + 1 }, (_, i) => {
  const age = i + 18;
  return {
    value: age,
    label: age.toString(),
  }
})

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

type Result = {
  totalDays: number;
  from: string;
  to: string;
  dayCounts: Partial<Record<DayOfWeek, number>>;
}

export default function Home() {
  const [currentAge, setCurrentAge] = useState<number>(23)
  const [targetAge, setTargetAge] = useState<number>(30)
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>('Friday')
  const [result, setResult] = useState<Result | null>(null)

  return (
    <div className="grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Greeting />
      <div className="flex border p-6 rounded border-purple-400">
        <span className="text-xl font-bold text-center flex flex-col space-y-4">
          <div className="flex items-center space-x-2"> 
            <h1 className="text-xl">I'm currently</h1>
            <label htmlFor="age-select" className="sr-only">Select your role:</label>
            <select 
              id="age-select" 
              className="text-xl font-bold text-center flex  rounded shadow-xs dark:shadow-white scrollbar-hidden" 
              name="Age" 
              value={currentAge}
              onChange={(e) => setCurrentAge(parseInt(e.target.value))}
              required
            >
              {ageOptions.map((option) => (
                <option key={option.value} value={option.value} className="dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-x-2">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl">How many</h1>
              <label htmlFor="age-select" className="sr-only">Select your role:</label>
              <select 
                id="age-select"
                className="text-xl font-bold text-center flex  rounded shadow-xs dark:shadow-white scrollbar-hidden" 
                name="Age" 
                required
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value as DayOfWeek )}
              >
                {daysOfWeek.map((day) => (
                  <option key={day} value={day} className="dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer">
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl ">do I have till I hit</h1>
              <label htmlFor="age-select" className="sr-only">Select your role:</label>
              <select 
                id="age-select" 
                className="text-xl font-bold text-center flex  rounded shadow-xs dark:shadow-white scrollbar-hidden" 
                name="Age" 
                value={targetAge}
                onChange={(e) => setTargetAge(parseInt(e.target.value))}
                required
              >
                {ageOptions.map((option) => (
                  <option key={option.value} value={option.value} className="dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </span>
      </div>
      <button 
        className="shadow shadow-white p-2 px-3 rounded hover:shadow-lg transition"
        onClick={() => {
          const result = analyzeLifeRange(currentAge, targetAge, [selectedDay])
          setResult(result)
        }}
      >
        Calculate
      </button>
      {result && (
        <>
          <div className="border rounded w-full md:w-2/3">
            <div className="bg-violet-100/50 p-2 border-b flex justify-between">
              <p>From</p>
              <p>To</p>
              <p>Details</p>
            </div>
            <div className="p-2 flex justify-between">
              <p>{result.from}</p>
              <p>{result.to}</p>
              <div>
                {Object.entries(result.dayCounts).map(([day, count]) => (
                  <p key={day}>{day}s: {count}</p>
                ))}
              </div>
            </div>
          </div>
          <h1 className="-mt-10 text-lg font-semibold">Total Days: {result.totalDays}</h1>
        </>
      )}
    </div>
  )
}
