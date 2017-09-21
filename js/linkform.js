import React from 'react';

class NewLinkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "link": "#", "linktext": "Home" };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

  render() {
    return (
      <form id='linkForm'>
        <label>
          <input
            name="link"
            type="url"
            value=''
            placeholder="https://example.com"

            onChange={this.handleInputChange} />
        </label>
        <label>
          <input
            name="linktext"
            type="text"
            placeholder="An example link"

            onChange={this.handleInputChange} />
        </label>
        <label>
          <input
            name="submit"
            type="submit"
            value="submit"
            onClick={this.props.submitFunction ? this.props.submitFunction : this.handleSubmit } />
        </label>
      </form>
    );
  }

}

export default NewLinkForm;
