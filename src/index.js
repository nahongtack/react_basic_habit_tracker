import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

ReactDOM.render(
  // js strict모드 사용할 수 있게 선언한 부분
  // 배포했을때는 사용되지 않는다.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
