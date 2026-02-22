import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
  // 1. Test Initial Render
  test('renders the initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  // 2. Test Adding Todos
  test('adds a new todo item to the list', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  // 3. Test Toggling Todos
  test('toggles the completion status of a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    const listItem = todoItem.closest('li');

    // Toggle to completed (adds line-through)
    fireEvent.click(todoItem);
    expect(listItem).toHaveStyle('text-decoration: line-through');

    // Toggle back to not completed
    fireEvent.click(todoItem);
    expect(listItem).toHaveStyle('text-decoration: none');
  });

  // 4. Test Deleting Todos
  test('removes a todo item when the delete button is clicked', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    const deleteButtons = screen.getAllByText(/Delete/i);

    // Delete the first todo
    fireEvent.click(deleteButtons[0]);
    expect(todoItem).not.toBeInTheDocument();
  });
});