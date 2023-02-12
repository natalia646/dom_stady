//!Fetch
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((alboms) => {
    for (let user of alboms) {
      let h2 = document.createElement("h2");
      h2.innerText = user.title;
      // document.body.appendChild(h2)
    }
  });

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const alboms = await response.json();
  for (let user of alboms) {
    let h2 = document.createElement("h2");
    h2.innerText = user.title;
    document.body.appendChild(h2);
  }
}
// getData();


//!AJAX
function initData(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
         const alboms = JSON.parse(xhr.responseText);
         for (let user of alboms) {
            let h2 = document.createElement("h2");
            h2.innerText = user.title;
            document.body.appendChild(h2);
          }
        } 
    }
    xhr.open('GET', "https://jsonplaceholder.typicode.com/albums", true);
    xhr.send()
}
initData()