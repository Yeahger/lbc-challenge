import { connect } from 'react-redux'
import { getMessages } from '../../store/actions/message';
import { setVisibilityFilter } from '../../store/actions/messagesFilter';
import Messages from './Messages';
import { MessagesFilters } from '../../store/actions/messagesFilter';

const getFilteredMessages = (messages, filter) => {
  switch (filter) {
    case MessagesFilters.SHOW_ALL:
      return messages;
    case MessagesFilters.SHOW_PUBLIC:
      return messages.filter(message => message.isPublic);
    case MessagesFilters.SHOW_PRIVATE:
      return messages.filter(message => !message.isPublic);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  dataReceived: state.messages.dataReceived,
  messages: getFilteredMessages(state.messages.messages, state.messagesFilter),
});

const mapDispatchToProps = dispatch => ({
  getMessages: () => dispatch(getMessages()),
  setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages)