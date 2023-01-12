import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MDBInput } from "mdbreact";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import login_bg from "../../img/login_bg.svg";
import styles from "../login/login.module.css";
import { Link } from "react-router-dom";
let bgStyle = {
  backgroundImage: login_bg,
};
export function ForgotPassword() {
  return (
    <>
      <div className={styles.login_container}>
        <div style={bgStyle} className={styles.login_bg}></div>
        <div className={styles.form_container}>
          <div lg={8} md={7} sm={6} xs={12} className={styles.form_container_2}>
            <div className={styles.login_title}>Forgot Password</div>
            <input
              className={styles.login_input}
              variant="flushed"
              placeholder="E-mail"
            />
            <div className={styles.login_second_input}></div>
            <div
              className={styles.login_button}
              variant="primary"
              type="submit"
            >
              Mail Gönder
            </div>
            <div
              className={styles.login_button_forgot}
              variant="primary"
              type="submit"
            >
              <Link to="/login" replace >
                Şifreni biliyorsan
                  <b>&nbsp;giriş yap!</b>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
