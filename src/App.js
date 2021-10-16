import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar';
import ActiveQuizes from './Pages/ActiveQuizes/ActiveQuizes';
import Auth from './Pages/Auth/Auth';
import QuizCreator from './Pages/QuizCreator/QuizCreator';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path="/" exact component={ActiveQuizes}/>
          <Route path="/auth" exact component={Auth}/>
          <Route path="/quiz-creator" exact component={QuizCreator}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
