import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = {
			inputValue:'',
			list:[]
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}

    render(){
			return(
				<Fragment>
					<div>
						<label htmlFor = "Insert Area">Insert Area</label>
						<input 
							id = "Insert Area"

							value = {this.state.inputValue}
							onChange={this.handleInputChange}
						/>
						<button 
							onClick = {this.handleBtnClick}
						>
							submit
						</button>
					</div>
					<ul>
						{this.getTodoItem()}
					</ul>
				</Fragment>
			)
		}
		
		getTodoItem()
		{
			return this.state.list.map((item,index) => {
				return (
					<	
						TodoItem 
							key = {index}
							content = {item} 
							index = {index}
							deleteItem = {this.handleItemDelete}
					/>

				)
			}) 
		}

    handleInputChange(e)
    {
			const value = e.target.value;
			this.setState(() => ({
				inputValue : value
			}));
    }

    handleBtnClick()
    {
			this.setState((prevState) => ({
				list: [...prevState.list,prevState.inputValue],
				inputValue: ''
			}));
    }

    handleItemDelete(index)
    {
			// immutable, do not changing state props directly
			this.setState((prevState) => {
				const list = [...prevState.list];
				list.splice(index,1);
				return{list}
			});
		}
}

export default TodoList;