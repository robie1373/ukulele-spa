import React from 'react';
import { shallow } from 'enzyme';
import UnderlayList from '../js/underlay';

describe("UnderlayList Component", () => {
  let component = shallow(<UnderlayList />);

  it("should contain a single section", () => {
    expect(component.type()).toEqual("section");
  });
});
