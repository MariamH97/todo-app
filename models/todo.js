const { v4: uuidv4 } = require('uuid');

class Todo {
    constructor(title) {
        this.id = uuidv4(); // Unique ID
        this.title = title; // Task title
        this.completed = false; // Task status
    }
}

module.exports = Todo;