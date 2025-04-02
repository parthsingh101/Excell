"use client";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Excell Electromech</h1>
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
