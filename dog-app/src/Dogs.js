import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
							<h1 className="display-1 text-center mt-3 mb-5">dogs</h1>
                <div className="row">
									{this.props.dogs.map(d => (
										<div className='Dog col-lg-4 text-center' key={d.name}>
											
											<Link to={`/dogs/${d.name}`}>
											<img src={d.src} alt={d.name} />
											</Link>
											<h3><Link to={`/dogs/${d.name}`} className="underline">
												{d.name}
												</Link></h3>
										</div>
									))}
                </div>
            </div>
            
        )
    }
    
}

export default Dogs;