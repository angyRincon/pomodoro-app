import React, {FC} from 'react';
import classes from "./styles.module.scss";
import CardHeader from "../../molecules/CardHeader";
import CardBody from "../../molecules/CardBody";

interface Props {
    handleClose: () => void
}

const Card: FC<Props> = ({ handleClose }) => {
    return (
        <div className={classes.card}>
            <CardHeader handleClose={handleClose}/>

            <CardBody handleClose={handleClose}/>

        </div>
    );
};

export default Card;
