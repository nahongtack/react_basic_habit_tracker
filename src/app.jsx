import React from 'react';
import './app.css';

function App() {
  const name = 'hongtaek';
  return (
    // React.Fragment = <> 이며 return할 때 여러개 태그를 묶어서 처리한다.
    // jsx는 html과 달리 문장안에 js코드를 처리할 수 있기때문에 {}를 추가해서 처리한다.
    <>
      <h1>Hello :)</h1>
      {name && <h1>Hello! {name}</h1>}
      {['❤','🍩'].map(item => (
        <h1>{item}</h1>        
      ))}
    </>
  );
}

export default App;
