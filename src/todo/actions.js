//action and action creator for create todo
export const CREATE_TODO = "CREATE_TODO";
export const createTodo = text => ({
    type : CREATE_TODO,
    payload : {text},
});


//action and action creator for Remove todo
export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = text => ({
    type : REMOVE_TODO,
    payload :{text},

});

//action and action creator for MARK TODO todo
export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markToDoAsCompleted = text => ({
    type : MARK_TODO_AS_COMPLETED,
    payload :{text},

});