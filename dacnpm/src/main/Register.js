
import React from 'react';
import {useState} from 'react';

function Register() {
    const[firstname, setfirstname]= useState("");
    const[lastname, setlastname] = useState("");
    const[username, setusername] = useState("");
    const[passwords, setPassword] = useState("");
    function register(e)
    {
        e.preventDefault();
        console.log("Firstname: " , firstname);
        console.log("Lastname: " , lastname);
        console.log("Username: ", username);
        console.log("Password: ", passwords);
    }
  return (
    <div class= "container">
        <form onSubmit = {register} class="row  needs-validation" novalidate>
            <div class="col-6 .col-sm-4 ">
                <label for="validationTooltip01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationTooltip01" onChange={(e) => {setfirstname(e.target.value);}}  required/>
                <div class="valid-tooltip">
                    Looks good!
                </div>
            </div>
            <div class="col-6 .col-sm-4 ">
                <label for="validationTooltip02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationTooltip02" onChange={(e) => {setlastname(e.target.value);}} required/>
                <div class="valid-tooltip">
                    Looks good!
                </div>
            </div>
            <div class="col-6 .col-sm-4 ">
                <label for="validationTooltipUsername" class="form-label">Username</label>
                <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" onChange ={(e)=> {setusername(e.target.value);}} required/>
                <div class="invalid-tooltip">
                        Please choose a unique and valid username.
                </div>
            </div>
            <div class="col-6 .col-sm-4 ">
                <label for="validationTooltip03" class="form-label">Password</label>
                <input type="text" class="form-control" id="validationTooltip03" onChange={(e) => {setPassword(e.target.value);}} required/>
                <div class="invalid-tooltip">
                    Please provide a valid city.
                </div>
            </div>
           
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}

export default Register