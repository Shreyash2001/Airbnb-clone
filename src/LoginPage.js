import { Button, CircularProgress, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { loginUser } from './actions/userActions';
import "./LoginPage.css"

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = React.useState(false);


    const history = useHistory()
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, loading, error} = userLogin

    const submitHandler = (e) => {
        e.preventDefault()
        setOpen(true)
        dispatch(loginUser(email, password))
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      }

    useEffect(() => {
       if(userInfo){
           history.push("/")
       } 
    }, [userInfo, history])

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
    return (
        <div className="loginPage">
            <div className="loginPage__info">
                <form onSubmit={submitHandler}>
                    <h2>Sign in & Host your Place</h2>
                    <div className="loginPage__content">
                    {loading && <CircularProgress />}
                    {error && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{error}</Alert></Snackbar>}
                    <label>Email</label>
                    <input type="email" placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit">Login</Button>
                    <p>Don't have an account?{" "}<Link to="/register">Register here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
