export function AddTodo(val) {
  return { type: 'add', payload: val };
}

export function AddCheck(val) {
  return { type: 'check', payload: val };
}

export function Delete(val) {
  return { type: 'delete', payload: val };
}

export function AllTodo() {
  return { type: 'alltodo' };
}

export function ActiveTodo() {
  return { type: 'activetodo' };
}

export function CompletedTodo() {
  return { type: 'completedtodo' };
}
