const ADD_TODO = 'todo/ADD_TODO' as const;
const DELETE_TODO = 'todo/DELETE_TODO' as const;
const UPDATE_TODO_STATE = 'todo/UPDATE_TODO_STATE' as const;
const FILTER_TODO = 'todo/FILTER_TODO' as const;

export interface AddTodoPayload {
  id: string;
  text: string;
  state: string;
}

export const addTodo = (payload: AddTodoPayload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodoState = (id: string, status: string) => ({
  type: UPDATE_TODO_STATE,
  payload: { id, status },
});

export const filterTodo = (item: string) => ({
  type: FILTER_TODO,
  payload: item,
});

type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof updateTodoState>
  | ReturnType<typeof filterTodo>;

interface TodoState {
  todoList: AddTodoPayload[];
}

const todoState: TodoState = {
  todoList: [
    { id: '1', text: '책읽기', state: 'active' },
    { id: '2', text: '산책하기', state: 'completed' },
  ],
};

function todoReducer(state = todoState, action: TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            text: action.payload.text,
            state: action.payload.state,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: [...state.todoList.filter((t) => t.id !== action.payload)],
      };
    case UPDATE_TODO_STATE:
      return {
        ...state,
        todoList: [
          ...state.todoList.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, state: action.payload.status }
              : { ...todo },
          ),
        ],
      };
    case FILTER_TODO:
      console.log('action.payload.item:', action.payload);
      if (action.payload === 'all')
        return {
          ...state,
          todoList: [...state.todoList],
        };
      return {
        ...state,
        todoList: [...state.todoList.filter((t) => t.state === action.payload)],
      };
    default:
      return state;
  }
}

export default todoReducer;
