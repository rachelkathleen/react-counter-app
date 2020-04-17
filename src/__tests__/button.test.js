<<<<<<< HEAD
import Button from '../button';
import React from 'react';
import { shallow } from 'enzyme';

let mockProps = {
  action: jest.fn(),
  title: 'something',
};

test('it works', () => {
  expect(true).toEqual(true);
});

it('renders correctly', () => {
  let wrapper = shallow(<Button {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
=======
import Button from "../button";
import React from "react";
import { shallow } from "enzyme";

test("it works", () => {
  expect(true).toEqual(true);
});

it("renders correctly", () => {
  let wrap = shallow(<Button />);
  expect(wrap).toMatchSnapshot();
>>>>>>> add jest and enzyme
});
