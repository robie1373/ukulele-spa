import React from 'react';

class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {links: []};
  }

  componentDidMount() {
    const url = `https://uomlb17ija.execute-api.us-east-1.amazonaws.com/dev/uke`
    const url2 = `https://uomlb17ija.execute-api.us-east-1.amazonaws.com/dev/uke`
    fetch(url, {mode: 'cors'})
    .then(result=>result.json())
    .then(links=>this.setState({links}))
    .catch((e) => console.log(e))

    console.log(this.state.links[0]);
  }

  render() {
    return(
      <section className="section section--alignCentered background--uke">
        <h1 className="color--darkgrey section__heading--largest">Links List Placeholder text</h1>
        <ul>
         {this.state.links.map(link=><li key={link.id}><a href="{link.link}">{link.linktext}</a></li>)}
        </ul>
      </section>
    )
  }
}

export default LinksList;
