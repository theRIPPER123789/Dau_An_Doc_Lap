import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

const inpUsername = document.querySelector(".inp-username");
const inpEmail = document.querySelector(".inp-email");
const inpPassword = document.querySelector(".inp-pwd");
const inpConfirmPwd = document.querySelector(".inp-cf-pw");
const registerFrom = document.querySelector("#register-form");

const handleRegister = (event) => {
    event.preventDefault();
    let username = inpUsername.value;
    let email = inpEmail.value;
    let password = inpPassword.value;
    let confirmPassword = inpConfirmPwd.value;
    let role_id = 2; // 1: admin, 2: user

        if (!username || !fullname || !phone || !email || !password) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const user = {
            username: username,
            fullname: fullname,
            phone: phone,
            email: email,
            password: password
        };

        if (password.length < 6) {
            alert("Mật khẩu phải lớn hơn 6 chữ số");
            return;
        }

        if (!password.match(upperCaseLetter)) {
            alert("Mật khẩu cần ít nhất một chữ cái in hoa!");
            return;
        }

        if (!password.match(lowerCaseLetter)) {
            alert("Mật khẩu cần ít nhất một chữ thường!");
            return;
        }
        // lưu vào localStorage
        localStorage.setItem("user", JSON.stringify(user));

            createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            const userData = {
                username,
                email,
                password,
                role_id,
                balance: 0
            }
            alert("Đăng kí thành công");
            return addDoc(collection(db, "users"), userData);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

registerFrom.addEventListener('submit', handleRegister);