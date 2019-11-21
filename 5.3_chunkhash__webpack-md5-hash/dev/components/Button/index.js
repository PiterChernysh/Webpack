import React from 'react';

import styles from './style.css';

const Button = (props) => {
    let cls = styles.button;
    if (props.theme === 'small') {
        cls += ` ${styles.small}`;
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