import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (<header>
            <div className='logo'> HomeVibes.com </div>
            <nav>
            <a href="#">About Us</a>
            <a href="#">Login</a>
            <a href="#" className='register-btn'>Register</a>
            </nav>
            
            </header>)
  }
}




