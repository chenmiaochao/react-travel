import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { HomePage } from './pages'
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Route exact path="/" component={HomePage}/>
        <Route path="/signIn" render={()=> <h1>登录页面</h1>} />
      </BrowserRouter>
    </div>
  );
}

export default App;
