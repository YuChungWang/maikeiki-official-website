import { connect } from 'react-redux';
import { simpleAction } from '../actions/simpleAction';
import Header from '../components/Header';

const mapStateToProps = state => {
  const {
    simpleReducer: { text },
  } = state;

  return {
    text,
  };
};

const mapDispatchToProps = dispatch => ({
  simpleAction: payload => dispatch(simpleAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
