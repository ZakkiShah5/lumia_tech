import React, { useState, useEffect } from "react";
import { FaChevronUp  } from "react-icons/fa"; // using react-icons

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed cursor-pointer bottom-6 right-6 p-3  bg-[#A3D9A5] text-white shadow-lg hover:bg-[#5fb55f] transition duration-300"
        >
          <FaChevronUp  size={18} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
