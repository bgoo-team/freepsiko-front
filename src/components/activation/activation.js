import { useNavigate } from "react-router-dom";
import login_bg from "../../img/login_bg.svg";
import styles from "../login/login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'

let bgStyle = {
  backgroundImage: login_bg,
};
export function Activation() {
  const [parameters, setParameters] = useState({mail: "", code: ""})
  const [warn, setWarn] = useState({state: false, msg: ""})
  const [spinner, setSpinner] = useState(false)
  const navigate = useNavigate()

  const handleActivation = async() => {
    console.log(parameters);
    setSpinner(true)
    try {
      const res = await fetch(`http://localhost:8080/v1/api/user/activate?mail=${parameters.mail}&code=${parameters.code}`,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
          method: "PATCH",
      })
      const result = await res.json();
      if ( typeof result === 'object' && result?.active ) return navigate("/login")
      setWarn({state:true, msg:"Aktivasyon kodu hatalı, lütfen kontrol edin!"})
      setSpinner(false)
    } catch (err) {
      console.log(err);
    }
  }

  const handleInput = (e) => {
    warn.state && setWarn({state:false, msg: ""})
    setParameters((prev) => ({...prev, [e.target.name]: e.target.value.trim()}))
  }

  return (
    <>
      <div className={styles.login_container}>
        <div style={bgStyle} className={styles.login_bg}></div>
        <div className={styles.form_container}>
          <div lg={8} md={7} sm={6} xs={12} className={styles.form_container_2}>
            <div className={styles.login_title}>Aktivasyon</div>
            <input
              className={styles.login_input}
              variant="flushed"
              placeholder="E-mail"
              name="mail"
              type="email"
              onChange={handleInput}
            />
            <div className={styles.login_second_input}></div>
            <input
              className={styles.login_input}
              variant="flushed"
              placeholder="Aktivasyon Kodu"
              name="code"
              type="text"
              onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9+.\s]+/gi, ""))}
						  onChange={handleInput}
            />
            <div className={styles.login_second_input}></div>
            <div
              className={`${styles.login_button} ${styles.center_items_row}`}
              variant="primary"
              type="submit"
              onClick={handleActivation}
            >
              <div className={styles.login_button_text}>
                Hesabı Aktive Et
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}