import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './data';
import Column from './column'
import {DragDropContext} from 'react-beautiful-dnd'

class App extends React.Component{
    state=initialData

    onDragEnd=result=>{
        const{destination,source,draggableId}=result;
        if(!destination){return;}
        if(destination.droppableId===source.droppableId&&destination.index===source.index){return}
        const column=this.state.columns['col1'];
        const newTaskIds=Array.from(column.taskIds);
        newTaskIds.splice(source.index,1)
        newTaskIds.splice(destination.index,0,draggableId)

        const newColumn={
            ...column,
            taskIds:newTaskIds
        }

        const newState={
            ...this.state,
            columns:{
                ...this.state.columns,
[newColumn.id]:newColumn
            }
        };
        this.setState(newState);
        console.log(newState)
    }

    render(){     
        return(
            <DragDropContext
            onDragEnd={this.onDragEnd}
            >
                {
            this.state.columnOrder.map(data=>{
            const column=this.state.columns[data];
            const tasks=column.taskIds.map(taskId=>this.state.tasks[taskId])

return <Column key={column.id} column={column} tasks={tasks}/> }
           )}
           </DragDropContext>
        )}
}
ReactDOM.render(<App />, document.getElementById('root'));

