import Counter from '../counter';
import React from 'react';
import { shallow } from 'enzyme';

describe('counter', () => {
  let beginningCount;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
    beginningCount = wrapper.instance().state.count;
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

<<<<<<< HEAD
  it('adds to the count when the + button is clicked', () => {
=======
  it('adds to the count when the + button is pressed', () => {
>>>>>>> add jest and enzyme
    wrapper.instance().incrementCount();

    expect(wrapper.instance().state.count).toBe(beginningCount + 1);
  });

<<<<<<< HEAD
  it('subtracts to the count when the - button is clicked', () => {
=======
  it('subtracts from the count when the - button is pressed', () => {
>>>>>>> add jest and enzyme
    wrapper.instance().decrementCount();

    expect(wrapper.instance().state.count).toBe(beginningCount - 1);
  });
});
