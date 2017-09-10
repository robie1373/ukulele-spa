import React from 'react';
import { shallow } from 'enzyme';
import ToDoList from '../js/todo';

describe("ToDoList Component", () => {
  let component = shallow(<ToDoList />);

  it("should contain a single section", () => {
    expect(component.type()).toEqual("section");
  });
});
