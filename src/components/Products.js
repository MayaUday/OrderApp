import Product from "./Product";

function Products(props) {
    return (
        <>
            <ul class="nav nav-tabs justify-content-center">
                <li class="nav-item">
                   <p>Table 1</p>
                </li>
                <li class="nav-item">
                    <p>Table 2</p>
                </li>
                <li class="nav-item">
                   <p>Table 3</p>
                </li>
            </ul>
            <div id="display-orders" class="tab-content">
                <div id="table1" class="tab-pane fade active">
                    <ul class="list-group">
                    {
                        props.data.filter((item) => {
                            return item.category === "Table 1"
                        }).map((item) => {
                            return <Product key={item.id} name={item.name} price={item.price} category={item.category}  onDelete={props.onDeleteItem}/>
                        })
                    }
                    </ul>
                </div>
                <div id="table2" class="tab-pane fade">
                    <ul class="list-group">
                    {
                        props.data.filter((item) => {
                            return item.category === "Table 2"
                        }).map((item) => {
                            return <Product key={item.id} name={item.name} price={item.price} category={item.category}  onDelete={props.onDeleteItem}/>
                        })
                    }
                    </ul>
                </div>
                <div id="table3" class="tab-pane fade">
                    <ul class="list-group">
                    {
                        props.data.filter((item) => {
                            return item.category === "Table 3"
                        }).map((item) => {
                            return <Product key={item.id} name={item.name} price={item.price} category={item.category}  onDelete={props.onDeleteItem}/>
                        })
                    } 
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Products;