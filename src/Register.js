import { Button, CircularProgress, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { registerUser } from './actions/userActions';
import "./Register.css"

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch()
    const history = useHistory()

    const userRegister = useSelector(state => state.userRegister)
    const {loading, error} = userRegister

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      }


    useEffect(() => {
        if(userInfo) {
            history.push("/")
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        setOpen(true)
        dispatch(registerUser(name, email, password))

    }
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    return (
        <div className="register">
            <div className="register__info">
                <form onSubmit={submitHandler}>
                    <h2>Book unique homes and experiences</h2>
                    <div className="register__content">
                    {error && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{error}</Alert></Snackbar>}
                    <label>Name</label>
                    <input type="text" placeholder="  Name" onChange={(e) => setName(e.target.value)} required/>
                    <label>Email</label>
                    <input type="email" placeholder="  Email" onChange={(e) => setEmail(e.target.value)} required/>
                    <label>Password</label>
                    <input type="password" placeholder="  Password" onChange={(e) => setPassword(e.target.value)} required/>
                    <Button type="submit">Register</Button>
                    <p>Already have an account?{" "}<Link to="/login">Sign in</Link></p>
                    {loading && <CircularProgress style={{color:"#ff7779"}} />}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
