const Todo = require('../models/todo');

// Mock Database
const todos = [];

// Get all todos
const getTodos = (req, res) => {
    res.status(200).json(todos);
};

// Add a new todo
const addTodo = (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    const newTodo = new Todo(title);
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

// Update a todo
const updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const todo = todos.find((t) => t.id === id);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.status(200).json(todo);
};

// Delete a todo
const deleteTodo = (req, res) => {
    const { id } = req.params;

    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    todos.splice(index, 1);
    res.status(204).send();
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };