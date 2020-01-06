import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(Header);
