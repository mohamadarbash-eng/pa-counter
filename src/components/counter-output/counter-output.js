import React from 'react';

import './counter-output.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
        Current Counter: {props.value}
    </div>
);

export default counterOutput;
