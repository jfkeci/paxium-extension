import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

export default function PomodoroTimer() {
  const workTime = 25;
  const breakTime = 5;

  const [minutes, setMinutes] = useState(workTime);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(workTime);
    setSeconds(0);
  };

  const totalSeconds = isBreak ? breakTime * 60 : workTime * 60;
  const elapsedSeconds = minutes * 60 + seconds;
  const remainingPercent = (elapsedSeconds / totalSeconds) * 100;

  const chartOptions = {
    labels: ["Remaining", "Elapsed"],
    colors: ["#F00", "#0F0"],
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  };
  const chartSeries = [100 - remainingPercent, remainingPercent];

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            setIsBreak(!isBreak);
            if (isBreak) {
              setMinutes(workTime);
            } else {
              setMinutes(breakTime);
            }
            setSeconds(0);
            return;
          }
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds, minutes, isBreak, workTime, breakTime]);

  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 ml-5 mr-5">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="donut"
          width="280"
        />
      </div>

      <div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 pt-5">
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {`${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {isBreak && !isActive ? <h4>Break Time!</h4> : null}
            </span>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <div className="flex mt-4 space-x-3 md:mt-6">
              <button
                onClick={toggle}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {isActive ? "Pause" : "Start"}
              </button>
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                onClick={reset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
