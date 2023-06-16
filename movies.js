const movies = [
    { title: "Starsan", youtubeUrl: "https://youtu.be/jiU6k28aqQs", thumbnail: "str.jpg" },
    { title: "Ang Probinsyano", youtubeUrl: "https://youtu.be/orZmE_h9n80", thumbnail: "fpj.jpg" },
    { title: "Asiong Salongga", youtubeUrl: "https://youtu.be/AIqlVVYsH-o", thumbnail: "asio.jpg" },
  ];
  
  const movieList = document.getElementById("movie-list");
  
  movies.forEach(movie => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = movie.youtubeUrl;
    link.target = "_blank"; // Open in a new tab or window
   
    const thumbnail = document.createElement("img");
    thumbnail.src = movie.thumbnail;
    thumbnail.alt = movie.title;
    link.appendChild(thumbnail);
   
    const title = document.createElement("span");
    title.textContent = movie.title;
    link.appendChild(title);
   
    listItem.appendChild(link);
    movieList.appendChild(listItem);
  });