import React from 'react';
import { useState } from 'react';

const ArticlePost = () => {

  const[title,setTitle]=useState('')
  const[title2,setTitle2]=useState('')
  const[image,setImage]=useState(null)
    // sucess message
    const [sucess,setSucess]=useState(false)
    // error message
    const [error,setError]=useState('')

    
    const handleAddArticle=e=>{
        
    e.preventDefault();
    if(!image){
        return;
    }
    const formData =new FormData();
    formData.append('title',title)
    formData.append('title2',title2)
    formData.append('image',image);

    fetch('https://morning-brook-05622.herokuapp.com/allArticle',{
       method:'POST',
       body:formData
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            setSucess('Success');
        }
    }).catch((error)=>{
        // setError(error)
        setError(error)
    })


}

    return (





        <div>
            {
                sucess &&<div className="alert alert-success" role="alert">
            Post successfully Done. 
              </div>
            }
            {
                error && <div className="alert alert-error" role="alert">
                Please Try Again.
                  </div>
            }
                <form onSubmit={handleAddArticle}>
                    
            <input placeholder='Title' type="text" onChange={e=>setTitle(e.target.value)}  name='Title' />
            <input placeholder='Comment' type="text" onChange={e=>setTitle2(e.target.value)}  name='Title' />
            <input type="file" accept="image/*" 
            onChange={e=>setImage(e.target.files[0])}
            />
            <input type="submit" value="Submit" />
                </form>
        </div>
    );
};

export default ArticlePost;