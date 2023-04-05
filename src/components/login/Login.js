import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MDBInput } from "mdbreact";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import login_bg from "../../img/login_bg.svg";
import styles from "../login/login.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import { getUserInfo } from "./getUserInfo";
import { loginSuccessful } from "../../redux/userSlice";

let bgStyle = {
  backgroundImage: login_bg,
};
export function Login() {
  const [spinner, setSpinner] = useState(false)
  const [user, setUser] = useState({username: "", password: ""})
  const [warn, setWarn] = useState({state: false, msg: ""})
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogin = async() => {
    setSpinner(true)
    try {
      const response = await fetch("http://localhost:8080/v1/api/auth/login",
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: "POST",
          redirect:'follow',
          body: JSON.stringify({'username':user.username,'password':user.password}),
      });
      const responseText = await response.text()
      if (response.status === 200) {
        remember
          ? (document.cookie = `cookie1=${responseText}; expires=${new Date().getUTCFullYear() + 1}; path=/`)
          : (window.sessionStorage.setItem('islogin', 'login'))
        const userInfo = await getUserInfo(user.username)
        userInfo && dispatch(loginSuccessful(userInfo))
        navigate('/profile');
      }
      response.status === 401 && setWarn({state:true, msg: "Şifre hatalı!"})
      response.status === 404 && setWarn({state:true, msg: `${responseText}`})
      setSpinner(false)
    } catch (err) {
      console.log(err);
      setSpinner(false)
    }
  }

  const handleInput = (e) => {
    warn.state && setWarn({state:false, msg: ""})
    setUser((prev) => ({...prev, [e.target.name]: e.target.value.trim()}))
  }

  return (
    <>
      <div className={styles.login_container}>
        <div style={bgStyle} className={styles.login_bg}></div>
        <div className={styles.form_container}>
          <div lg={8} md={7} sm={6} xs={12} className={styles.form_container_2}>
            <div className={styles.login_title}>GİRİŞ</div>
            <input
              className={styles.login_input}
              variant="flushed"
              placeholder="User Name"
              type="text"
              name="username"
              onChange={handleInput}
            />
            <div className={styles.login_input_label}></div>
            <div className={styles.login_second_input}></div>
            <input
              className={styles.login_input}
              variant="flushed"
              placeholder="Password"
              type="password"
              name="password"
						  onChange={handleInput}
              />
            <div className={styles.login_input_label}></div>

            <Form>
              {["checkbox"].map((type) => (
                <div key={type} className="mb-3">
                  <Form.Check
                    className={styles.login_checkbox_container}
                    type={type}
                    id={`check-api-${type}`}
                  >
                    <Form.Check.Input
                      className={styles.login_checkbox_button}
                      type={type}
                      checked={remember}
                      onChange={() => setRemember(true)}
                      isValid
                    />
                    <div className={styles.login_checkbox_button_text}>
                      <Form.Check.Label>Beni Hatırla</Form.Check.Label>
                    </div>
                  </Form.Check>
                </div>
              ))}
            </Form>

            <div
              className={`${styles.login_button} ${styles.center_items_row}`}
              variant="primary"
              type="submit"
              onClick={handleLogin}
            >
              <div className={styles.login_button_text}>
                Giriş
                {spinner && <Spinner className={styles.login_button_spinner} size='sm' />}
              </div>
            </div>
            {warn.state &&
              <span style={{fontSize:12, color:"#ff1100"}}>
                {warn.msg}
              </span>
            }
            <div
              className={styles.login_button_forgot}
              variant="primary"
              type="submit"
            >
              <Link to="/forgot-password">Şifremi Unuttum</Link>
            </div>
            <div
              className={styles.login_button_forgot}
              variant="primary"
              type="submit"
            >
            <Link to="/register" replace >
              Hesabın yoksa
                <b>&nbsp;kaydol!</b>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}