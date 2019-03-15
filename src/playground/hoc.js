// Higher Order Component - A component that renders another component
// Reuse code
// Render hijacking
// PRop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Ths info is : {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdminProp && <p>This is privet info please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requerAutentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated && <p>This is privet info please don't share!</p>}
      {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please LogIn!</p>}
    </div>
  );
};

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requerAutentication(Info);

//ReactDOM.render(<AdminInfo isAdminProp={true} info="There are the details" />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));
