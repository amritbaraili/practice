import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../css/item.css'

const Items = () => {
    const [posts, setPosts] = useState([]);
    useEffect (() => {
      

        // Make a request for a user with a given ID
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
          .then(function (response) {
            // handle success
            console.log(response.data);
            setPosts(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }, []);

    const createPost = async () => {
        try {
            await axios ({
                method: "post",
                url: "https://jsonplaceholder.typicode.com/posts",
                data: JSON.stringify({
                    title: "foo",
                    body: "bar",
                    userId: 1,

                }),

            });
        } catch (e){
            console.log(e)
            
        }
    }
 
    console.log("posts data", posts);
    return (
<div className='card-container'>
 
 {

    posts.map((item)=>{
        return(
            <div className='cards'>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
           </div>

        )
    })
 }


  

    </div>
  );
};


export default Items
