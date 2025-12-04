import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "Dummy Name",
                location : "Dummy location",
                bio : "Dummy Bio"
            }
        }
    }

    async componentDidMount(){
        // Used for API calls, just like useEffect() in functional components
        const data = await fetch("https://api.github.com/users/Vaishalirawat1119");
        const json = await data.json();

        this.setState({
            userInfo : json
        });
    }

    render(){
        const {name, location, bio, avatar_url} = this.state.userInfo; //destructuring
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <div className="user-info">
                    <h2>Name : {name}</h2>
                    <h3>Location : {location}</h3>
                    <h4>Email : rawatvaishali254@gmail.com</h4>
                    <h4>Bio : {bio}</h4>
                </div>
            </div>
        );
    };
};
export default UserClass;