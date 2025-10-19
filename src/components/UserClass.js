
import React from "react";

class UserClass extends React.Component{
        constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:1
        };
        console.log("constructor");
    }
    render(){
        const {name,location} = this.props;
        const {count} = this.state;

        console.log("render")
            return (
                <div className="user-card">
                    <h1>Count:{count}</h1>
                    <button
                     onClick={()=>{
                        //NEVER UPDATE STATE VARIABLE DITECTLY
                        this.setState(
                        {
                            count: this.state.count+1,
                            count2:this.state.count2+1,
                        });
     
                    }}>Increase Count</button>
                    <h2>{name}</h2>
                    <h3>{location}</h3>
                    <h3>Contact:@koushik6</h3>
                </div>
            );
    }
}
export default UserClass;