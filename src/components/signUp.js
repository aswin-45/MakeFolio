import React from "react";
import Navbar from "./navbar";
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {  
      fields: {},   
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);  
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Your Form has been submitted successfully.");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }
    
    if (typeof fields["password"] !== "undefined") {
        if (fields["password"].length < 8) {
            formIsValid = false;
            errors["password"] = "*Please enter at least 8 characters.";
        }
        else if (fields["password"].match(/^(?=.*[a-zA-Z0-9!@#$%^&*()])/)){
            formIsValid = true;
            errors["password"]= "Password is Strong.";
        } 
        else if (!fields["password"].match(/^(?=.*[!@#$%^&*()])/)){
            formIsValid = true;
            errors["password"] = "Password is Good.";
        }
        else if (!fields["password"].match(/^(?=.*[0-9])/)){
            formIsValid = true;
            errors["password"] = "Password is Weak.";
        }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
    
  }

render() {
  return (
    <div>
        <Navbar/>
  <div id="main-registration-container">
   <div id="register">
      <h2 className="head">SignUp</h2>
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <br></br>
      <label> Username &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <br></br><br/>
      <input type="text" name="username" className="inputs" value={this.state.fields.username} onChange={this.handleChange} placeholder='Enter your username' />
      <br></br>
      <div className="errorMsg">{this.state.errors.username}</div>
      <br></br>
      <label>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</label>
      <br></br><br></br>
      <input type="email" name="emailid" className="inputs" value={this.state.fields.emailid} onChange={this.handleChange} placeholder='abc@company.xyz'  />
      <br></br>
      <br></br> 
       <div className="errorMsg">{this.state.errors.emailid}</div>
      <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</label>
      <br></br>
      <br/>
      
      <input type="password" name="password" className="inputs" value={this.state.fields.password} onChange={this.handleChange} placeholder='password'/>
      <br></br> 
      <div className="errorMsg">{this.state.errors.password}</div>
      <br></br>
      <input type="submit" className="button"  value="Register"/>
      </form>
  </div>
</div>
    </div>

    );
}
}

export default SignUp;