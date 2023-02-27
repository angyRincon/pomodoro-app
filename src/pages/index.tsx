import React, {useEffect, useRef, useState} from 'react';
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
    const [open, setOpen] = useState(false);
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(`00`)
    const [percentage, setPercentage] = useState(100)
    const [stop, setStop] = useState(false)
    const interval = React.useRef(null);

    const start = () => {
        setStop(true)
        const duration = 60 * 25
        let timer = duration;
        let localMinutes;
        let localSeconds;

        let percentageValue = (duration * 100) / timer

        interval.current = setInterval(() => {
            percentageValue = percentageValue - 1
            setPercentage(percentageValue)
            localMinutes = parseInt(String(timer / 60), 10)
            localSeconds = parseInt(String(timer % 60), 10)

            setMinutes(localMinutes < 10 ? `0${localMinutes}` : localMinutes)
            setSeconds(localSeconds < 10 ? `0${localSeconds}` : localSeconds)

            if (--timer < 0) timer = duration
        }, 1000)
    }

    const stopClock = () => {
        setMinutes(minutes)
        setSeconds(seconds)
        setStop(false)
        clearInterval(interval.current)
    }

    const handleStartStop = () => {
        if (!stop) start()
        else stopClock()
    }

    return (
        <>
            <div className={classes.container}>
                <Typography variant='h1' label='pomodoro'/>

                <ButtonStack items={buttonItems}/>

                <Clock
                    minutes={minutes}
                    seconds={seconds}
                    percentage={percentage}
                    stop={stop}
                    handleStartStop={handleStartStop}
                />

                <Button
                    variant='text-only'
                    className={classes.iconButton}
                    handleClick={() => setOpen(true)}
                >
                    <i className="fa-solid fa-gear"></i>
                </Button>
            </div>

            <SettingsModal open={open} handleClose={() => setOpen(false)}/>
        </>
    );
};

export default Pomodoro;
