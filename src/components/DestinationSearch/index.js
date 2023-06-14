import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const {destinationsList} = this.props
    const searchReasult = destinationsList.filter(each =>
      each.name.includes(searchInput),
    )
    return (
      <div className="container">
        <div className="container-card">
          <h1 className="heading">Destination Search</h1>
          <div className="form">
            <input
              type="search"
              className="search"
              placeholder="search"
              onChange={this.onChangeInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="icon"
            />
          </div>
        </div>

        <ul className="list-container">
          {searchReasult.map(eachUser => (
            <DestinationItem userDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
