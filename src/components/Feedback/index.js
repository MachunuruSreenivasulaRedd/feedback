import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {clicked: false}

  onFeed = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }))
  }

  render() {
    const {resources} = this.props
    const {loveEmojiUrl, emojis} = resources
    const {clicked} = this.state
    console.log(clicked)
    const feedback = (
      <div className="container">
        <img src={loveEmojiUrl} alt="name" />
        <p className="salutation">Thank you</p>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
    const open = (
      <div className="container">
        <h1>How satisfied are you with our customer support performance</h1>
        {emojis.map(item => (
          <button type="button" onClick={this.onFeed}>
            <img src={item.imageUrl} alt="im" />
          </button>
        ))}
      </div>
    )

    return (
      <div>
        ({clicked} ? {open} : {feedback})
      </div>
    )
  }
}

export default Feedback
