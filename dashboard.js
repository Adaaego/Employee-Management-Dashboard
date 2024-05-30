window.onload = function () {
    const greetingElement = document.getElementById('greeting');

    const currentTime = new Date();
    const currentHour = currentTime.getHours()

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


}

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
}

document.addEventListener('DOMContentLoaded',() => {
calculateProgress(122053,225000, 'starbucksProject', 'starbucksPercentage');
calculateProgress(45000, 200000, 'webApplicationProject', 'webApplicationPercentage');
calculateProgress(16, 205, 'webDesignProject', 'webDesignPercentage' );
calculateProgress(2680, 5200, 'logoDesignProject','logoDesignPercentage');
});

// let pj1= calculateProgress(5000,12345);
// console.log(pj1);