import React, { useState } from "react";

import Card from "./components/Card";
import Form from "./components/Form";
import Products from './components/Products'

function App() {
	const products = [
		{
			id: 'g1',
			name: 'sample',
			price: 100,
			category: "Grocery"
		}
	];

	const [productsData, setProductsData] = useState(products);

	function onAddNewProduct(product) {
		setProductsData((prevState) => {
			return [product, ...prevState]
		});
	}

  const deleteItemHandler = itemId => {
    setProductsData(prevGoals => {
      const updatedData = prevGoals.filter(item => item.id !== itemId);
      return updatedData;
    });
  };


    return (
        <div className="container mt-5">
            <Card classes="card">
				    <Form onAddNewProduct={onAddNewProduct}/>  
		      	</Card>
            <Card classes="card text-center mt-5 mx-auto col-md-6" cardHeader="Orders">
            	<Products data={productsData} onDeleteItem={deleteItemHandler}/>
            </Card>
          
      </div>
    );
}

export default App;