"use client";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white text-center py-4 mt-12">
      <p>&copy; {new Date().getFullYear()} Excell Electromech. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
