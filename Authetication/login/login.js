

let login = document.getElementById("login")

login.addEventListener("submit", async (k) => {
    k.preventDefault()

    let emailValue = document.getElementById("email").value.trim()
    let passwordValue = document.getElementById("paswd").value.trim()

    let storgeCrenerials = JSON.parse(localStorage.getItem("users"));
    console.log(storgeCrenerials);

    let user = storgeCrenerials.find(x => {
        return x.email === emailValue && x.password === passwordValue;
    });

    if (user) {
        // alert("Successfully logined")
        Swal.fire({
            title: "Successfully logined",
            icon: "success",
            draggable: true
          }).then(()=>{
           location.href="../navbar/nav.html"
          })

    } else {
        alert("user not found")
    }


});