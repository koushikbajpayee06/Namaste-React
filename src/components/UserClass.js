
import React from "react";

class UserClass extends React.Component{
        constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:1
        };
        // console.log(props);
    }
    render(){
        const {name,location} = this.props;

            return (
                <div className="user-card">
                    <h1>Count:{this.state.count}</h1>
                    <h1>Count2:{this.state.count2}</h1>
                    <h2>{name}</h2>
                    <h3>{location}</h3>
                    <h3>Contact:@koushik6</h3>
                </div>
            );
    }
}
export default UserClass