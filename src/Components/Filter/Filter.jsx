import React, { useState } from 'react'
import "../Filter/filter.styles.scss";

const Filter = () => {
    const [genderFilter , setGenderFilter] = useState([]);
    const [categoryFilter , setCategoryFilter] = useState([]);
    const [priceFilter,setPriceFilter] = useState(9000);
    const [brandFilter , setBrandFilter] = useState([]);

    function handlePriceFilter(e){
        setPriceFilter(Number(e.target.value));
   }

  return (
    <div className='filter-container'>
        <h4>Refine By</h4>
        <div className="range">
            <p>Price :  {priceFilter} </p>
            <input onChange={handlePriceFilter} value={priceFilter} type="range" min="1" max="9000" step={20}/>
          </div>
        <div className='filter-section'>
            <h5>Gender</h5>
            <label>
                <input 
                  type="checkbox"
                  value="boys"
                />
                Boys 
            </label>
            <label>
                <input 
                  type="checkbox"
                  value="girls"
                />
                Girls 
            </label>
            <label>
                <input 
                  type="checkbox"
                  value="men"
                />
                Men 
            </label>
            <label>
                <input 
                  type="checkbox"
                  value="women"
                />
                Women 
            </label>   
        </div>  
        <div className='filter-section'>
            <h5>Category</h5>
            <label>
               <input 
                   type='checkbox'
                   value='t-shirt'
               />    
               T-shirts
            </label> 
            <label>
               <input 
                   type='checkbox'
                   value='shirts'
               />    
                 Shirts
            </label>  
            <label>
               <input 
                   type='checkbox'
                   value='sweater & seatshirts'
               />    
                  Sweatshirts
            </label>  
            <label>
               <input 
                   type='checkbox'
                   value='Dresses'
               />    
                 Dresses
            </label> 
        </div>    
    </div>
  )
}

export default Filter
