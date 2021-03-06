import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import * as actions from '../actions';
import { MainWrapper, SearchWrapper } from './styled';

class Home extends Component {
  porps: PropsType;

  getSummonerPage = () => {
    this.props.getSummoner();
    this.props.history.push(`/summoner/${this.props.summoner.input}`);
  };

  render() {
    const { handleInputChange } = this.props;
    const { getSummonerPage } = this;
    return (
      <MainWrapper>
        <SearchWrapper>
          <TextField
            hintText="Enter username"
            onChange={e => handleInputChange(e.target.value)}
          />
          <FlatButton label="Search" onClick={() => getSummonerPage()} />
        </SearchWrapper>
      </MainWrapper>
    );
  }
}

const mapStateToProps = ({ summoner }: any) => ({
  summoner: summoner.toJS()
});

export default connect(mapStateToProps, {
  ...actions
})(Home);
