import DigitalClockClass from "@/pages/_service/digitalClockClass";
import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [clock] = useState(new DigitalClockClass());
  const [time, setTime] = useState<string>(clock.getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(clock.getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [clock]);

  return <div>{time}</div>;
}

export default DigitalClock;
