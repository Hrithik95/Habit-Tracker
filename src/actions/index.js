
/****************************Action Types ******************************/
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';



/**************************************** Action Creator *************************************/

export const addTask = (task) => {
    return ({
        type: ADD_TASK,
        payload: task
    });
}

export const updateTask = (status, id) => {
    return ({
        type: UPDATE_TASK,
        payload: {
            id: id,
            status: status
        }
    })
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}