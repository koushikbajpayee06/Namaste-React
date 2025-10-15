import User from "./User";
import UserClass from "./UserClass"
const About = ()=>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name={"Koushik Bajpayee(functional)"} location={"Kolkata"}/>
            <UserClass name={"Koushik Bajpayee(class)"} location={"Kolkata"}/>
        </div>
    );
};

export default About;