import React from 'react';
import { shallow } from 'enzyme';
import ListOfLinks from '../js/listoflinks';

describe("ListOfLinks", () => {
  let fakestate = {Items: [
                {"link": "#",
                "linktext": "Home",
                "id":"906f0f60-8f2c-11e7-8a7a-b1ab96772742"},

                {"link": "example.com",
                "linktext": "fake site",
                "id":"906f0f60-8f2c-11e7-8a7a-b1ab96772743"}
              ]};

  let component = shallow(< ListOfLinks links={fakestate.Items} />);
  let lis = component.find('li');
  let keys = [];

  it ("Should contain an unordered list with right number of entries", () => {
    expect(component.find('ul').children().length).toEqual(2);
  });

  it ("Should put a unique key in each li", () => {

    lis.nodes.map((li) =>
      keys.push(li.key)
    );
    expect([...new Set(keys)].length).toEqual(keys.length);
  });

  it ("Should have an a in each li", () => {
    let linkels = component.find('a');
    expect(linkels.length).toEqual(lis.length);
  });
});
