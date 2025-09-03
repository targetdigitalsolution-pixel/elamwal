import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";
import { Search as SearchIcon } from "lucide-react";

export const Search = ({
  placeholder = "البحث...",
  onSearch,
  results = [],
  className = "",
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
    setIsOpen(value.length > 0 && results.length > 0);
  };

  const handleResultClick = (result) => {
    setQuery(result.title);
    setIsOpen(false);
    // Handle navigation or selection
  };

  return (
    <div className={cn("relative", className)} ref={searchRef}>
      <div className="relative ">
        {/* <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full px-3 py-2 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent [direction:rtl]"
          onFocus={() => setIsOpen(query.length > 0 && results.length > 0)}
        /> */}
        <SearchIcon className="w-5 text-black cursor-pointer" />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute left-0 right-0 z-30 mt-1 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg top-full max-h-60">
          {results.map((result) => (
            <div
              key={result.id}
              className="px-4 py-2 border-b border-gray-100 cursor-pointer hover:bg-gray-100 last:border-b-0"
              onClick={() => handleResultClick(result)}
            >
              <div className="text-sm font-medium text-gray-900 [direction:rtl]">
                {result.title}
              </div>
              <div className="text-xs text-gray-500 [direction:rtl]">
                {result.category}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
