/**
 * @jest-environment node
 */
import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount,  setStartDate, setEndDate } from '../../actions/filters';

test('setTextFilter', ()=> {
  const action = setTextFilter('abc');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'abc'
  });
});
test('setTextFilterDefault', ()=> {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});
test('sortByDate', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});
test('sortByAmount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT' 
  });
});
test('setStartDate', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});
test('setEndDate', () => {
  const action = setStartDate(moment(1000));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(1000)
  });
});