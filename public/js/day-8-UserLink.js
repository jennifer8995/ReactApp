import PropTypes from 'prop-types'
UserLink.propTypes={
    userWithName:(props,propName,componentName) =>{
        if(!props[propName] || !props[propName].name){
            return new Error("Invalid" + propName+":No name property defined for component " + componentName)
        }
    }
    
}