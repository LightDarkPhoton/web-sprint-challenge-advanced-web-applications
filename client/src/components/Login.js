import React, { useState }  from "react";
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const { push } = useHistory()

  const [newUser, setNewUser] = useState({
    credentials: {
      username: "",
      password: "",
    }
  });

  const handleChange = (e) => {
    setNewUser({
      credentials: {
        ...newUser.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const login = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post('http://localhost:5000/api/login',newUser.credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)

        push('/protected')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form onSubmit={login}>

        <input
          type="text"
          name="username"
          value={newUser.username}
          onChange={handleChange}
        >
        </input>

        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        >
        </input>

        <button>Log In</button>

      </form>
    </>
  );
};

export default Login;
