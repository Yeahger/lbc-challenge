import { connect } from 'react-redux'
import { getMessages } from '../../store/actions/message';
import Messages from './Messages';

const mapStateToProps = state => ({
  dataReceived: state.messagesReducers.dataReceived,
  messages: state.messagesReducers.messages,
});

const mapDispatchToProps = dispatch => ({
  getMessages: () => dispatch(getMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages)