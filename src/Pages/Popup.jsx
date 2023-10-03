// Popup.js
import React from 'react';
import ReactDOM from 'react-dom';

const Popup = () => {
  return (
    <div>
      <h1>Hello from React Popup!</h1>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Popup />, document.getElementById('root'));
});


export default Popup;