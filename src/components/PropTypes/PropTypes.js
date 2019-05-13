import React from 'react'
import PropTypes from 'prop-types';


function PropTypesExample(props){
    return(
        <div>
            <h1 style={{ fontSize: '70px', color: 'cadetBlue' }}>
            Hello, {props.name}
            </h1>

        </div>
    )
}
PropTypesExample.propTypes={
name: PropTypes.array
}
export default PropTypesExample;