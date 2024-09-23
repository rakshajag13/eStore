import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        category:"Men",
        items:["Coats","Boots","Party Wear","Shirts"]
    },
    {
        category:"Women",
        items:["Coats","Boots","Party Wear","Shirts"]
    },
    {
        category:"Kids",
        items:["Coats","Boots","Party Wear","Shirts"]
    }
]
const accordionSLice=createSlice({
    name:"AccordionSlice",
    initialState
})

export default accordionSLice;