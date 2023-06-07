import './App.css';
import {Component} from 'react'
import Todo from './components/Tood';
import InputComp from './components/InputComp';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      todoList : [
        {id:1 , todo:'요리하기'},
        {id:2 , todo:'공부하기'},
        {id:3 , todo:'게임하기'},
      ]
    }
  }

  addTodo = (todo) => {
    console.log('App add');

      const todoId = this.state.todoList.length + 1;
      console.log(todoId)
      const todoObj = {id: todoId, todo: todo}

      const concatTodoList = this.state.todoList.concat(todoObj);

      this.setState({
        todoList : concatTodoList
      })
  }

  modifyTodo = (id, todo) => {
    console.log("modify App");

    const todoObj = {id: id, todo : todo};
    //변경해서 합치기
    const modifyList = this.state.todoList.map((data) => (
      data.id === todoObj.id ? {...data, ...todoObj} : data
    ));

    this.setState({
      todoList : modifyList
    })
  }

  deleteTodo = (id) => {
      console.log("delete App")
    
      const filterTodoList = this.state.todoList.filter(
        (data)=> (data.id !== id)
      );

      this.setState({
        todoList : filterTodoList
      })
    }

  render(){
    const result = this.state.todoList.map((data) => (
        <Todo key={data.todo} id={data.id} todo={data.todo}  
          modifyTodo={this.modifyTodo} deleteTodo={this.deleteTodo} />
    ))

    return(
      <div id='App'>
        <h1 className='header'>Todolist</h1>
        <div className='todolist'>
          <InputComp addTodo={this.addTodo} />
          {result}
        </div>
      </div>
    )
   }
}

export default App;