/**
 * @jest-environment node
 */
import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('ExpensesSummary component should render corectly with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

test('ExpensesSummary component should render corectly with multiple expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={5} expensesTotal={23500}/>);
  expect(wrapper).toMatchSnapshot();
});