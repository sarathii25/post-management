import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Posts from "./Posts";
import { postcontext } from "../Helpers/context";
import axios from "axios";

const Main = () => {
  const [post, setPost] = useState([]);
  const [searchContent, setsearchContent] = useState('');
  const [filteredresults, setfilteredresults] = useState([]);
  const [openModal, setopenModal] = useState(false);
  const [modaldesc, setmodaldesc] = useState([]);
  const [modaltitle, setmodaltitle] = useState([]);

  const fetchdata = async () => {
    try {
      const storedData = localStorage.getItem("listofpost");
      if (storedData !== null) {
        const data = JSON.parse(storedData);
        setPost(data);
        setsearchContent(data.title);
      } else {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // const apidata = await response.json();
        setPost(response.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(()=>{
    const search = localStorage.getItem('searchresults');
    if(search){
      setsearchContent(search)
    }
  },[])

  const handledelete = (id) => {
    const deletepost = post.filter((p) => p.id != id);
    setPost(deletepost);
    
  };
  const filter = (searchItems) => {
    setsearchContent(searchItems);
    localStorage.setItem("searchresults", JSON.stringify(searchItems));
    if (searchContent !== "") {
      const result = post.filter((p) => {
        return p.title.toLowerCase().includes(searchContent.toLowerCase());
      });
      setfilteredresults(result);
      localStorage.setItem("listofpost", JSON.stringify(result));
    } else {
      setfilteredresults(post);
    }
  };

  const handlemodal = (id) => {
    const response = post.find((p) => p.id == id);
    setmodaltitle(response.title);
    setmodaldesc(response.body);
  };
   
  const handlerefresh = () =>{
    localStorage.clear();
    fetchdata();
    setsearchContent('')
  }

  return (
    <div>
      <postcontext.Provider
        value={{
          post,
          handledelete,
          searchContent,
          setPost,
          filteredresults,
          filter,
          openModal,
          setopenModal,
          modaldesc,
          modaltitle,
          handlemodal,handlerefresh
        }}
      >
        <Navbar />
        <Posts />
      </postcontext.Provider>
    </div>
  );
};

export default Main;
