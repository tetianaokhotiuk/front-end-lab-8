import React from 'react';

class RegForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [1, 2, 3, 4],
      data: [],
      isToggled: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit() {
    const userInfo = {
      login: this.loginInput.value,
      pass: this.passInput.value
    };

    // this.setState();

  }

  render() {
    return (
      <div className = 'search'>
        <label>login
          <input type="text" placeholder = '  login' ref={item => {
            this.loginInput = item;
          }}/>
          <input type="password" placeholder = '  password' ref={item => {
            this.passInput = item;
          }}/>
          </label>
        <button type="submit">submit</button>
      </div>
    );
  }
}

export default RegForm;