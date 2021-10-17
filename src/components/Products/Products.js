import './Products.css';
import Product from '../Product/Product';
import React from 'react'; 
import Header from '../Header/Header';

function Products({List}){
    return(
         <section className="products">
    {/* //     <Product/>
    //     <Product/>
    //     <Product/>
    //     <Product/>
    //     <Product/>
    //     <Product/>
    //     <Product/>
    //     <Product/>
    //     <Product/>
    //     <Product/> */}
         
    
        {List.map((product)=>(
            
                <Product  key={product.id} id={product.id} title={product.title} price={product.price}  description={product.description} category={product.category} image={product.image} rating={product.rating}/>
           
        ))}
    
    </section>
   );  
}
export default Products;