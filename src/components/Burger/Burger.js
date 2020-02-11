import React from 'react';
import { withRouter } from 'react-router-dom'
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burgur = (props) => {
    let transformedIngrediennts = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngrediennts.length === 0) {
        transformedIngrediennts = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngrediennts}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default withRouter(burgur);