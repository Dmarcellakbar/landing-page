import React, {useState} from 'react'
import axios from 'axios'
import NoteTimeline from './NoteTimeline';

export default function Parent() {
  const [news, getNews] = useState('');
  const url = 'http://localhost:3000/';
  
  const getAllNews = () => {
    axios.get(`${url}news`)
        .then((response) => {
            const allNews = response.data.news.allNews;
            getNews(allNews);
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    
    return (
        <NoteTimeline news={news}/>
  )
}
