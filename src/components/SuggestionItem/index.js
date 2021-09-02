// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionData, updateSearchInput} = props

  const {suggestion} = suggestionData

  const getSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="each-list">
      <p className="desc"> {suggestion} </p>
      <img
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        onClick={getSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
