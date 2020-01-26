import { connect } from 'react-redux';
import fetch_actions from '../../redux/actions';
import GitProfile from '../../components/GitProfile';

const mapStateToProps = ({gitdata}) => ({
    gdata: gitdata.data
});

export default connect(
    mapStateToProps, {
    fetch_actions
})(GitProfile);
