import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super();

        this.state = {
            name: props.author,
            text: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        // this.inputName = React.createRef();
        // this.inputText = React.createRef();
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        // const data = {
        //     name: this.inputName.current.value,
        //     text: this.inputText.current.value,
        // };
        const data = this.state;
        console.log('submit', data);
    }

	render() {
        const { name, text } = this.state;
		return (
			<form
              className="form"
              onSubmit={this.handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  // ref={this.inputName}
                  // defaultValue={this.props.author}
                />

                <label htmlFor="text">Comment</label>
                <textarea
                  name="text"
                  id="text"
                  value={text}
                  onChange={this.handleChange}
                  // ref={this.inputText}
                />

                <button className="button">post</button>
            </form>
		);
	}
}

export default Form;