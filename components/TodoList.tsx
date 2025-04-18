import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos, toggleTodo } = useContext(TodoContext);

  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <TouchableOpacity
          key={todo.id}
          onPress={() => toggleTodo(todo.id)}
          style={styles.todo}
        >
          <Text style={todo.completed ? styles.completed : styles.text}>
            {todo.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  todo: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
    color: '#000000',
  },
  completed: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TodoList;
