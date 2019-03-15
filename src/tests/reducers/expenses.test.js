/**
 * @jest-environment node
 */
import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('expensesReducer', () => {
  const state =expensesReducer(undefined, {type:'@@INIT'});
  expect(state).toEqual([]);
});

test('removeExpenseById', ()=> {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('shouldNotremoveExpenseById', ()=> {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('addExpense', ()=> {
  const action = {
    type: 'ADD_EXPENSE',    
    expense: {
      id: '4',
      description: 'Coffie',
      note: '',
      amount: 1950,
      createdAt: 10
    }    
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});
test('editExpenseById', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note: 'edited'
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('edited');
});
test('shouldNoteditExpenseById', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note: 'edited'
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

