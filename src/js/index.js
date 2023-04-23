var nav = document.getElementById("navLink")

function showMenu(){
    console.log('yes')
    if(navLinks.style.right==="-200px" ){
        navLinks.style.right = "0";
      }else{
        navLinks.style.right ="-200px"
    }
}

const togglePassword = document.querySelector("#togglePassword");
        const togglePassword1 = document.querySelector("#togglePassword1");
        const password = document.querySelector("#password");
        const newPassword = document.querySelector("#newPassword");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("ri-eye-line");
        });
        togglePassword1.addEventListener("click", function () {
            // toggle the type attribute
            const type = newPassword.getAttribute("type") === "password" ? "text" : "password";
            newPassword.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("ri-eye-line");
        });

        // prevent form submit
        const form = document.querySelector("form");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });