window.onload = function(){
const greetingElement = document.getElementById('greeting');

const currentTime = new Date();
const currentHour = currentTime.getHours()

let greeting; 

if(currentHour < 12){
    greeting = 'Good Morning';
}
else if(currentHour < 18){
    greeting = 'Good Afternoon';
}
else {
    greeting = 'Good Evening';
}

const username = 'Lisa';
greetingElement.innerHTML = `${greeting}, ${username}`


}