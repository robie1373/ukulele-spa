import React from 'react';
import { shallow } from 'enzyme';
import SongBook from '../js/songbook';

describe("SongBook Component", () => {
  let component = shallow(<SongBook />);

  it("should contain a single section", () => {
    expect(component.type()).toEqual("section");
  });
});
