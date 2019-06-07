import Doing from '../components/Doing';
import {connect} from 'react-redux'
import {DropTarget} from 'react-dnd';
import {flow} from "lodash";
import {bindActionCreators} from "redux";
import {moveCard, removeCard} from "../actions/MoveCard";

const cardTarget = {
  drop(props, monitor) {
    const dropEvent = monitor.getItem();
    dropEvent.moveCard(dropEvent.anime, "doing");
    dropEvent.removeCard(dropEvent.anime, dropEvent.place)
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

function mapStateToProps({moveCardReducer}) {
  return {
    doing: moveCardReducer.doing,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    moveCard,
    removeCard
  }, dispatch)
}

export default flow(connect(mapStateToProps, mapDispatchToProps),DropTarget("Card", cardTarget, collect))(Doing);
