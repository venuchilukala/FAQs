import {Component} from 'react'
import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  showAnswer = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {isActive} = this.state
    const {questionText, answerText} = faqDetails
    const imageUrl = isActive ? minusImage : plusImage
    const altImage = isActive ? 'minus' : 'plus'
    return (
      <li>
        <div>
          <span className="que-img">
            <h1 className="question">{questionText}</h1>
            <button type="button" className="btn" onClick={this.showAnswer}>
              <img src={imageUrl} alt={altImage} />
            </button>
          </span>

          {isActive && (
            <>
              <hr />
              <p className="answer">{answerText}</p>{' '}
            </>
          )}
        </div>
      </li>
    )
  }
}

export default FaqItem
