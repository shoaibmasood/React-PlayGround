import React from "react"

function Product(props){
    return (
        //SOLUTION-1
        <div>
            <h3>Product ID: {props.id}</h3>
            <h3>Name: {props.name}</h3>
            <h3>Price: {props.price}</h3>
            <h3>Description: <p>{props.description}</p></h3>
            <br />
            <hr />
        </div>
        /*
        SOlUTION-2
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
        </div>
        */
    )
}


export default Product

