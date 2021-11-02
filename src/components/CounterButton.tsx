import React, {Component, PropsWithChildren} from 'react'; 

interface ButtonProps {
  color: string, 
  handleClick: () => void,
}

class Button extends Component<PropsWithChildren<ButtonProps>> {
  render = () => (
    <span onClick={this.props.handleClick} style={{cursor: 'pointer', backgroundColor: this.props.color, margin: '20px', padding: '10px'}}>
      {this.props.children}
    </span>
  )
}

export default Button; 