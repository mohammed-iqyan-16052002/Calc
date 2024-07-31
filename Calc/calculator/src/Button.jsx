import React, { useContext } from "react";
import { Btnval } from './App';

const Button = (props) => {
    const { val, setVal } = useContext(Btnval);

    const Submit = () => {

        if (props.btn === 'C') {
            setVal('')
        }
        else if (props.btn === '=') {
            setVal(eval(val).toString());
        }
        else if(props.btn==='DE'){
            setVal(val.slice(0,-1))
        }
        else {
            setVal(val + props.btn);
        }
    };

    return (
        <> 
       <button key={props.keys} value={props.btn} onClick={Submit}>
            {props.btn}
        </button>
        </>

       
    );
};

export default Button;
