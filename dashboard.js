//GREETING

window.onload = function () {
    const greetingElement = document.getElementById ('greeting');

    const currentTime = new Date(); // to get the current date and time 
    const currentHour = currentTime.getHours() // to get the current hour *24-hour clock

    let greeting;

    if (currentHour < 12) {
        greeting = 'Good Morning';
    }
    else if (currentHour < 18) {
        greeting = 'Good Afternoon';
    }
    else {
        greeting = 'Good Evening';
    }

    const username = 'Lisa';
    greetingElement.innerHTML = `${greeting}, ${username}`


};

function calculateProgress(actual, target, projectId, progressBarId) {
    const percentage = Math.round((actual / target) * 100);

    //updating the content of the specific project
    const projectPercentage = document.getElementById(projectId);
    if (projectPercentage){
        projectPercentage.textContent = percentage + '%';
    }

    //accessing the css variables 
    const rootStyles = getComputedStyle(document.documentElement);
    const colorRed = rootStyles.getPropertyValue('--red-container').trim(); 
    const colorGreen = rootStyles.getPropertyValue('green-container').trim(); 


    //updating colors of progress bars based on their percentages 
   const progressBarElement = document.getElementById(progressBarId);
    if (progressBarElement) {
        

        progressBarElement.style.width = percentage + '%';

        if (percentage < 50) {
            progressBarElement.style.backgroundColor = colorRed;
        }
        else {
            progressBarElement.style.backgroundColor = colorGreen;
        }
    }
};

document.addEventListener('DOMContentLoaded',() => {
calculateProgress(40000,225000, 'starbucksProject', 'starbucksPercentage');
calculateProgress(45000, 200000, 'webApplicationProject', 'webApplicationPercentage');
calculateProgress(1250, 7500, 'webDesignProject', 'webDesignPercentage' );
calculateProgress(503, 5200, 'logoDesignProject','logoDesignPercentage');
});


//CHANGE THEME
function changeTheme(){
    let sunIcon = document.getElementById('sun-icon').querySelector('use');

    document.body.classList.toggle('darkMode');
    if (document.body.classList.contains('darkMode')){
        sunIcon.setAttribute('href', 'images/sprite (10).svg#moon (1)');

    }
    else{
        sunIcon.setAttribute('href', 'images/sprite (10).svg#sun (1)');
    }


    // Check if darkMode class is applied
    const isDarkMode = document.body.classList.contains('darkMode');

    const smallCards = document.querySelectorAll('.card--small');
    const mediumCard = document.querySelectorAll('.card--medium')
    smallCards.forEach(card => {
        card.querySelectorAll('h2, h3, p').forEach(element => {
            if (isDarkMode) {
                element.style.color = '#000';  // White text for dark mode
            } else {
                element.style.color = '#000';  // Black text for light mode
            }
        });

        card.style.pointerEvents = isDarkMode ? 'none' : '';  // Disables hover interaction in dark mode
    });

    mediumCard.forEach(medCard => {
        if(isDarkMode) {
            medCard.style.borderBottom = 'none';
        }
    })

}

function openSideBar(){
    let menu = document.getElementById('menu').querySelector('use');

  if(menu.getAttribute('href') === 'images/sprite (13).svg#menu'){
    menu.setAttribute('href', 'images/sprite (13).svg#x-menu' )
  }
  else{
    menu.setAttribute('href', 'images/sprite (13).svg#menu' )
  }
    
}



