/**
 * @jest-environment node
 */
import selectExpensesTotal from '../../selectors/expenses-total'
import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should return zero', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should corectly add single expense', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('should corectly add multiple expense', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(6645);
});

