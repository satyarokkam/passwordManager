import './index.css'

const UserDetail = props => {
  const {eachUser, showPwd, onUserDelete} = props
  const {webName, userName, password, color, id} = eachUser
  const initial = webName.slice(0, 1)
  const pwd = showPwd ? (
    <p>{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
      alt="stars"
      className="stars-logo"
    />
  )
  const onDeleteUserDetails = () => {
    onUserDelete(id)
  }
  return (
    <li className="list-container">
      <h1 className="initial" id={color}>
        {initial}
      </h1>
      <div className="pwd-details">
        <p>{webName}</p>
        <p>{userName}</p>
        {pwd}
      </div>
      <button
        type="button"
        onClick={onDeleteUserDetails}
        className="delete-btn"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default UserDetail
