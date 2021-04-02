import PropTypes from 'prop-types'
Clock.propTypes={
    
    basicObject:PropTypes.object,
    numbers:PropTypes.objectOf(PropTypes.numbers),
    message:PropTypes.instanceOf(message),
    contactList:PropTypes.shape({
        name:PropTypes.string,
        phone:PropTypes.string
    })
}