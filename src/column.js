import React from 'react'
import Task from './task'
import {Droppable} from 'react-beautiful-dnd'

class Column extends React.Component{
    render(){
        return (
           <div>
    <h1>{this.props.column.title}</h1>
    <Droppable droppableId="col1">
        {provided=>(
    <h2 
    ref={provided.innerRef}
    {...provided.droppableProps}>
        {this.props.tasks.map((task,index)=><Task key={task.id} task={task} index={index}/>)}
        {provided.placeholder}
    </h2>
    )}
    </Droppable>
           </div>
        )
    }
}

export default Column;
