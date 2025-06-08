import {useEffect} from "react";
import { useParams} from "react-router";

const UserPage = () => {

  const {userId} = useParams();

  useEffect(() => {
    document.title = `Cf7 user id: ${userId}`;
  }, [userId]);

  return (
    <>
      <h1>User with id: {userId}</h1>
    </>
  )
}

export default UserPage;