import Done from '../components/Done';
import {connect} from 'react-redux'
import {DropTarget} from 'react-dnd';
import {flow} from "lodash";
import {bindActionCreators} from "redux";
import {moveCard, removeCard} from "../actions/MoveCard";

const cardTarget = {
  drop(props, monitor) {
    const dropEvent = monitor.getItem();
    dropEvent.moveCard(dropEvent.anime, "done");
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
    done: moveCardReducer.done,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    moveCard,
    removeCard
  }, dispatch)
}

export default flow(connect(mapStateToProps, mapDispatchToProps),DropTarget("Card", cardTarget, collect))(Done);
