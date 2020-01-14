/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from "react"
import productsData from "./vschoolProducts" //mimic  as server data which is jason format
import Product from "./Product" //own created component




function App() {
  
  /* using higher order array methods i.e map(), which accepts function as parameters, as we know map func returns an array so we have to safe it in variable in our case its "productCompoents". As we are applying map func on array which is "productsData" from a file name "vschoolProducts". After that  we are using an arrow function on it, which is only passing a single object i.e "productdata" as an parameter so we can skip parenthesis () and we can also skip return keyword and make it shorter. as we are returning only single statement as a component "<Product />" in which passing properties like "name" , "price", "description", "id"  key properites is used to avoid warning */
  
  //SOLUTION -1
  const productComponents = productsData.map(productdata => <Product key={productdata.id} 
  name={productdata.name} price={productdata.price} description={productdata.description} 
  id={productdata.id} />)
 
 //SOLUTION -2
 /* 
 const prodctComponents = productsData.map(item => <Product key={item.id} product={item} />)
 */ 
  return (
    <div>
        {productComponents}
    </div>
  )
}

export default App