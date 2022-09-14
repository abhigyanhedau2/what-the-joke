import React from 'react';
import './HRLine.module.css';

const HRLine = (props) => {
    return (
        <hr style={{ '--lineColor': props.color }} />
    )
};

export default HRLine;