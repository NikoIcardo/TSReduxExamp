import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Dispatch } from 'redux'; 
import { AppState } from './store/rootStore'; 
import { incrementCount, decrementCount } from './store/counter/CounterActions'; 
import HomePage from './components/HomePage'; 

interface AppProps {
  increment: () => void, 
  decrement: () => void, 
}

const mapStateToProps = (state: AppState) => ({
  count: state.counter.count
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  increment: () => dispatch(incrementCount()), 
  decrement: () => dispatch(decrementCount()),
});

// mapDispatchToProps

class App extends Component<AppProps, AppState> {
  render = (): JSX.Element => (
    <HomePage {...this.props} />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
