import React from 'react';

class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {links: [{"link": "https://cnn.com", "linktext": "like news"}]};
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

    const url = `https://uomlb17ija.execute-api.us-east-1.amazonaws.com/dev/uke`

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
      <section className="section section--alignCentered background--uke">{JSON.stringify(this.state)}</section>
    )
  }
}

export default LinksList;
