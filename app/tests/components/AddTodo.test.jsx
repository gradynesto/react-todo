var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo prop with valid data', () => {
        var todoText = 'Check mail'
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);

    });

    it('should not call onAddTodo prop with valid data', () => {
        var todoText = ''
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();

    });

/*     it('should render one Todo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'Do something'
        }, {
            id: 2,
            text: 'Check mail'
        }];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    }); */
});