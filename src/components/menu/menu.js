import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import {HashLink as Link} from 'react-router-hash-link';
import styles from '../menu/menu.module.css'
import profile from '../../img/profile.svg'
import account from '../../img/account.svg'
import security from '../../img/security.svg'
import privacy from '../../img/privacy.svg'
import question from '../../img/question.svg'
import { BsDoorOpen } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

export function Menu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  const handleExit = () => {
    window.sessionStorage.setItem('islogin', 'exit')
    document.cookie = 'cookie1=null; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    dispatch(logout())
  }

  return (
    <>
    <Col style={{ display: "flex", justifyContent: "center"}}>
      <button style={{marginTop: "100px"}} className={`${styles.button} d-block d-md-block d-lg-none`} onClick={handleShow}>
        Menu
      </button>
    </Col>

      <Offcanvas className={styles.offcanvas} show={show} onHide={handleClose} >
<div className={styles.offcanvas}>
  <div className={styles.offcanvas_title}>Menu</div>
  <Link to="/profile">

  <div className={styles.offcanvas_item}>
    <img src={profile} style={{width: "25px", height: "25px", textAlign: "center", marginRight: "5px"}}/>
    <div>Profil</div>
  </div>
  </Link>
  <Link to="/account">

  <div className={styles.offcanvas_item}>
    <img src={account} style={{width: "25px", height: "25px", textAlign: "center", marginRight: "5px"}}/>
    <div>Hesap</div>
  </div>
  </Link>
  <Link to="/security">

  <div className={styles.offcanvas_item}>
    <img src={security} style={{width: "27px", height: "25px", textAlign: "center", marginRight: "5px"}}/>
    <div>Güvenlik</div>
  </div>
  </Link>

  <Link to="/">

  <div className={styles.offcanvas_item} onClick={handleExit} >
    {<BsDoorOpen style={{width: "25px", height: "25px", textAlign: "center", marginRight: "5px"}}/>}
    <div>Çıkış</div>
  </div>
  </Link>

  <div className={styles.offcanvas_title} style={{marginTop: '50px'}}>Bot</div>
  <Link to="/privacy-policy">
  <div className={styles.offcanvas_item}>
    <img src={privacy} style={{width: "25px", height: "25px", textAlign: "center", marginRight: "5px"}}/>
    <div>Gizlilik</div>
  </div>
  </Link>
  <Link to="/help">

  <div className={styles.offcanvas_item}>
    <img src={question} style={{width: "25px", height: "25px", textAlign: "center", marginRight: "5px"}}/>
    <div>Yardım</div>
  </div>
  </Link>
</div>
      </Offcanvas>





      <Col xs={4} sm={4} className={`${styles.offcanvas} d-none d-md-none d-lg-block`}  >
<div className={styles.offcanvas}>
  <div className={styles.offcanvas_title}>Menu</div>
  <Link to="/profile">

  <div className={styles.offcanvas_item}>
    <img src={profile} style={{width: "25px", height: "25px", textAlign: "center", marginRight: "5px"}}/>
    <div>Profil</div>
  </div>
  </Link>
  <Link to="/account">

  <div className={styles.offcanvas_item}>
    <img src={account} style={{width: "25px", height: "25px", textAlign: "center", marginRight: "5px"}}/>
    <div>Hesap</div>
  </div>
  </Link>
  <Link to="/security">

  <div className={styles.offcanvas_item}>
    <img src={security} style={{width: "27px", height: "25px", textAlign: "center", marginRight: "5px"}}/>
    <div>Güvenlik</div>
  </div>
  </Link>

  <Link to="/">

  <div className={styles.offcanvas_item} onClick={handleExit} >
    {<BsDoorOpen style={{width: "25px", height: "25px", textAlign: "center", marginRight: "5px"}}/>}
    <div>Çıkış</div>
  </div>
  </Link>

  <div className={styles.offcanvas_title} style={{marginTop: '50px'}}>Bot</div>
  <Link to="/privacy-policy">
  <div className={styles.offcanvas_item}>
    <img src={privacy} style={{width: "25px", height: "25px", textAlign: "center", marginRight: "5px"}}/>
    <div>Gizlilik</div>
  </div>
  </Link>
  <Link to="/help">

  <div className={styles.offcanvas_item}>
    <img src={question} style={{width: "25px", height: "25px", textAlign: "center", marginRight: "5px"}}/>
    <div>Yardım</div>
  </div>
  </Link>
</div>
      </Col>
    </>
  );
}

