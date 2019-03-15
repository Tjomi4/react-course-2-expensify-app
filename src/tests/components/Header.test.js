/**
 * @jest-environment node
 */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/HeaderPage';

// react test renderer

test('should render Header correctly', () => {
  const wrapper = shallow(<Header/>);
  expect(wrapper).toMatchSnapshot();
});




