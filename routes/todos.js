const express = require('express');
const { getTodos, addTodo, updateTodo, deleteTodo } = require('../controllers/todosController');
const router = express.Router();

// Routes
router.get('/', getTodos);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
