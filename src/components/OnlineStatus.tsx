import {useEffect, useState} from "react";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handler = () => setIsOnline(navigator.onLine);
    const pollingId: number = setInterval(handler, 5000);

    window.addEventListener('online', handler);
    window.addEventListener('offline', handler);

    //cleanup function
    return () => {
      clearInterval(pollingId);
      window.removeEventListener("online", handler)
      window.removeEventListener('offline', handler)
    };
  }, []);

  return(
    <>
      {/*<div className="bg-green-500 text-white text-center mt-12 p-4 rounded mx-4">*/}
      <div className={` text-white text-center mt-12 p-4 rounded mx-4 ${ isOnline ? 'bg-green-500' : 'bg-red-500' }`}>
        { isOnline ? "You are online" : "You are offline" }
      </div>
    </>
  )
}

export default OnlineStatus;