import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import { Main } from './main';
import './index.scss';
/**
 * Entry point
 */
export class App extends React.Component {
  /**
   * @return {void}
   */
  render() {
    return (
      <HashRouter>
        <Main/>
      </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
