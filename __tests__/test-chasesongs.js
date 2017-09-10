import React from 'react';
import { shallow } from 'enzyme';
import ChaseSongList from '../js/chasesongs';

describe("ChaseSongList Component", () => {
  let component = shallow(<ChaseSongList />);

  it("should contain a single section", () => {
    expect(component.type()).toEqual("section");
  });
});
