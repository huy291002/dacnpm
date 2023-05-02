import React from 'react'
import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import EditIcon from '@mui/icons-material/Edit';
import PasswordIcon from '@mui/icons-material/Password';
import './Login.css';

function Login() {
    const [username, setusername] = useState("");
    const [passwords, setPassword] = useState("");
    const navigate = useNavigate();
    const [gotohome, setGotohome] = useState(false);
    if (gotohome) {
        return <Navigate to="/Home" />;
    }
    function login(e) {
        e.preventDefault();
        console.log("Username: ", username);
        console.log("Password: ", passwords);
        sessionStorage.setItem("isLogin", 'true');
        setGotohome(true);
    }
    return (
        <div class="bg">
            <div className='flex'>
                <div className='sizeofinput'>
                    <form onSubmit={login} className='form' class="row  needs-validation" novalidate>
                        <div class="text-center">
                            <LoginIcon></LoginIcon> LOGIN
                             
                        </div>
                        <div >
                            
                            <label for="validationTooltipUsername" class="form-label">Username</label>
                            <input style={{ width: "300px" }} type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" onChange={(e) => { setusername(e.target.value); }} required />
                            <div class="invalid-tooltip">
                                Please choose a unique and valid username.
                            </div>
                        </div>
                        <div >
                            <PasswordIcon></PasswordIcon>
                            <label for="validationTooltip03" class="form-label">Password</label>
                            <input style={{ width: "300px" }} type="text" class="form-control" id="validationTooltip03" onChange={(e) => { setPassword(e.target.value); }} required />
                            <div class="invalid-tooltip">
                                Please provide a valid password.
                            </div>
                        </div>

                        <div class="col-12">
                            <br></br>
                            <div class="text-center">
                                <button class="btn btn-primary " type="submit"  >Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login