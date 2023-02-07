const albomJSON = `[
    {
        
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
      
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      },
      {
    
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
      }
]`;

function retderPhoto(albom){
  let users = '';
  for(const user of albom){
    users += `
    <article >
    <img src="${user.url}" alt="${user.id}">
    <h3>${user.title} </h3>
    <img src="${user.thumbnailUrl}" alt="${user.id}">
  </article>
    `
  }
  document.querySelector('.alboms').innerHTML = users
}
retderPhoto(JSON.parse(albomJSON))