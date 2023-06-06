import './Product.css'

function Product(props) {
    const deleteHandler = () => {
        props.onDelete(props.id);
      };

    return (
        <div className="product-wrapper">
            <div>{props.name}</div>
            <div>{`Rs.${props.price}`}</div>
            <button type='submit' onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default Product;