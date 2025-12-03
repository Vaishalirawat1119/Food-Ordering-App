import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <User name={"Vaishali Rawat (function)"}/>
            <UserClass name={"Vaishali Rawat (class-based)"}/>
        </div>
    )
}

export default About;