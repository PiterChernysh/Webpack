import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../../actions/counter';

const Counter = (props) => (
    <div
      style={{
        margin: '100px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
        <button onClick={props.increment}>
            +1
        </button>
        {props.count}
        <button onClick={props.decrement}>
            -1
        </button>
    </div>
);

export default connect(
  store => ({ count: store.count }),
  { increment, decrement }
)(Counter);