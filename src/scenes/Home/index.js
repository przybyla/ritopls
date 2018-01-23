import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
  porps: PropsType;

  componentDidMount = () => {
    this.props.getSummoner();
  };

  render() {
    return (
      <div>
        <button onClick={() => this.props.getChampionMastery()}> KLIK </button>
      </div>
    );
  }
}

const mapStateToProps = ({ summoner }: any) => ({
  summoner: summoner.toJS()
});

export default connect(mapStateToProps, {
  ...actions
})(Home);
