import React from 'react';

import './style.css';

const Button = (props) => {
    let cls = 'button';
    if (props.theme === 'small') {
        cls += ' button--small';
    }

    const newProps = {};
    if (props.handleClick) {
        newProps.onClick = props.handleClick;
    }

    // newProps = {
    //     onClick: props.handleClick
    // }

    // onClick={props.handleClick}

    return (
        <button
          className={cls}
          {...newProps}
        >
            {props.children}
        </button>
    );
}

export default Button;