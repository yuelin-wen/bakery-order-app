import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = props => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    const AddToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price

        });
    };
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={AddToCartHandler} id={props.id} />
        </div>
    </li>
};

export default MealItem;






// import React, {useContext} from "react";
// import styles from './MealItem.module.css';
// import MealItemForm from "./MealItemForm/MealItemForm";
// import CartContext from "../../../store/cart-context";
 
// const MealItem = (props) => {
//     const priceLabel = `$${props.meal.price.toFixed(2)}`;
//     const cartContext = useContext(CartContext);
 
//     const addCartItemHandler = (amount) => {
//         cartContext.addCartItem(
//             {
//                 ...props.meal,
//                 amount: amount
//             }
//         );
//     };
 
 
//     return (
//         <li className={styles.meal}>
//             <div>
//                 <h3>{props.meal.name}</h3>
//                 <div className={styles.description}>{props.meal.description}</div>
//                 <div className={styles.price}>{priceLabel}</div>
//             </div>
//             <div>
//                 <MealItemForm mealId={props.meal.id} addCartItemHandler={addCartItemHandler}/>
//             </div>
//         </li>
//     );
// };
 
// export default MealItem;