import {DragSource} from "react-dnd";
import Card from "../components/Card"

const cardSource = {
  beginDrag(props) {
    return props;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

export default DragSource("Card", cardSource, collect)(Card);
