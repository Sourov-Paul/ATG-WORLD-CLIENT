// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Allpost from './Components/NestedRoutes/Allpost/Allpost';
import Article from './Components/NestedRoutes/Article/Article';
import Event from './Components/NestedRoutes/Event/Event';
import Job from './Components/NestedRoutes/Job/Job';
import WritePost from './Components/NestedRoutes/WritePost/WritePost';
import Education from './Components/NestedRoutes/Education/Education';
import Register from './Components/RegisterLoginInfo/Register/Register';
import Login from './Components/RegisterLoginInfo/Login/Login';
import AuthProvider from './Components/context/AuthProvider/AuthProvider';
import EducationPost from './Components/AllServicePostCompo/EducationPost/EducationPost';
import JobPost from './Components/AllServicePostCompo/JobPost/JobPost';
import ArticlePost from './Components/AllServicePostCompo/ArticlePost/ArticlePost';
import LinkAndRoute from './Components/AllServicePostCompo/LinkAndRoute/LinkAndRoute';
import UpdatePost from './Components/NestedRoutes/Allpost/UpdatePost/UpdatePost';

function App() {
  return (
    <div>
      <AuthProvider>
        
      <Routes>
        <Route path='/' element={<Home/>}>
        {/* Nesred Route */}
        <Route path='/' element={<Allpost/>}/>
        <Route path='article' element={<Article/>}/>
        <Route path='event' element={<Event/>}/>
        <Route path='job' element={<Job/>}/>
        <Route path='education' element={<Education/>}/>
        </Route>
{/* Nesred Route */}
        <Route path='/home' element={<Home />}>
        <Route path='allPosts' element={<Allpost/>}/>
        <Route path='article' element={<Article/>}/>
        <Route path='event' element={<Event/>}/>
        <Route path='job' element={<Job/>}/>
        <Route path='education' element={<Education/>}/>
        </Route>



      {/* simple routes */}
      <Route path='writePost' element={<WritePost/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login/>}/>           
      <Route path='nesArticle' element={<ArticlePost/>}/>
      <Route path='nesEducation' element={<EducationPost/>}/>
      <Route path='nesJob' element={<JobPost/>}/>

      <Route path='linkAndRoute' element={<LinkAndRoute/>}/>
      <Route path='/updatePost/:updateId' element={<UpdatePost/>}/>


      </Routes>
      </AuthProvider>
     <div className='container postBtbns fixed-bottom'> <i className="fa-solid fa-pen"></i></div>

    </div>
  );
}

export default App;
