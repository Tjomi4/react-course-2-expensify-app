/**
 * @jest-environment node
 */
import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('filtersReducers', () => {
  const state = filterReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate:moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('setSortByAmount', () => {
  const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('setSortByDate', () => {
  const defaultState = {
    text: '', 
    sortBy: 'amount', 
    startDate: undefined, 
    endDate: undefined
  };
  const action = {type: 'SORT_BY_DATE'};

  const state = filterReducer(defaultState, action);
  expect(state.sortBy).toBe('date');
});

test('setTextFilter', () => {
  const text = 'This is my text';
  const state = filterReducer(undefined, {type: 'SET_TEXT_FILTER', text});
  expect(state.text).toBe(text);
});
test('setStartDate', () => {
  const startDate = moment();
  const state = filterReducer(undefined, {type: 'SET_START_DATE', startDate});
  expect(state.startDate).toEqual(startDate);
});
test('setEndDate', () => {
  const endDate = moment();
  const state = filterReducer(undefined, {type: 'SET_END_DATE', endDate});
  expect(state.endDate).toEqual(endDate);
});