import {connect} from 'react-redux'
import Search from '../components/Search'
import {changeValue} from '../actions/SearchAction'
import { bindActionCreators } from 'redux';
import {moveCard, removeCard} from '../actions/MoveCard'
import {flow} from "lodash";
import {DropTarget} from "react-dnd";

const cardTarget = {
  drop(props, monitor) {
    const dropEvent = monitor.getItem();
    dropEvent.removeCard(dropEvent.anime, dropEvent.place)
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

function mapStateToProps({searchReducer}) {
  return {
    inputValue: searchReducer.inputValue,
    data: searchReducer.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeValue,
    moveCard,
    removeCard
  }, dispatch)
}

export default flow(connect(mapStateToProps, mapDispatchToProps),DropTarget("Card", cardTarget, collect))(Search)
