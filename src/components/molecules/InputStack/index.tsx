import React from 'react';
import InputNumber from "../../atoms/InputNumber";
import classes from './styles.module.scss'

const InputStack = () => {
    return (
        <div className={classes.inputStack}>
            <InputNumber label='pomodoro'/>
            <InputNumber label='short break'/>
            <InputNumber label='long break'/>
        </div>
    );
};

export default InputStack;
