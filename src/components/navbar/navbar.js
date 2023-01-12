import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import styles from "../navbar/navbar.module.css";
import { useDisclosure } from '@chakra-ui/react'
import { BsExclamationLg } from 'react-icons/bs'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useSelector } from "react-redux";

function NavScrollExample() {
  const {currentUser} = useSelector((state) => state.user)
  const { isOpen: isAboutOpen, onOpen: onAboutOpen, onClose: onAboutClose } = useDisclosure()

  return (
    <>
    <Navbar className={styles.navbar_container} expand="lg" style={{position:"fixed",width:"100%",backdropFilter: "blur(2px)"}}>
      <Container className={styles.navbar_container2}>
        <Navbar.Brand href="#">
      <Link className={styles.navbar_link} to="/">
          <img className={styles.navbar_logo_img} src={logo} />
      </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Link className={styles.navbar_link} to="/">
            <div className={`${styles.navbar_navlink}`}>Ana Sayfa</div>
          </Link>
          <Link className={styles.navbar_link} to="/explore">
            <div className={`${styles.navbar_navlink}`}>Çalışmalar</div>
          </Link>
          <Link className={styles.navbar_link} to="/jobs">
            <div className={`${styles.navbar_navlink}`}>Çalışan Ol</div>
          </Link>
          <div className={styles.navbar_link} onClick={onAboutOpen}>
            <div className={`${styles.navbar_navlink}`} onClick={onAboutOpen}>Hakkında</div>
          </div>
          <Link className={styles.navbar_link} to="/help">
            <div className={`${styles.navbar_navlink}`}>Yardım</div>
          </Link>
          {currentUser
            ?
              <div style={{position:"relative",  height: 50, width: 58}}>
                {!currentUser?.active ?
                    <Link to="/activation" >
                      <div className={styles.activate_account_warning}>
                        {<BsExclamationLg />}
                      </div>
                    </Link>
                  : null
                }
                <Link className={styles.navbar_link} to="/profile">
                  <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268" className={styles.profile_img}/>
                </Link>
              </div>
            :
              <Link className={styles.navbar_link} to="/login">
                <button variant="" className={`${styles.navbar_button} rounded`}>
                  GİRİŞ
                </button>
              </Link>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal onClose={onAboutClose} isOpen={isAboutOpen} isCentered>
        <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{border: "1px solid white", borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody>
            <div style={{color: "white", marginTop: "40px", fontSize: "18px", fontWeight: 700}}>
           HAKKINDA
            </div>
          </ModalBody>
          <ModalFooter>
            <img className={styles.modal_logo} src={logo}/>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavScrollExample;
