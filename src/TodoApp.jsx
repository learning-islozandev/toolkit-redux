import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"


/**
|--------------------------------------------------
| Import React core components
|--------------------------------------------------
*/
export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1)

    // const { data: todos[], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    const nextTodo = () => setTodoId(todoId + 1);

    const prevTodo = () => {
        if (todoId > 1) {
            setTodoId(todoId - 1);
        }
    }

    return (
        <>
            <h4>Todo - RTK Query</h4>
            <hr />

            {isLoading && <b>Loading...</b>}

            <pre>
                {
                    JSON.stringify(todo, null, 2)
                }
            </pre>

            {/* <ul>
                {todos?.map((todo) => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? "DONE" : "PENDING"} </strong>
                        {todo.title}
                    </li>
                ))}
            </ul> */}
            <button onClick={prevTodo}>Preview Todo </button>
            <button onClick={nextTodo}>Next Todo </button>
        </>
    )
}
