import React, { Component } from 'react';
import ToDoList from './ToDoList';

class ToDoContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            newItem: {},
            list: [],
        };
    }


    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            newItem: {},
            list: [...this.state.list, this.state.newItem]
        });
    }

    onTimeStart = (index) => {
        const date = new Date();
        const time = date.toLocaleTimeString();

        const list = this.state.list;
        list[index].startTime = time;

        this.setState({
            list: [...list],
        });
    }

    onTimeEnd = (index) => {
        const date = new Date();
        const time = date.toLocaleTimeString();

        const list = this.state.list;
        list[index].endTime = time;
        list[index].timeTaken = time - list[index].startTime;

        this.setState({
            list: [...list],
        });
    }

    onChange = (event) => {
        const inputName = event.currentTarget.name;
        const inputValue = event.currentTarget.value;
        const currentItem = this.state.newItem;
        currentItem[inputName] = inputValue;

        this.setState({
            newItem: currentItem
        });
    }

    render() {
        const {newItem: {name, estimatedTime}, list} = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='name' value={name} onChange={this.onChange} />
                    <input type='number' name='estimatedTime' value={estimatedTime} onChange={this.onChange} />

                    <button>Submit</button>
                </form>
                <ToDoList onTimeStart={this.onTimeStart} onTimeEnd={this.onTimeEnd} list={list} />
            </div>
        );
    }
}

export default ToDoContainer;