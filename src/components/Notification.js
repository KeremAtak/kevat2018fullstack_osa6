import React from 'react'
import { notificationCreate } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class Notification extends React.Component {

  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    setTimeout(() => 
      this.props.dispatch(notificationCreate(''))
    ,5000)
    
    return (
      <div style={style}>
        {this.props.notification}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(
  ( mapStateToProps )
)(Notification)
