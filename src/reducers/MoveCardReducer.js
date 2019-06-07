const initState = {
  todo: JSON.parse(localStorage.getItem("todo")) || [],
  doing:JSON.parse(localStorage.getItem("doing")) || [],
  done: JSON.parse(localStorage.getItem("done")) || [],
};

export default function moveCardReducer(state = initState, action) {
  switch (action.type) {
    case 'MOVE_CARD':
      if(action.place === "todo") {
        state.todo.push(action.data);
        localStorage.setItem("todo", JSON.stringify(state.todo));
      } else if(action.place === "doing"){
        state.doing.push(action.data);
        localStorage.setItem("doing", JSON.stringify(state.doing));
      } else if(action.place === "done"){
        state.done.push(action.data);
        localStorage.setItem("done", JSON.stringify(state.done));
      }
      return {
        ...state,
      };
    case 'REMOVE_CARD':
      if(action.place === "todo") {
        state.todo = state.todo.filter(function(data){
          return data !== action.data;
        });
        localStorage.setItem("todo", JSON.stringify(state.todo));
      } else if(action.place === "doing"){
        state.doing = state.doing.filter(function(data){
          return data !== action.data;
        });
        localStorage.setItem("doing", JSON.stringify(state.doing));
      } else if(action.place === "done"){
        state.done = state.done.filter(function(data){
          return data !== action.data;
        });
        localStorage.setItem("done", JSON.stringify(state.done));
      }
      return{
        ...state,
      };
    default:
      return state;
  }
}
