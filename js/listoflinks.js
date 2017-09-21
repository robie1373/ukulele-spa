import React from 'react';

class ListOfLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const links = this.props.links;
    // console.log(links);
    const listItems = links.map((linkObj) =>
      <li key={linkObj.id.toString()}><a target="_blank" href={linkObj.link}>{linkObj.linktext}</a> </li>
    );
    return (
        <ul>{listItems}</ul>
     );
  }
}

export default ListOfLinks;
