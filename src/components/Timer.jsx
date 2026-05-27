

import { useEffect, useState } from "react";

const EventTimerSection = () => {
  const targetDate = new Date("2026-01-31T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hrs", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <>
      {/*
      <section className="py-8 sm:py-12 md:py-16 bg-white mt-12 sm:mt-16 md:mt-28 lg:mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          pura old content yaha safe rahega
        </div>
      </section>
      */}
    </>
  );
};

export default EventTimerSection;