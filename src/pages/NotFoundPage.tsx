import {useEffect} from "react";
import {Link} from "react-router";



const NotFoundPage = () => {

  useEffect(() => {
    document.title = "Error 404: Page Not Found";
  }, []);

  return (
      <>
        <div className="container text-center py-36 space-y-6">
          <h1 className="text-9xl font-bold text-red-800">404</h1>
          <p className="text-4xl text-gray-700">Page not found</p>
          <p className="text-lg text-gray-700">Page you are looking for does not exist!</p>
          {/*ΕΤΣΙ ΘΑ ΚΑΝΟΥΜΕ REDIRECT ΣΤΗΝ ΑΡΧΙΚΗ ΣΕΛΙΔΑ*/}
          <Link to="/" className="bg-red-800 text-white px-4 py-2 rounded">Go back to home</Link>
        </div>

      </>
    )
}

export default NotFoundPage;