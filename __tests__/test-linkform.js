import React from 'react';
import { shallow } from 'enzyme';
import NewLinkForm from '../js/linkform';

//assertions come from Jest.
//Mocks and matchers come from enzyme

describe("NewLinkForm Component", () => {
  let mockHandleSubmitFn = jest.fn();

  it ("Should contain a single form element", () => {
    let component = shallow(<NewLinkForm submitFunction={mockHandleSubmitFn}/>);
    expect(component.type()).toEqual("form");
  });

  it ("Should call handleSubmit when submit button clicked", () => {
    let component = shallow(<NewLinkForm submitFunction={mockHandleSubmitFn}/>);
    component.find({name: 'submit'}).simulate('click');
    expect(mockHandleSubmitFn).toHaveBeenCalled();
  });

  it ("Should update the state of link on change", () => {
    let component = shallow(<NewLinkForm submitFunction={mockHandleSubmitFn}/>);
    let test_val = 'http://foo.bar';
    component.find({name: 'link'}).simulate('change',
      {target: {name: 'link', value: test_val}});
    expect(component.state('link')).toEqual(test_val);
  });

  it ("Should update the state of linktext on change", () => {
    let component = shallow(<NewLinkForm submitFunction={mockHandleSubmitFn}/>);
    let test_val = 'an example link text';
    component.find({name: 'linktext'}).simulate('change',
      {target: {name: 'linktext', value: test_val}});
    expect(component.state('linktext')).toEqual(test_val);
  });

  it ("Should have a single link object in state", () => {
    let component = shallow(<NewLinkForm submitFunction={mockHandleSubmitFn}/>);
    let test_linktext_val = " An example link text";
    let test_link_val = "https://example.com";
    let test_obj = {"link": test_link_val, "linktext": test_linktext_val};

    component.find({name: 'linktext'}).simulate('change',
      {target: {name: 'linktext', value: test_linktext_val}});
    component.find({name: 'link'}).simulate('change',
      {target: {name: 'link', value: test_link_val}});
    expect(component.state()).toEqual(test_obj);
  });
});
