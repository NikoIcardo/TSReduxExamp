import React, {Component, PropsWithChildren} from 'react'; 

interface ButtonProps {
  color: string
}

class Button extends Component<PropsWithChildren<ButtonProps>> {
  render = () => (
    <span style={{cursor: 'pointer', backgroundColor: this.props.color, margin: '20px', padding: '10px'}}>
      {this.props.children}
    </span>
  )
}

export default Button; 