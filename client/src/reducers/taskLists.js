export default (state = {lists: [], loading: false}, action) => {

  const taskList = state.lists.find(taskList => taskList.id === action.taskListId);
  const task = action.task 

  switch (action.type) {

    case 'FETCHING_TASKLISTS':
      console.log(action);
      return Object.assign({}, state, {loading: true})

    case 'FETCH_TASKLISTS':
      console.log(action);
      return Object.assign(
      	{}, {lists: action.tasks}, {loading: false}
      )

    case 'LOGOUT_SUCCESS':
    	return Object.assign({}, {lists: []}, {loading: true})

    case 'CHECKING_TASK':
      return Object.assign({}, state, {loading: true})

    case 'CHECK_TASK':
      taskList.tasks = taskList.tasks.map(task => task.id === action.taskId ? {...task, done: task.done === true ? false : true} : task)
      return Object.assign({}, {lists: state.lists.map(list => list.id === taskList.id ? taskList : list)}, {loading: false})

    case 'ADDING_TASK':
      return Object.assign({}, state, {loading: true})

    case 'ADD_TASK':
      taskList.tasks = taskList.tasks.concat(action.task)
      return Object.assign({}, {lists: state.lists.map(list => list.id === taskList.id ? taskList : list)}, {loading: false}) 

    case 'REMOVING_TASK':
      return Object.assign({}, state, {loading: true})

    case 'REMOVE_TASK':
      taskList.tasks = taskList.tasks.filter(task => task.id !== action.taskId);
      return Object.assign({}, {lists: state.lists.map(list => list.id === taskList.id ? taskList : list)}, {loading: false}) 

    case 'UPDATING_TASKLISTS':
      return Object.assign({}, state, {loading: true})    

    case 'UPDATE_TASKLISTS':
      return Object.assign({}, {lists: state.lists.map(list => list.id === action.taskListId ? action.updatedTaskList : list)}, {loading: false})

    case 'UPDATING_MONSTER':
      return Object.assign({}, state, {loading: true})

    case 'UPDATE_MONSTER':
      taskList.monster.level = action.monsterLevel;
      taskList.finished = true;
      return Object.assign({}, {lists: state.lists.map(list => list.id === action.taskListId ? taskList : list)}, {loading: false})

    case 'ADDING_TASKLIST':
      return Object.assign({}, state, {loading: true})

    case 'ADD_TASKLIST':
      return Object.assign({}, {lists: state.lists.concat(action.taskList)}, {loading: false}) 

    case 'DELETING_TASKLIST':
      return Object.assign({}, state, {loading: true})      

    case 'DELETE_TASKLIST':
      return Object.assign({}, {lists: state.lists.filter(list => list.id !== action.taskListId)}, {loading: false})   

    default: 
      return state;
  }
}