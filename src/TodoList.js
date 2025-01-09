import TodoListRow from "./TodoListCard.js";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function TodoList() {

    const [tasks, setTasks] = useState([
        { id: 1, text: "Это первая заметка" },
        { id: 2, text: "Это вторая заметка" },
        { id: 3, text: "Это третья заметка" }
    ]);

    const [currentTask, setCurrentTask] = useState();

    const onDelete = (event) => {
        event.preventDefault();
        let currentId;
        for (let index = 0; index < tasks.length; index++) {
            const element = tasks[index];
            if (event.target.id == element.id) {
                currentId = index;
            }
        };
        let newComments = [...tasks];
        newComments.splice(currentId, 1);
        setTasks(newComments);
    };

    const onAdd = (event) => {
        event.preventDefault();
        let maxId = -1;
        tasks.forEach(element => {
            if (element.id > maxId) {
                maxId = element.id;
            }
        });
        setTasks([...tasks, { id: maxId + 1, text: currentTask }]);
    };

    const onChange = (event) => {
        setCurrentTask(event.target.value);
    };


    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 300,
                    height: 150,
                },
            }}
        >
            {tasks.map((comment) => <Paper elevation={0}><TodoListRow key={comment.id} comment={comment} onDelete={onDelete} /></Paper>)}
            <Paper elevation={0}>
                <TextField
                    variant="standard"
                    onChange={onChange}
                />
                <Button variant="contained" onClick={onAdd}>Добавить заметку</Button>
            </Paper>
        </Box>
    );
}

export default TodoList;