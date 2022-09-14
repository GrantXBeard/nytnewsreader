const apiKey = process.env.REACT_APP_NYT_API_KEY

const getArticles = (type) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${apiKey}`)
    .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Sorry, something went wrong!");
        
      });
}

export default getArticles;