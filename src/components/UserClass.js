
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
        //console.log("Child Constructor");
    }

    componentDidMount(){
        //console.log("child component did mount");
        // API Call

    }

    render(){
        const {name,location} = this.props;


        //console.log("Child Render");
            return (
                <div className="user-card">
                   
                    <h2>{name}</h2>
                    <h3>{location}</h3>
                    <h3>Contact:@koushik6</h3>
                </div>
            );
    }
}
export default UserClass;