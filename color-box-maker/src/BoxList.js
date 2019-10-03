import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';
import uuid from 'uuid/v4';

class BoxList extends Component{
    constructor(props){
        super(props);
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    addBox(box){
        let newBox = {...box, id: uuid()}
        this.setState(state => ({boxes: [...state.boxes, newBox]}));
    }
    removeBox(id){
        let filteredBoxes = this.state.boxes.filter(
            box => box.id !== id
        );
        this.setState({boxes: filteredBoxes});
    }

    render(){
        return(
            <div>
                <h1>MAKE BOXES!</h1>
                <BoxForm
                 addBox={this.addBox}
                 />
                {this.state.boxes.map(box => (
                    <Box
                    key={box.id}
                    id={box.id} 
                    color={box.color}
                    height={box.height}
                    width={box.width}
                    removeBox={this.removeBox}
                    />
                ))}
            </div>
        )
    }
}

export default BoxList;