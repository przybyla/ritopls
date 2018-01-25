import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Summoner extends Component {
  porps: PropsType;

  render() {
    const { getChampionMastery, getRecentHistory } = this.props;
    return (
      <div>
        <button onClick={() => getChampionMastery()}> CHAMPION MASTERY </button>
        <button onClick={() => getRecentHistory()}> MATCH HISTORY </button>
      </div>
    );
  }
}

const mapStateToProps = ({ summoner }: any) => ({
  summoner: summoner.toJS()
});

export default connect(mapStateToProps, {
  ...actions
})(Summoner);
