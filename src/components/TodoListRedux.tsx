import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { addTodo, removeTodo } from "../features/todos/todoActions";


const TodoListRedux: React.FC = () => {
    const [todoText, setTodoText] = useState("");
    const todos = useSelector((state: RootState) => state.todos);

    const dispatch: AppDispatch = useDispatch();

    const emojiMap: { [key: string]: string } = {
        eat: "🍔",
        sleep: "💤",
        code: "👨‍💻",
        run: "🏃‍♂️",
        game: "🎮",
        travel: "✈️",
    };

    const handleAddTodo = () => {
        const mapText = emojiMap[todoText.toLowerCase()] || todoText;
        if (mapText.trim()) {
            dispatch(addTodo(mapText));
            setTodoText("");
        }
    };

    const handleRemoveTodo = (id: number) => {
        dispatch(removeTodo(id));
    };
    
    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    }

    return (
        <div>
            <em>Make with Redux Toolkit</em>
            <h1>Emoji Todo List</h1>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                onKeyDown={(e) => {keyDownHandler(e)}}
                placeholder="Enter a todo, then hit enter!"
            />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} onClick={() => handleRemoveTodo(todo.id)}>
                        {todo.text}
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default TodoListRedux;