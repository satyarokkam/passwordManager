import NewPassword from '../NewPassword'

import './index.css'

const PasswordManager = () => (
  <div className="main-container">
    <div className="password-manager-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
        className="logo"
      />
      <div>
        <NewPassword />
      </div>
    </div>
  </div>
)
export default PasswordManager
