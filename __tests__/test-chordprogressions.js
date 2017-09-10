import React from 'react';
import { shallow } from 'enzyme';
import ChordProgressionList from '../js/chordprogressions';

describe("ChordProgressionList Component", () => {
  let component = shallow(<ChordProgressionList />);

  it("should contain a single section", () => {
    expect(component.type()).toEqual("section");
  });
});
