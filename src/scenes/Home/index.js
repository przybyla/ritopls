import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
  porps: PropsType;

  render() {
    const { handleInputChange, getSummoner } = this.props;
    return (
      <div>
        <input onChange={e => handleInputChange(e.target.value)} type="text" />
        <button onClick={() => getSummoner()}> Szukaj </button>
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
