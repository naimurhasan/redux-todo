import * as Type from "../Action/Type";

const int = [];
const TodoReducer = (state = int, action) => {
  switch (action.type) {
    case Type.DELETE_TODO:
      let allData = [...state];
      let data = allData.filter((info) => info.id !== action.payload);
      return data;
    case Type.CREATE_TODO:
      let todo = [...state];
      todo.push(action.payload);
      return todo;
    case Type.UPDATE_TODO:
      let allTodo = [...state];
      let updateValue = allTodo.find((todo) => todo.id == action.payload.id);
      updateValue.text = action.payload.updateValue;
      updateValue.id = action.payload.id;
      allTodo.push(updateValue);
      return allTodo;
    default:
      return state;
  }
};
export default TodoReducer;

// import * as Type from '../Action/Type';
// const int = {
// 	id: '',
// };
// const createTodo = (state = int, action) => {
// 	switch (action.types) {
// 		case Type.CREATE_TODO:
// 			return {
// 				...state,
// 				id: action.payload,
// 				text: state.text,
// 				completed: false,
// 			};
// 		default:
// 			return state;
// 	}
// };
// export default createTodo;
