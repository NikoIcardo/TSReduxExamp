import React, {Component} from 'react'; 
import Button from './CounterButton';


class HomePage extends Component {
  render = () => (
    <div style={{textAlign: 'center', marginTop: '40px', fontSize: '2rem'}}>
      <span>0</span>
      <Button color={'lightgreen'}>Increment</Button>
      <Button color={'orange'}>Decrement</Button>
    </div>
  )
}

export default HomePage; 