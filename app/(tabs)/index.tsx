import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TodoProvider } from '../../context/TodoContext';
import AddTodo from '../../components/AddTodo';
import TodoList from '../../components/TodoList';

const TodoApp = () => (
  <TodoProvider>
    <View style={styles.container}>
      <AddTodo />
      <TodoList />
    </View>
  </TodoProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#ffffff', // white background
  },
});

export default TodoApp;
