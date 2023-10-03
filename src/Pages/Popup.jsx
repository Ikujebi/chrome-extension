// Popup.js
import React from 'react';
import ReactDOM from 'react-dom';
import ScreenRecorder from './ScreenRecorder';

const Popup = () => {
  return (
    <div>
      <ScreenRecorder/>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Popup />, document.getElementById('root'));
});


export default Popup;