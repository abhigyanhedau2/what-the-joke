import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {

    const classesOnComponent = `${classes.card} ` + props.className;

    return (
        <div className={classesOnComponent}>
            {props.children}
        </div>
    )
};

export default Card;