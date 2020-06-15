import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    // login form state
    state = {
        creds: {
            username: "",
            password: ""
        }
    };
    // handler for typing in form
    handleChanges = e => {
        this.setState({
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value
            }
        })
    }
    // login function
    login = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", this.state.creds)
            .then(res => {
                console.log(res)
                // if statement for success? this might be taken care of by the server error. Will test.
                localStorage.setItem("token", res.data.payload)
                this.props.history.push("/protected")
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.creds.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.creds.password}
                        onChange={this.handleChanges}
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login