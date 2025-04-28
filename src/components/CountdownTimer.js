'use client';
import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = new Date(targetDate) - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {timeUnits.map((unit, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-b from-py-green/30 to-py-dark/60 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-py-green/30 flex flex-col items-center justify-center"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-py-yellow mb-1">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-py-text/80">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}