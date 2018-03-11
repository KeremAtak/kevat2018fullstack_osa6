import React from 'react'
import { notificationCreate } from './../reducers/notificationReducer'
import { connect } from 'react-redux'


class AnecdoteList extends React.Component {
  render() {
    const { anecdotes, filter } = this.props
    const filteredAnecdotes = anecdotes.filter(
      anecdote => {
        return anecdote.content.indexOf(filter) !== -1
      }
    )
    return (
      <div>
        <h2>Anecdotes</h2>
        {filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.dispatch(
                  { type: 'VOTE', id: anecdote.id }
                )
                this.props.dispatch(
                  notificationCreate(`you voted '${anecdote.content}'`)
                )
              }
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

export default connect(
  ( mapStateToProps )
)(AnecdoteList)

