import React from 'react';
import NewLinkForm from './linkform';
import ListOfLinks from './listoflinks';

class LinksSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Items: [{
      "link": "#",
      "linktext": "Home",
      "id":"00000000-aaaa-1111-bbbb-222222cccccc"
      }] };
  }

  componentDidMount() {
    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }

    function logResponse(response) {
      console.log('StatusCode: ' + response.status);
      console.log('Headers: ' + response.headers.get('Content-Type'));
      console.log('Body: ' + response.body['Items']);
      Promise.all([response.status, response.headers.get('Content-Type'), response.headers.get('Access-Control-Allow-Origin'), response.body]).then(values => {
        console.log(values);
      });
      return response;
    }

    const url = this.props.apiURL ? this.props.apiURL : `https://uomlb17ija.execute-api.us-east-1.amazonaws.com/dev/uke`

    fetch(url, {mode: 'cors'})
    .then(handleErrors)
    .then(logResponse)
    .then((response) => {
        if (response.status != 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        return response.json()
      })
    .then((data) => {
      this.setState(data);
    })
    .catch((err) => {
      console.log('Fetch Error: ', err);
    });

  }

  render() {
    return(
      <section className="section background--uke">
        <div>{< ListOfLinks links={this.state.Items} /> }</div>
        <div>{<NewLinkForm />} </div>
      </section>
    );
  }
}

export default LinksSection;
