import {useState} from "react"
import {Link} from "react-router-dom"
import "./index.css"

const Register = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const submitForm = async e => {
    e.preventDefault()

    const userDetails = {
      name,
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

    const response = await fetch("http://localhost:5000/register", options)
    const data = await response.json()

    console.log(data)

    if (response.ok) {
      alert("Registration Successful")
    } else {
      alert(data.message)
    }
  }

  return (
    <div className="login-container">
      <form className="form" onSubmit={submitForm}>
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e=>setName(e.target.value)}
        />

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

        <button type="submit">Register</button>

        <p>
          Already have account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register