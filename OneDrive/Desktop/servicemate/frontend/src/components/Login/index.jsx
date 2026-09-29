import {useState} from "react"
import {Link} from "react-router-dom"
import "./index.css"

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const submitForm = async e => {
    e.preventDefault()

    const userDetails = {
      email,
      password
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetails)
    }

    const response = await fetch("http://localhost:5000/login", options)
    const data = await response.json()

    console.log(data)

    if (response.ok) {
      alert("Login Successful")
    } else {
      alert(data.message)
    }
  }

  return (
    <div className="login-container">
      <form className="form" onSubmit={submitForm}>
        <h2>ServiceMate Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p>
          Don't have account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login