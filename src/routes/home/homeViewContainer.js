import { connect } from 'react-redux';
import { setNavbar } from 'actions/navbar';
import homeView from './homeView';

const mapActionCreators = {
  setNavbar,
};

export default connect(null, mapActionCreators)(homeView);
