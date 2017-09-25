import React from 'react'
import s from './ValveLineComponent.scss'

import PropTypes from 'prop-types'

const ValveLineComponent = props => {
  console.log('props', props);
  return(
  <div className="line-wraper">
    <div className="line-definition">
      <span>{props.elem.id + 1}</span>
    </div>
    <div className="time-box_keeper">
      <div className="time-box">
        { this.linesTemplate }
      </div>
    </div>
  </div>
)
}

ValveLineComponent.propTypes = {

}

export default ValveLineComponent
