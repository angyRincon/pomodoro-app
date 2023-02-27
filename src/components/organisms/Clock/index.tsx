import React, {FC} from 'react';
import Typography from "../../atoms/Typography";
import classes from './styles.module.scss'
import Button from "../../atoms/Button";
import CircularProgress from "../../molecules/CircularProgress";

interface Props {
    stop: boolean
    percentage: number
    minutes: number
    seconds: number | string
    handleStartStop: () => void
}

const Clock: FC<Props> = ({stop, percentage, minutes, seconds, handleStartStop}) => {
    return (
        <div className={classes.shadowWrapper}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <CircularProgress
                        size={250}
                        strokeWidth={8}
                        percentage={percentage}
                    />

                    <Typography
                        variant='huge'
                        label={`${minutes}:${seconds}`}
                        className={classes.time}
                    />

                    <Button className={classes.actionButton} variant='text-only'
                            handleClick={handleStartStop}>
                        <Typography
                            variant='body2'
                            className={classes.action}
                            label={!stop ? 'START' : 'PAUSE'}
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Clock;
