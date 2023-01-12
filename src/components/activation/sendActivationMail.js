import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MDBInput } from "mdbreact";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import login_bg from "../../img/login_bg.svg";
import styles from "../login/login.module.css";
import { useState } from "react";
import { Spinner } from '@chakra-ui/react';
import { sendMail } from "./sendMail";

let bgStyle = {
  backgroundImage: login_bg,
};
export function SendActivationMail() {
  const [mail, setMail] = useState("")
  const [spinner, setSpinner] = useState(false)
  const navigate = useNavigate()

  const handleMail = async() => {
    setSpinner(true)
    try {
      const res = await sendMail(mail)
      res.status === 200 && navigate("/activation")
    } catch (err) {
     console.log(err);
     setSpinner(false)
    }
  }

  return (
    <>
      <div className={styles.login_container}>
        <div style={bgStyle} className={styles.login_bg}></div>
        <div className={styles.form_container}>
          <div lg={8} md={7} sm={6} xs={12} className={styles.form_container_2}>
            <div className={styles.login_title}>Aktivasyon kodu gönder</div>
            <input
              className={styles.login_input}
              variant="flushed"
              placeholder="E-mail"
              name="mail"
              type="email"
              onChange={(e) => setMail(e.target.value)}
            />
            <div className={styles.login_second_input}></div>
            <div
              className={`${styles.login_button} ${styles.center_items_row}`}
              variant="primary"
              type="submit"
              onClick={handleMail}
            >
              <div className={styles.login_button_text}>
                Mail Gönder
                {spinner && <Spinner className={styles.login_button_spinner} size='sm' />}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
