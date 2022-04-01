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

    const [error, setError] = useState({
        name: "",
        size: "",
        cheese: "",
        sausage: "",
        peppers: "",
        pineapple: "",
        instructions: ""
    })

    const formSchema = yup.object().shape({
        name: yup.string().min(2, "name must be at least 2 characters").required(),
        size: yup.string().required(),
        cheese: yup.bool().oneOf([true]),
        sausage: yup.bool().oneOf([true]),
        peppers: yup.bool().oneOf([true]),
        pineapple: yup.bool().oneOf([true]),
        instructions: yup.string()
    })
   
    const formValidate = (e) => {
        yup.reach(formSchema, e.target.name)
            .validate(
                e.target.type === "checkbox" ? e.target.checked : e.target.value
            )
            .then(() => {
                //passed validation
                setError({...error, [e.target.name]: ""})
            })
            .catch((error) => {
                //failed validation
                setError({...error, [e.target.name]: error.errors[0]})
            })
    }
   
   
    const { orderSubmit } = props
    
    const [form, setForm] = useState(initialForm);

    const formChange = (e) => {
        formValidate(e)
        const valueToUse = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setForm({...form, [e.target.name]: valueToUse})
    } 

    const submitForm = (e) => {
        e.preventDefault()
        orderSubmit(form)
        setForm(initialForm)
    }


    return (
        <article>
            <h1>Order Form</h1>
            <form onSubmit={submitForm} id="pizza-form">
                <label>
                    Name:
                    <input onChange={formChange} type="text" name="name" value={form.name} id="name-input" />
                </label>
                <br />
                <label>
                    Choose a size:
                    <select onChange={formChange} id="size-dropdown" name="size">
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
                    <input onChange={formChange} type="checkbox" name="cheese" checked={form.cheese}/>
                </label>
                <label>
                    Sausage
                    <input onChange={formChange} type="checkbox" name="sausage" checked={form.sausage}/>
                </label>
                <label>
                    Peppers
                    <input onChange={formChange} type="checkbox" name="peppers" checked={form.peppers}/>
                </label>
                <label>
                    Pineapple
                    <input onChange={formChange} type="checkbox" name="pineapple" checked={form.pineapple}/>
                </label>
                <br />
                <label>
                    Special instructions:
                    <input onChange={formChange} type="text" name="instructions" id="special-text"/>
                </label>
                <br />
                <button type="submit" id="order-button">Add to Order</button>
            </form>
            <p>{error.name}</p>
        </article>
    )
}

export default OrderForm