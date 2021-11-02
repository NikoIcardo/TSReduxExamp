import React, {Component} from 'react'; 
import Button from './CounterButton';


class HomePage extends Component {
  render = () => (
    <div>
      <Button color={'lightgreen'}>Increment</Button>
    </div>
  )
}

export default HomePage; 