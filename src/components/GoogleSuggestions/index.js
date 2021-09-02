// Write your code here

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  searchInputEl = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <ul className="bg-container">
        <img
          className="google-logo"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />

        <div className="input-container">
          <input
            type="search"
            value={searchInput}
            className="input"
            onChange={this.searchInputEl}
            placeholder="Search Google"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-logo"
          />
        </div>
        {searchResults.map(eachItem => (
          <SuggestionItem
            suggestionData={eachItem}
            key={eachItem.id}
            updateSearchInput={this.updateSearchInput}
          />
        ))}
      </ul>
    )
  }
}

export default GoogleSuggestions
