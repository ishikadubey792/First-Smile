import React from 'react'
import "../Filter/filter.styles.scss";
import { useDispatch, useSelector } from 'react-redux';
import { productSelector, setFilteredProducts, setPriceFilter, setSelectedcategory } from '../../Redux/Reducer/productReducer';
import { FcFilledFilter } from "react-icons/fc";
import { Dropdown } from 'react-bootstrap';

const Filter = () => {
  const {priceFilter , selectedCategory} = useSelector(productSelector);
  const dispatch = useDispatch();

  const handlePriceFilter = (e) =>{
      const priceValue = Number(e.target.value);
      dispatch(setPriceFilter(priceValue));
      dispatch(setFilteredProducts());
  }
  const handleCategoryFunction = (e) => {
     const category = e.target.value;
     const updatedCategory = selectedCategory.includes(category) ? selectedCategory.filter((c)=> c!== category) : [...selectedCategory, category];
     dispatch(setSelectedcategory(updatedCategory));
     dispatch(setFilteredProducts());
  }

  return (
   <>
      <div className='filter-container'>
        <h4> <FcFilledFilter size={30}/> Refine By</h4>
        <div className="range">
            <p>Price :  {priceFilter} </p>
            <input className='slider' onChange={handlePriceFilter} value={priceFilter} type="range" min="0" max="3000" step={10}/>
          </div>
        <div className='filter-section'>
            <h5>Category</h5>
            <div className="checkbox">
            <label>
               <input 
                   type='checkbox'
                   value='mens cloths'
                   onChange={handleCategoryFunction}
               />    
               men's cloths
            </label> 
            <label>
               <input 
                   type='checkbox'
                   value="women's cloths"
                   onChange={handleCategoryFunction}
               />    
               Women's cloths
            </label> 
            <label>
               <input 
                   type='checkbox'
                   value='Jwellery'
                   onChange={handleCategoryFunction}
               />    
                 Jewellery
            </label>  
            <label>
               <input 
                   type='checkbox'
                   value= "womens bags"
                   onChange={handleCategoryFunction}
               />    
                  women's bags
            </label>  
            <label>
               <input 
                   type='checkbox'
                   value='Footwear'
                   onChange={handleCategoryFunction}
               />    
                 Footwear
            </label> 
            </div>
        </div>      
    </div>
   </>
  )
}

export default Filter
