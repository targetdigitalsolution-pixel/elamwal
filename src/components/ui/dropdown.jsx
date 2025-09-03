import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

const Dropdown = ({ trigger, items = [], className, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    if (onSelect) {
      onSelect(item);
    }
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cn("relative inline-block", className)}>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen && (
        <div className="absolute z-30 w-48 bg-white border border-gray-200 rounded-md shadow-lg start-0 top-full">
          <div className="py-1 ">
            {items.map((item, index) => (
              <>
                <button
                  key={index}
                  className="flex items-center w-full gap-2 px-4 py-2 text-base text-gray-700 hover:bg-gray-100 text-start"
                  onClick={() => handleItemClick(item)}
                >
                  {item.flag && (
                    <img src={item.flag} className="w-6 h-5 me-2" />
                  )}
                  {item.label}
                </button>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
