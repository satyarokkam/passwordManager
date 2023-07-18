import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import './index.css'
import ShowPassword from '../ShowPassword'

class NewPassword extends Component {
  state = {
    usersList: [],
    webName: '',
    userName: '',
    password: '',
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {webName, userName, password} = this.state
    const colorValue = Math.floor(Math.random() * 6)
    console.log(colorValue)
    const colorArrays = ['one', 'two', 'three', 'four', 'five', 'six']
    const newList = {
      id: uuidV4(),
      webName,
      userName,
      password,
      color: colorArrays[colorValue],
    }
    this.setState(prevState => ({
      usersList: [...prevState.usersList, newList],
      webName: '',
      userName: '',
      password: '',
    }))
  }

  websiteName = event => {
    //  console.log(event.target.value)
    this.setState({webName: event.target.value})
  }

  onUserName = event => {
    //  console.log(event.target.value)
    this.setState({userName: event.target.value})
  }

  onPassword = event => {
    // console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  onDelete = deleteId => {
    const {usersList} = this.state
    const updatedList = usersList.filter(each => each.id !== deleteId)
    this.setState({usersList: updatedList})
  }

  render() {
    const {usersList, webName, userName, password} = this.state
    console.log(usersList)
    return (
      <div className="main-container">
        <div className="NewPassword-Container">
          <form
            className="password-details-container"
            onSubmit={this.onSubmitDetails}
          >
            <h1 className="heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="icon"
              />

              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.websiteName}
                value={webName}
              />
            </div>

            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="username"
                className="icon"
              />

              <input
                type="text"
                placeholder="Enter UserName"
                onChange={this.onUserName}
                value={userName}
              />
            </div>

            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="icon"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.onPassword}
                value={password}
              />
            </div>
            <button type="submit" className="add-password-btn">
              ADD
            </button>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-image"
          />
        </div>
        <div>
          <ShowPassword usersList={usersList} onDelete={this.onDelete} />
        </div>
      </div>
    )
  }
}
export default NewPassword
