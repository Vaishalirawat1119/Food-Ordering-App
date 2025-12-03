import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        // console.log(props);
    }
    render(){
        const {name} = this.props; //destructuring
        return(
            <div className="user-card">
                <h1><u>It is a class-based component</u></h1>
                <h2>Name : {name}</h2>
                <h3>Location : Delhi</h3>
                <h4>Email : rawatvaishali254@gmail.com</h4>
            </div>
        );
    };
};
export default UserClass;