const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <>
      <footer className="bg-gray-700">
        <div className="text-white text-center py-4 ">
          Copyright © {currentYear}, Coding Factory
        </div>
      </footer>
    </>
  )
}

export default Footer;