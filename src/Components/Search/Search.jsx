import React, { useState } from 'react';
import '../Search/search.styles.scss'; // Import your CSS file
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="container">
     <div className="search-icon">
        <IoSearchOutline className='search'/>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Search;
