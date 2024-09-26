import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      userName: e.target.value,
    });
  }

  handlePasswordChange(e){
   
   this.setState({
     password: e.target.value,

   });


  }

  handleSubmit(){
    alert(this.state.userName + this.state.password)


  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <h1>{this.state.userName}</h1>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Login;
