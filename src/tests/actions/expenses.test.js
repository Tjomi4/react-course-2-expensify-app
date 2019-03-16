/**
 * @jest-environment node
 */
import configureMockStore  from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const creatMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should store databese', (done) => {
  const store = creatMockStore({});
  const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'this one is better',
    createdAt: 1000
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    const val = snapshot.val();
    expect(val).toEqual(expenseData);
    done();
  });
});

test('should store defaults to databese', (done) => {
  const store = creatMockStore({});
  const expenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    const val = snapshot.val();
    expect(val).toEqual(expenseData);
    done();
  });
});

// test('addExpenseDefault', () => {  
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       note: '',
//       amount:0,
//       createdAt: 0,
//       id: expect.any(String)
//     } 
//   })
// });