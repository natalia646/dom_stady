function updateClock(){
    const clock = document.querySelector('.clock');
    const date = document.querySelector('.date')
    clock.innerText = new Date().toLocaleTimeString();
    date.innerText = new Date().toLocaleDateString()
}
setInterval(updateClock, 1000)

const delay = 10;
const startTime = new Date();
function selfDestructTimer(){
    const selfDestructContainer = document.querySelector('.self-destruct');
    const currentTime = new Date();
    const timer = Math.round((currentTime - startTime) / 1000);
    const leftSecs = delay -  timer;
    selfDestructContainer.innerText = leftSecs;
    if( leftSecs < 1){
        document.querySelector('body').innerHTML = ''
    }
  

}
// setInterval(selfDestructTimer, 1000)