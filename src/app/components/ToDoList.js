import React from 'react';

const ToDoList = ({list, onTimeStart, onTimeEnd}) => (
    <ul>
        {
            list.map((item, index) => 
                <li data-id={index} key={index}>
                    <div>Name: {item.name}</div>
                    <div>Estimated timestamp: {item.estimatedTime}</div>
                    <div>Start time: {item.startTime}</div>
                    <div>End time: {item.endTime}</div>
                    <div>Time taken: {item.timeTaken}</div>
                    <div>Deviation: {item.deviation}</div>
                    <button onClick={() => onTimeStart(index)}>Start</button>
                    <button onClick={() => onTimeEnd(index)}>End</button>
                </li>
            )
        }
    </ul>
)

export default ToDoList;