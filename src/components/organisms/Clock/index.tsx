import React from 'react';
import Typography from "../../atoms/Typography";
import classes from './styles.module.scss'
import Button from "../../atoms/Button";

const Clock = () => {
    return (
        <div className={classes.container}>
            <Typography
                variant='huge'
                label='17:59'
            />

            <Button className={classes.actionButton} variant='text-only' handleClick={() => console.log('sometimes')}>
                <Typography
                    variant='body2'
                    className={classes.action}
                    label='PAUSE'
                />
            </Button>

        </div>
    );
};

export default Clock;
