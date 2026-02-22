import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
  test('renders TodoList component and initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: 'New Test Item' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Test Item')).toBeInTheDocument();
  });

  test('toggles a todo completion status', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    const listItem = todoText.closest('li');

    // Toggle to completed
    fireEvent.click(todoText);
    expect(listItem).toHaveStyle('text-decoration: line-through');

    // Toggle back to incomplete
    fireEvent.click(todoText);
    expect(listItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText(/Delete/i)[0];

    fireEvent.click(deleteButton);
    expect(todoText).not.toBeInTheDocument();
  });
});