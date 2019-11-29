import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';

import { updateComment, createComment } from '../../actions';
import styles from './style.css';

class Form extends Component {
    state = {
        name: this.props.item ? this.props.item.author : '',
        text: this.props.item ? this.props.item.text : '',
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, text } = this.state;
        const { item } = this.props;

        const data = {
            id: item ? item.id : Date.now(),
            author: name,
            text,
        };

        if (this.props.type === 'edit') {
            this.props.updateComment(data);
        } else {
            this.props.createComment(data);
        }
        
        this.clearForm();
    };

    clearForm = () => {
        this.setState({
            name: '',
            text: '',
        });
    };

	render() {
        const { name, text } = this.state;
        const { type } = this.props;
        return (
			<form
              className={`${styles.form} ${styles[type]}`}
              onSubmit={this.handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />

                <label htmlFor="text">Comment</label>
                <textarea
                  name="text"
                  id="text"
                  value={text}
                  onChange={this.handleChange}
                />

                <Button>send</Button>
            </form>
		);

        return null;
	}
}

export default connect(null, { createComment, updateComment })(Form);