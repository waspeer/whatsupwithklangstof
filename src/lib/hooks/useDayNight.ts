import { useState, useEffect } from 'react';

const getDay = () => {
  const hours = new Date().getHours();
  return hours < 19 || hours > 9;
};

export default function useDayNight() {
  const [day, setDay] = useState(getDay());
  const tenMinutes = 600000;

  useEffect(() => {
    const interval = setInterval(() => {
      setDay(getDay());
    }, tenMinutes);

    return () => clearInterval(interval);
  }, []);

  return day;
}
