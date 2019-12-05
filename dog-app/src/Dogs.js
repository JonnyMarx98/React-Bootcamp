import React, { Component } from 'react';
import './Dogs.css'

class Dogs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="Dogs">
                <h1 className="display-1 text-center">dogs</h1>
                <div className="container">
                    <div className="row">
                        {this.props.dogs.map(d => (
                            <div className='Dog col-lg-4 text-center' key={d.name}>
                                <img src={d.src} alt={d.name}/>
                                <h3>{d.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        )
    }
    
}

export default Dogs;