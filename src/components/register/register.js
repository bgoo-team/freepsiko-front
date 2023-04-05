import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MDBInput } from "mdbreact";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import login_bg from "../../img/login_bg.svg";
import styles from "../login/login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import { sendMail } from "../activation/sendMail";

let bgStyle = {
  backgroundImage: login_bg,
};

export function Register() {
  const [user, setUser] = useState({
    username: "",
    mail: "",
    phone: "",
    password: ""
  })
  const [warn, setWarn] = useState({state: false, msg: ""})
  const [spinner, setSpinner] = useState(false)
  const navigate = useNavigate()

  const handleMail = async() => {
    try {
      const res = await sendMail(user.mail)
      res.status === 200 && navigate("/activation")
    } catch (err) {
     console.log(err);
     setSpinner(false)
    }
  }

  const handleRegister = async() => {
    //console.log(user);
    setSpinner(true)
    try {
      const res = await fetch("http://localhost:8080/v1/api/auth/register",
        {
          //mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accept': '*/*',
        },
          method: "POST",
          body: JSON.stringify(user),
        //   auth: {
        //     "type": "noauth"
        // },
      })
      if (res.status === 201 ) {
        handleMail()
        const user = await res.json()
        console.log(user);
      }
      if (res.status === 400 ) {
        console.log(await res.text());
        setWarn({state:true, msg:`"${user.mail}" email adresine sahip bir kullanıcı var`})
        setSpinner(false)
      }
    } catch (err) {
      console.log(err.message)
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
            <div className={styles.login_title}>Register</div>
            <input
              className={styles.login_input}
              variant="flushed"
              placeholder="Username"
              name="username"
              type="text"
              onChange={handleInput}
              required
            />
            <div className={styles.login_second_input}></div>
            <input
              className={styles.login_input}
              variant="flushed"
              placeholder="E-mail"
              name="mail"
              type="email"
              onChange={handleInput}
              required
            />
            <div className={styles.login_second_input}></div>
            <input
              className={styles.login_input}
              variant="flushed"
              placeholder="Phone"
              name="phone"
              type="tel"
              onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9+.\s]+/gi, ""))}
						  onChange={handleInput}
            />
            <div className={styles.login_second_input}></div>
            <input
              className={styles.login_input}
              variant="flushed"
              placeholder="Password"
              name="password"
              type="password"
						  onChange={handleInput}
              required
            />
            <div className={styles.login_second_input}></div>
            <div
              className={`${styles.login_button} ${styles.center_items_row}`}
              variant="primary"
              type="submit"
              onClick={handleRegister}
            >
              <div className={styles.login_button_text}>
                Kaydol
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
              <Link to="/login" replace >
                Hesabın varsa
                  <b>&nbsp;giriş yap!</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}