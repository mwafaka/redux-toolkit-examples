
import React from 'react';
import { deleteTask } from "../redux/tasksSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const TodoList = () =>{
	const dispatch = useDispatch();
	const todos = useSelector((state)=>{
		return state.m;
	});
	const removeTask=(id)=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}
	return (
		<ul className="tasks-list">
			{todos.map((todo) => (
					<li className="task-item">
					<div>
					{todo.name}
					</div>
					<div>
						<button className="remove-task-button" onClick={()=>{
							removeTask(todo.id);
						}}>Delete</button>
					</div>
				</li>
				
			))}
		</ul>
	);
};
export default TodoList;