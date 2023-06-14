// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {userDetails} = this.props
    const {name, imgUrl} = userDetails
    return (
      <li className="card">
        <img src={imgUrl} className="img" alt={name} />
        <p className="heading">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
