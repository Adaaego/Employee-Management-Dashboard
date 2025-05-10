 //change theme
 function changeTheme() {
    let sunIcon = document.getElementById('sun-icon').querySelector('use');

    // Toggle dark mode class on body
    document.body.classList.toggle('darkMode');

    if (document.body.classList.contains('darkMode')) {
        sunIcon.setAttribute('xlink:href', 'images/sprite (10).svg#moon (1)');
    } else {
        sunIcon.setAttribute('xlink:href', 'images/sprite (10).svg#sun (1)');
    }
}

//function to select role
    let selectedRole = '';

    //listen for click events in the role sector container 
    document.querySelector('.role-selector').addEventListener("click", e =>{
        const clicked = e.target;
        

        if(clicked.classList.contains("role-btn")){
            //remove the selected class from all users by default
            document.querySelectorAll(".role-btn").forEach(btn =>
                btn.classList.remove("selected")
             );
             
             //add selected class to the clicked button
             clicked.classList.add("selected");

             //save the clicked role 
             selectedRole = clicked.dataset.role;
        }

    });

    document.getElementById("login-form").addEventListener("submit", function (e) {
        e.preventDefault(); 

        const loginBtn = document.querySelector(".login-button");
         loginBtn.textContent = "Logging in...";
         loginBtn.disabled = true;
       
        setTimeout(() => {
            window.location.href = "index.html";
          }, 10000);
      });
      

