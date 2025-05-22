const Footer = () => {
  return (
    <>
      <footer className=" text-center text-sm font-Inter text-gray-500 py-6 mt-20">
        <p>&copy; {new Date().getFullYear()} Nico Aroca. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/tailsmonster" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/nicoaroca12" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

      </footer>
    </>
  )
}

export default Footer;