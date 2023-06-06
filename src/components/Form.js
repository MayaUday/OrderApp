import { useState, useEffect, useRef } from "react";

import Input from "./Input";
import Dropdown from "./Dropdown";

function Form(props) {

    const [nameInput, setNameInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [categoryInput, setCategoryInput] = useState("default");

    const nameInputRef = useRef();
    const priceInputRef = useRef();
    useEffect(() => {

    }, [])

    function nameInputHandler(event) {
        setNameInput(event.target.value);
    }

    function priceInputHandler(event) {
        setPriceInput(event.target.value)
    }

    function categoryInputHandler(event) {
        setCategoryInput(event.target.value);
    }

    function submitForm(event) {
        event.preventDefault();

        let productDetail = {
            id: Math.random(),
            name: nameInput,
            price: priceInput,
            category: categoryInput
        }

        props.onAddNewProduct(productDetail);

        setNameInput("");
        setPriceInput("");
        setCategoryInput("default");
    }
    return (
        <form autoComplete="off" onSubmit={submitForm}>
            <div>   
                <Input
                    ref={nameInputRef}
                    inputId="name"
                    inputType="text"
                    inputPlaceHolder="Choose Dish"
                    value={nameInput}
                    onChange={nameInputHandler}
                />
            </div>
            <div>
                <Input
                    ref={priceInputRef}
                    inputId="price"
                    inputType="number"
                    inputPlaceHolder="Choose Price"
                    value={priceInput}
                    onChange={priceInputHandler}
                />
            </div>
            <div>
                <Dropdown value={categoryInput} onChange={categoryInputHandler}/>
            </div>
            <div>
                <button class="btn btn-warning" type="submit">
                    Add to bill
                </button>
            </div>
        </form>

    );
}

export default Form;