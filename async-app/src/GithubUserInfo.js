import React, { Component } from 'react';
import axios from 'axios';

class GithubUserInfo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             imgUrl: '',
             name: ''
        }
    }

    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        console.log(response.data);
        let data = response.data;
        this.setState({imgUrl: data.avatar_url, name: data.name})
    }
    

    render(){
        return(
            <div>
                <h2>Github User: {this.state.name}</h2>
                <img src={this.state.imgUrl}/>
            </div>
        )
    }
}

export default GithubUserInfo;