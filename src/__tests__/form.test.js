jest.mock('../data/states-data');

import Form from '../form';
import React from 'react';
<<<<<<< HEAD
import { shallow } from 'enzyme';
=======
import { shallow, mount } from 'enzyme';
>>>>>>> add jest and enzyme

describe('form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('when a state is selected', () => {
    let mockPreventDefault;
    let mockEvent;
    let mockSubmit;
    let spy;

    beforeEach(() => {
      mockPreventDefault = jest.fn();
      mockSubmit = jest.fn();
      mockEvent = {
        preventDefault: mockPreventDefault,
      };
      window.alert = jest.fn();

      wrapper = shallow(<Form submit={mockSubmit} />);
    });

    it('updates state', () => {
<<<<<<< HEAD
      mockEvent = {
=======
      const mockEvent = {
>>>>>>> add jest and enzyme
        target: {
          value: 'California',
        },
      };

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state()).toEqual({ value: 'California' });
    });

<<<<<<< HEAD
    it('should call change handler when a state is selected with the correct param', () => {
=======
    it('should call handleChange on select with the correct params', () => {
>>>>>>> add jest and enzyme
      spy = jest.spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      mockEvent = {
        target: {
          value: 'New York',
        },
      };
      wrapper.find('select').simulate('change', mockEvent);
<<<<<<< HEAD

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it('should call submit handler when submitted', () => {
      spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
      wrapper.instance().forceUpdate();
      wrapper.find('form').simulate('submit', mockEvent);
=======
      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
    it('should call handleChange on select with the correct params', () => {
      spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
      wrapper.instance().forceUpdate();
      wrapper.find('form').simulate('submit', { preventDefault: () => {} });
>>>>>>> add jest and enzyme

      expect(spy).toHaveBeenCalled();
    });

    it('should call preventDefault', () => {
<<<<<<< HEAD
=======
      window.alert = jest.fn();

>>>>>>> add jest and enzyme
      wrapper.instance().handleSubmit(mockEvent);

      expect(mockPreventDefault).toHaveBeenCalled();
    });
  });
});
