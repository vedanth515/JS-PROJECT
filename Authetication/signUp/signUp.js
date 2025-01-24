

let signUp = document.getElementById("signup")

signUp.addEventListener("submit", (v) => {

    v.preventDefault()
    v.stopPropagation()

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("paswd")
    let Conformpassword = document.getElementById("conformpaswd")

    let nameValue = name.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let Conformpassword1 = Conformpassword.value.trim()
    // console.log(nameValue);

    let isValid = true;

    if (nameValue === "") {
        // alert("name is requried")
        document.getElementById("nameError").textContent = "name is requried"
        isValid = false;
    } else if (nameValue.length <= 3) {
        // alert("the name should be minimum 3 charcaters")
        document.getElementById("nameError").textContent = "the name should be minimum 3 charcaters"
        isValid = false;

    };

    let emailpattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/

    if (emailValue === "") {
        document.getElementById("emailError").textContent = "email is requried"
        isValid = false;

    } else if (!emailpattern.test(emailValue)) {
        document.getElementById("emailError").textContent = "email not valid"
        isValid = false;


    } else {
        document.getElementById("emailError").textContent = ""

    };

    let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@]).{8,}$/

    if (passwordValue === "") {
        document.getElementById("paswdError").textContent = "password is requried"
        isValid = false;

    } else if (!passwordpattern.test(passwordValue)) {
        document.getElementById("paswdError").textContent = ""
        isValid = false;


    } else {

        document.getElementById("paswdError").textContent = "password must be at least 8 characters and include at least one upcase, one lowcase, one number, and special characters(!@)."

        document.getElementById("paswdError").textContent = ""
    };


    if (passwordValue !== Conformpassword1) {
        document.getElementById("CpaswdError").textContent = "password does not matched"
        isValid = false;


    };

    if (isValid) {
        name.value = ""
        email.value = ""
        password.value = ""
        Conformpassword.value = ""
        
        let allusers=JSON.parse(localStorage.getItem("users")) || [];

        allusers.push({name:nameValue,email:emailValue,password:passwordValue,Conformpassword:Conformpassword1})

       localStorage.setItem("users",JSON.stringify(allusers))
       Swal.fire({
        title: "signedup successfully",
        icon: "success",
        draggable: true
      }).then(()=>{
   location.href="./login.html"
      })
        
     
    };


});




