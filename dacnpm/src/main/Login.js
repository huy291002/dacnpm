import React from 'react'
import {useState} from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
function Login() {
    const[username, setusername] = useState("");
    const[passwords, setPassword] = useState("");
    const navigate = useNavigate();
    const [gotohome, setGotohome] =useState(false);
    if (gotohome)
    {
        return <Navigate to ="/Home" />;
    }
    function login(e)
    {
        e.preventDefault();
        console.log("Username: ", username);
        console.log("Password: ", passwords);
        sessionStorage.setItem("isLogin", 'true');
        setGotohome(true);  
    }
  return (
    <div class= "container">
        <form onSubmit = {login} class="row  needs-validation" novalidate>
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
                    Please provide a valid password.
                </div>
            </div>
           
            <div class="col-12">
                <button class="btn btn-primary" type="submit"  >Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login