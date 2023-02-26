import React from 'react';
import classes from './styles.module.scss'
import Typography from "../../atoms/Typography";
import InputStack from "../InputStack";
import StylePickerStack from "../StylePickerStack";
import Button from "../../atoms/Button";

const picker1 = [
    {id: "1",type: 'font', active: true},
    {id: "2",type: 'font', active: false, font: 'quick-sand'},
    {id: "3",type: 'font', active: false, font: 'gelasio'},
]

const picker2 = [
    {id: "1",type: 'color', active: true, color: 'color-1'},
    {id: "2",type: 'color', active: false, color: 'color-2'},
    {id: "3",type: 'color', active: false, color: 'color-3'},
]


const CardBody = ({handleClose}) => {
    return (
        <div className={classes.body}>
            <Typography variant='h6' className={classes.title} label='TIME (MINUTES)'/>

            <InputStack/>

            <StylePickerStack title='FONT' items={picker1}/>
            <StylePickerStack title='COLOR' items={picker2}/>

            <div className={classes.applyContainer}>
                <Button
                    variant='normal'
                    label='Apply'
                    className={classes.applyButton}
                    handleClick={handleClose}
                />
            </div>
        </div>
    );
};

export default CardBody;
