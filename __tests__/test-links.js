import React from 'react';
import { shallow } from 'enzyme';
import LinksList from '../js/links';

describe("LinksList Component", () => {
  let component = shallow(<LinksList />);

  it("should contain a single section", () => {
    expect(component.type()).toEqual("section");
  });
});
