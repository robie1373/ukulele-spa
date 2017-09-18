import React from 'react';
import { shallow } from 'enzyme';
import LinksSection from '../js/links';

describe("LinksList Component", () => {
  let component = shallow(<LinksSection />);

  it("should contain a single section", () => {
    expect(component.type()).toEqual("section");
  });
});
