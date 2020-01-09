let id = -1;

function todoReducer(state = [], action) {
  var all = state;
  var active = state;
  var complete = state;
  switch (action.type) {
    case 'add':
      return state.concat({
        todoText: action.payload,
        isdone: false,
        id: ++id
      });
    case 'check':
      return state.map(e => {
        if (e.id == action.payload) {
          e.isdone = !e.isdone;
        }
        return e;
      });
    case 'delete':
      return state.filter(e => e.id !== action.payload);
    case 'alltodo':
      return state;
    case 'activetodo':
      return active.filter(e => e.isdone == false);
    case 'completedtodo':
      return complete.filter(e => e.isdone == false);

    default:
      return state;
  }
}

export default todoReducer;
