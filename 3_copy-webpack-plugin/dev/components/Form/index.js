import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super();

        this.state = {
            name: props.item ? props.item.author : '',
            text: props.item ? props.item.text : '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { name, text } = this.state;
        const { item } = this.props;

        const data = {
            id: item ? item.id : Date.now(),
            author: name,
            text,
        };

        this.props.addFromProps(data);
        this.clearForm();
    }

    clearForm() {
        this.setState({
            name: '',
            text: '',
        });
    }

	render() {
        const { name, text } = this.state;
        const { type } = this.props;
        return (
			<form
              className={`form ${type ? type : ''}`}
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

                <button className="button">post</button>
            </form>
		);
	}
}

export default Form;