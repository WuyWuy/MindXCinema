document.getElementById("Submit").addEventListener("click", function(){

    let name = document.getElementById("Username").value;

    let email = document.getElementById("Email").value;

    let pass = document.getElementById("Password").value;

    if (name == "" || email == "" || pass == ""){

        alert("Vui lòng nhập đầy đủ thông tin!");

    } else {

        let RegisterSite = document.getElementById("container");
        let Menu = document.getElementById("menu");

        RegisterSite.style.display = "none";
        Menu.style.display = "flex";

        alert("Đăng nhập thành công!");

        document.body.style.backgroundColor = "gray"

    }

});