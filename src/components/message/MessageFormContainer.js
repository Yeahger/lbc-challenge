import { connect } from 'react-redux'
import { saveMessage } from '../../store/actions/message';
import MessageForm from './MessageForm';

const mapDispatchToProps = dispatch => ({
  saveMessage: (isPublic, username, text) => dispatch(saveMessage(isPublic, username, text))
});

export default connect(null, mapDispatchToProps)(MessageForm)