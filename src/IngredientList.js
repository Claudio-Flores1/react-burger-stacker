// loops over ingredients from props and displays one Ingredient component per item
import React from 'react'
import Ingredient from './Ingredient'
// import { useEffect, useState } from 'react'

const IngredientList = ({ingredients, add}) => {
    const allIngredients = ingredients.map((ing, i) => (
        <li key={i}>
            <Ingredient
                itemKey={i}
                ingredient={ing}
                clickFunc={add}
            />
        </li>
    ))
    return (
        <section className='pane'>
            <h3>Ingredients List</h3>
            <ul>
                {allIngredients}
            </ul>
        </section>
    )
}

export default IngredientList