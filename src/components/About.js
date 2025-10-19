import User from "./User";
import UserClass from "./UserClass"

class About extends React.Component{
    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"Koushik Bajpayee(class)"} location={"Kolkata"}/>
            </div>
        )
    }
}
const About = ()=>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <UserClass name={"Koushik Bajpayee(class)"} location={"Kolkata"}/>
        </div>
    );
};

export default About;