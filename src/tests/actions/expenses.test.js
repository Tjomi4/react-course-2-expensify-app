/**
 * @jest-environment node
 */
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('removeExpense', () => {  
  const action = removeExpense({id:'123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('editExpense', () => {
  const action = editExpense('abc', {note:'abc'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc',
    updates: {
      note:'abc'
    }
  });
});

test('addExpense', () => {
  const expenseData = {
    description: 'My Bill',
    note: 'hi',
    amount:500,
    createdAt: 1000
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }  
  })
});

test('addExpenseDefault', () => {  
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount:0,
      createdAt: 0,
      id: expect.any(String)
    } 
  })
});