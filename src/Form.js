
import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props);
         this.initialState = {
            key: '',
            value: ''
        };
        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState(
            {[name] :value}
        )
    };
    submitForm = () => {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState)
    };
    render() {
        const { key, value } = this.state;

        return (
            <form >
                <label>Key:</label>
                <input
                    type="text"
                    name="key"
                    value={key}
                    onChange={this.handleChange} />
                <label>Job:</label>
                <input
                    type="text"
                    name="value"
                    value={value}
                    onChange={this.handleChange}/>
                <br/>
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>

        );
    }
}
export default Form;
