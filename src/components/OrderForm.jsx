import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as yup from 'yup';



const initialForm = {
    name: "",
    size: "",
    cheese: false,
    sausage: false,
    peppers: false,
    pineapple: false,
    instructions: "string"
};




const OrderForm = (props) => {

    const [form, setForm] = useState(initialForm);





    return (
        <article>
            <h1>Order Form</h1>
            <form id="pizza-form">
                <label>
                    Name:
                    <input type="text" name="name" id="name-input"/>
                </label>
                <br />
                <label>
                    Choose a size:
                    <select id="size-dropdown" name="size">
                        <option value="select">--Select Size--</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <br />
                <p>Add toppings:</p>
                <label>
                    Cheese
                    <input type="checkbox" name="cheese" checked={form.cheese}/>
                </label>
                <label>
                    Sausage
                    <input type="checkbox" name="sausage" checked={form.cheese}/>
                </label>
                <label>
                    Peppers
                    <input type="checkbox" name="peppers" checked={form.cheese}/>
                </label>
                <label>
                    Pineapple
                    <input type="checkbox" name="pineapple" checked={form.cheese}/>
                </label>
                <br />
                <label>
                    Special instructions:
                    <input type="text" name="instructions" id="special-text"/>
                </label>
            </form>
        </article>
    )
}

export default OrderForm