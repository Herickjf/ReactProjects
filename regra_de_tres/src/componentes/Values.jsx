import '../App.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useState } from 'react';
import { calculaR3 } from './calcula_r3.ts';


export const Values = (props) => {
    const [values, setValues] = useState({
        a: 0,
        b: 0,
        c: 0,
        x: 0,
    });

    const updateA = (event) => {
        setValues({ ...values, a: Number(event.target.value) });
    }
    const updateB = (event) => {
        setValues({ ...values, b: Number(event.target.value) });
    }
    const updateC = (event) => {
        setValues({ ...values, c: Number(event.target.value) });
    }
    const updateX = () => {
        setValues({ ...values, x: calculaR3(values.a, values.b, values.c) });
    }

    return (
        <div id='values'>
            <div id='row'>
                <input type='number' placeholder='a' onChange={updateA}/>
                <i class="fa fa-long-arrow-right" />
                <input type='number' placeholder='b' onChange={updateB}/>
            </div>
            <div id='row'>
                <input type='number' placeholder='c' onChange={updateC}/>
                <i class="fa fa-long-arrow-right" />
                <input id='x' type='number' placeholder='x' onClick={updateX} onFocus={updateX} value={values.x.toFixed(2)} readOnly/>
            </div>
        </div>
    );
}