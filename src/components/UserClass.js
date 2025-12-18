import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location",
        bio: "Dummy Bio",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/Vaishalirawat1119"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;

    return (
      <div className="p-3 m-3 h-82 border border-black">
        {/* Avatar */}
        <img
          src={avatar_url}
          alt="user"
          className="w-[300] h-[300]"
        />

        {/* User Info */}
        <div className="flex flex-col justify-center w-[37%] h-45 ml-85 mt-[-250] p-3 leading-4">
          <h2 className="font-semibold text-lg pb-3">Name : {name}</h2>
          <h3 className="pb-3">Location : {location}</h3>
          <h4 className="pb-3">Email : rawatvaishali254@gmail.com</h4>
          <h4 className="pb-3">Bio : {bio}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
