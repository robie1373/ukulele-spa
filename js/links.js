import React from 'react';

function genLink(props) {
  const linkObj = props;
  return <a href={linkObj.link}>{linkObj.linktext}</a>
}

function genListOfLinks(props) {
  const links = props.Items;
  const listItems = links.map((link) =>
    <li key={link.id}>{genLink(link)}</li>
  );
  return <ul>{listItems}</ul>;
}

class LinksSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Items: [{"link": "#", "linktext": "Home"}]};
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
      <section className="section background--uke"> {genListOfLinks(this.state)} </section>
    );
  }
}

export default LinksSection;
