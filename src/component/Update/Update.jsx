import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData()
    console.log('uodate',loadedUser);

    const handleSubmit = event =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name,email}
        // console.log(updatedUser);

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount >0){
                form.reset()
                alert('Update successfully')

            }
           
        })
    }



    return (
        <div>
            <h3>Update information for {loadedUser.name}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id=""  defaultValue={loadedUser?.name}/>
                <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
            
        </div>
    );
};

export default Update;