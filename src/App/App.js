import React, {useState, useEffect} from 'react'
import './App.css';
import Header from '../Header/Header'
import Display from '../Display/Display';
import sampleData from '../sample'
import getArticles from '../apiCall';

function App() {
  const [articleData, setArticleData] = useState(null);

useEffect(() => {
 setArticleData(sampleData.results)
})
console.log(articleData)
  return (
    <main>
      <Header />
      {articleData ? <Display articleData={articleData} /> : <h2>Error</h2>}
    </main>
    
  );
}

export default App;
