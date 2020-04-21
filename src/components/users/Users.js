import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = (props) =>  {
  const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  }
   let UserData = <Spinner/>;
   if(!props.loading) {
     UserData = props.users.map(user => <UserItem key={user.id} user={user}/> )

   } 
 
    return (
     
        <div style={userStyle}>

         {
           UserData
         }
         </div>
    );
 
}
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Users;
