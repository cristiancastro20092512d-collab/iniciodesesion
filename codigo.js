function registrarse() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    let mensaje = document.getElementById("mensaje");

    if (usuario === "" || contraseña === "") {
        mensaje.textContent = 'Por favor, complete todos los campos.';
        mensaje.style.color = 'red';
    }
    else {
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("contraseña", contraseña);

        mensaje.textContent = 'Registro exitoso.';
        mensaje.style.color = 'green';

        setTimeout(function() {
            location.href = 'indeeex.html';
        }, 3000);
    }
}

function iniciarSesion() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    let usuarioRegistrado = localStorage.getItem("usuario");
    let contraseñaRegistrada = localStorage.getItem("contraseña");

    let mensaje = document.getElementById("mensaje");

    if (usuario == usuarioRegistrado && contraseña == contraseñaRegistrada) {
        mensaje.textContent = 'Inicio de sesión exitoso.';
        mensaje.style.color = 'green';

        setTimeout(function() {
            location.href = 'pagina.html';
        }, 3000);
    } 
    else {
        mensaje.textContent = 'Usuario o contraseña incorrectos.';
        mensaje.style.color = 'red';
    }
}