import React from 'react';
import {Product} from "./components/Product/Product";
import {products} from "./data/products";

function App() {
    return (
        <div className="container m-auto">
            { products.map(product => <Product product={product} key={product.id} />) }
        </div>
    )
}

export default App;
