import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LineFormer from '../../components/MainFormComponent/LineFormerComponent'
import TimeLine from '../../components/MainFormComponent/TimeLineComponent'

class MainForm extends Component {
  static propTypes = {

  }

  render() {
    const { lineFormer, allTime } = this.props.mainForm
    return (<div
      className="form-Manupalation"
    >
      <div className="data-set">
        <form id="mainForm">
          {lineFormer.map((elem, idx) => <LineFormer
            handle={this.showModal}
            key={idx}
            elem={elem}
            allTime={allTime}
          />
            )}
        </form>
        <TimeLine
          distance={this.props.distance}
          time={this.props.time}
          allTime={allTime}
        />
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({ mainForm: state.mainFormReducer })

export default connect(mapStateToProps)(MainForm)
