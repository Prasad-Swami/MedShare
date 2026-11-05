import { useState, type SubmitEvent } from 'react'
import '../styles/Register.css'

function Register() {

  // Store the values entered by the user
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('Donor')

  // Handle form submission
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    alert('Registration form submitted successfully!')
  }

  return (
    <div className="register-container">

      <div className="register-card">

        <h1>Create Your Account</h1>
        <p className="register-subtitle">
          Join MedShare and make a difference.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number (Optional)</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Register As</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Donor">Donor</option>
              <option value="Recipient">Recipient</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="register-button">
            Create Account
          </button>

        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>

      </div>

    </div>
  )
}

export default Register