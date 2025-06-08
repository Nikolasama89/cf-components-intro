import {useEffect} from "react";
import OnlineStatus from "../components/OnlineStatus.tsx";

const OnlineStatusPage = () => {

  useEffect(() => {
    document.title = "CF7 Online Status";
  }, []);

  return (
    <>
      <OnlineStatus/>
    </>
  )
}

export default OnlineStatusPage;