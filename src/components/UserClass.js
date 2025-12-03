import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        // console.log(props);

        this.state = {
            first : 0,
            second : 1
        }
    }
    render(){
        const {name} = this.props; //destructuring
        const {first, second} = this.state;
        return(
            <div className="user-card">
                <h1><u>It is a class-based component</u></h1>
                <h1>Count : {first}</h1>
                <button onClick={() => {this.setState({first : this.state.first + 1})}}>Click Me</button>
                {/* <h1>Count : {second}</h1> */}
                <h2>Name : {name}</h2>
                <h3>Location : Delhi</h3>
                <h4>Email : rawatvaishali254@gmail.com</h4>
            </div>
        );
    };
};
export default UserClass;