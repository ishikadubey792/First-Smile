import React, { useState } from 'react';
import '../Search/search.styles.scss'; // Import your CSS file
import { IoSearchOutline } from "react-icons/io5";
import { setFilteredProducts, setSearchQuery } from '../../Redux/Reducer/productReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFocus = () => {
    navigate("/product");
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSearchQuery = (e) =>{
     dispatch(setSearchQuery(e.target.value));
     dispatch(setFilteredProducts()); 
  }

  return (
    <div className="container">
     <div className="search-icon">
        <IoSearchOutline className='search'/>
      </div>
      <input
        type="search"
        placeholder="Search..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleSearchQuery}
      />
    </div>
  );
};

export default Search;
