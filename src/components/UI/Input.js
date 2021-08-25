import classes from './Input.js';
import React from 'react';
const Input = React.forwardRef((props, ref) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref}  {...props.input} />
    </div>
});

export default Input;







// import React from "react";
// import styles from "./Input.module.css";
 
// const Login = (props) => {
//     return (
//         <div className={styles.input}>
//             <label htmlFor={props.input.id}>{props.label}</label>
//             <input {...props.input}/>
//         </div>
//     );
// };
 
// export default Login;