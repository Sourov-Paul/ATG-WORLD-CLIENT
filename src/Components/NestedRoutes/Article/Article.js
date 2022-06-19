import React from 'react';
import './Article.css';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../../Hooks/UseFirebase/useAuth';
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader';
const Article = () => {


    const [articles,setArticles]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const {user}=useAuth()

    useEffect(()=>{
        fetch('http://localhost:5000/allArticle')
        .then(res=>res.json())
        .then(data=>{
          setIsLoading(false)
          setArticles(data)
        })
    })


    return (
        <div>
          {
            isLoading ? <Loader/>: <div>
            {
                articles.map((article)=><div>
                     <div className="card mb-3 mainCards">
  <img src={`data:image/*;base64,${article.image}`} className="card-img-top img-fluid" alt="..." />
  <div className="card-body">
  <div className="card-title editOpction">
              <div className="logo1">
              
                <img src="https://i.ibb.co/GCjYKyQ/Article.png" alt="" />
              </div>
              <div className="editButton">
                <Link to={`/updatePost/${article._id}`}><i className="fa-solid fa-ellipsis"></i></Link>
              </div>
            </div>
    <p className="card-text1">{article.title}</p>
    <p className="card-text2">{article.title2}</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    <div className="cardManImg">
        <div className="photoName"> 
        <img src={user.photoURL} alt="" />
        <span className='manName'>Sarthak Kamra</span>
         </div>
        <div className="viewShare">
      
       <span> <i className="fa-solid fa-eye"></i> 1.4k views</span>
       <button className='border-0 buttonSize'><i className="fa-solid fa-share-nodes"></i></button>
        </div>
    </div>
  </div>
</div>
                </div>)
            }
            Article
        </div>
          }
         
        </div>
    );
};

export default Article;