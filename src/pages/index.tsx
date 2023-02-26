import React from 'react';
import SettingsModal from "../components/organisms/Modal";
import Typography from "../components/atoms/Typography";
import classes from "../index.module.scss"
import ButtonStack from "../components/molecules/ButtonStack";
import Clock from "../components/organisms/Clock";
import Button from "../components/atoms/Button";

const buttonItems = [
    {label: 'pomodoro', active: true},
    {label: 'short break', active: false},
    {label: 'long break', active: false},
]
const Pomodoro = () => {
    return (
        <div className={classes.container}>
            <Typography variant='h1' label='pomodoro'/>

            <ButtonStack items={buttonItems}/>

            <Clock/>

            <SettingsModal/>

            <Button
                variant='text-only'
                className={classes.iconButton}
                handleClick={() => console.log('openModal')}
            >
                <i className="fa-solid fa-gear"></i>
            </Button>

        </div>
    );
};

export default Pomodoro;
