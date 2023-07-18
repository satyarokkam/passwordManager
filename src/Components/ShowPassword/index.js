import './index.css'

import {Component} from 'react'

import UserDetail from '../UserDetails'

class ShowPassword extends Component {
  state = {
    checkboxValue: false,
    searchInputValue: '',
  }

  onClickShowPwd = event => {
    this.setState({checkboxValue: event.target.checked})
  }

  onUserDelete = id => {
    console.log('show password component')
    const {onDelete} = this.props
    onDelete(id)
  }

  searchWeb = event => {
    this.setState({searchInputValue: event.target.value})
  }

  render() {
    const {checkboxValue, searchInputValue} = this.state
    const {usersList} = this.props
    const userLength = usersList.length
    console.log(userLength)
    const displayHide = userLength !== 0 ? 'hide-container' : 'no-pwd-container'
    const showUserDetails = userLength === 0 ? 'hide-container' : ''
    const searchList = usersList.filter(each =>
      each.webName.includes(searchInputValue),
    )

    return (
      <div className="show-password-main-container">
        <div className="entered-password-details">
          <div className="div-1">
            <h1 className="heading-1">Your Passwords</h1>
            <p className="pwd-length">{userLength}</p>
          </div>
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              className="search-bar"
              placeholder="Search"
              onChange={this.searchWeb}
            />
          </div>
        </div>
        <div className="show-pwd-container">
          <input
            id="check"
            type="checkbox"
            className="checkbox"
            onClick={this.onClickShowPwd}
            value={searchInputValue}
          />
          <label htmlFor="check" className="show-pwd">
            Show passwords
          </label>
        </div>
        <div className={displayHide}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-pwd-image"
          />
          <p className="heading-3">No Passwords</p>
        </div>
        <div className={showUserDetails}>
          <ul className="unOrder-list-container">
            {searchList.map(each => (
              <UserDetail
                eachUser={each}
                key={each.id}
                showPwd={checkboxValue}
                onUserDelete={this.onUserDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default ShowPassword
