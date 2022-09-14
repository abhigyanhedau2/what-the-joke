import React from 'react';
import './HRLine.module.css';

const HRLine = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <hr style={{ '--lineColor': props.color }} />
        </div>
    )
};

export default HRLine;