import React from 'react'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import { notificationCreate } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {


  handleSubmit = (e) => {
    e.preventDefault()
    console.log("anecdote: " + e.target.anecdote.value)
    const value = e.target.anecdote.value
    this.props.dispatch(
      anecdoteCreation(value)
    )
    this.props.dispatch(
      notificationCreate(`you added '${value}'`)
    )
    e.target.anecdote.value = ''
  }
  

   render() {

     return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

export default connect(
  ( mapStateToProps )
)(AnecdoteForm)
