import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const ExpenseListItem = ( {dispatch, id, description, amount, createdAt} ) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>    
    <p>
    {numeral(amount / 100).format('$0,0.00')} 
    - 
    {moment(createdAt).format('MMMM Do, YYYY')}
    </p>      
  </div>
);

export default connect()(ExpenseListItem);