import styles from "../profile/profile.module.css";
// import {HashLink as Link} from 'react-router-hash-link';
import { Container, Row, Col } from 'react-grid-system';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Menu } from "../menu/menu";
import { Contact } from "../contact/contact";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsExclamationLg } from 'react-icons/bs'
import { Link } from "react-router-dom";

export function Profile() {
    const navigate = useNavigate();
    const {currentUser} = useSelector((state) => state.user)

    useEffect(() => {
        currentUser === null && navigate("/")
    }, [])

    document.body.style.backgroundColor = "#e2e2e2";

  return (
    <>
    <Container>
        <Row>


        <Col className={styles.col_menu} xs={12} md={12} lg={3}>

    <Menu className={styles.menu} />
        </Col>
        <Col className={styles.col_card} xs={12} md={12} lg={9}>

        <Row>
            <Col style={{marginTop: "46px"}} sm={6} lg={3} className={styles.col}>
            <div className={styles.card_container_div}>
            <Card className={styles.info_card} style={{borderRadius:"20px",alignItems: "center",height:"200px"}}>
                <div style={{position:"relative",  height: 100, width: 100, marginBottom:15}}>
                    {!currentUser?.active ?
                        <Link to="/activation" >
                        <div className={styles.activate_account_warning}>
                            {<BsExclamationLg />}
                        </div>
                        </Link>
                    : null
                    }
                    <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268" className={styles.img}/>
                </div>
                <div className={styles.card_body}>
                    <div style={{fontSize: "20px",textAlign: "center"}}>{currentUser?.username[0]?.toUpperCase() + currentUser?.username?.slice(1) } </div>
                    <div style={{fontSize: "16px",textAlign: "center"}}>Premium</div>
                </div>
            </Card>
            </div>
            </Col>
            <Col style={{marginTop: "46px"}} sm={6} lg={3} className={styles.col}>
            <div className={styles.card_container_div}>
            <Card className={styles.info_card} style={{borderRadius:"20px",height:"200px",padding:"10px"}}>
                <div className={styles.card_body}>
                    <div style={{fontSize: "24px",fontWeight:"500"}}>Cüzdan Değeri</div>
                    <div style={{fontSize: "20px"}}>$26,36</div>
                </div>
            </Card>
            </div>
            </Col>
            <Col style={{marginTop: "46px"}} sm={6} lg={3} className={styles.col}>
            <div className={styles.card_container_div}>
            <Card className={`${styles.info_card} ${styles.cards_right}`}>
                <div className={styles.card_body}>
                    <ProgressBar variant="dark" className={styles.progress}  now={30} label={30}/>
                    <div style={{fontSize: "20px",textAlign: "center", marginTop: 10}}>İlerleme</div>
                    <div style={{fontSize: "16px",textAlign: "center"}}>Durumu</div>
                </div>
            </Card>
            </div>
            </Col>
            <Col style={{marginTop: "46px"}} sm={6} lg={3} className={styles.col}>
            <div className={styles.card_container_div}>
            <Card className={`${styles.info_card} ${styles.cards_right}`}>
                <div className={styles.card_body}>
                    <ProgressBar variant="dark" className={styles.progress} now={70} label={70} />
                    <div style={{fontSize: "20px", textAlign: "center", marginTop: 10}}>Puanın</div>
                    <div style={{fontSize: "16px",textAlign: "center"}}>48 Puan</div>
                </div>
            </Card>
            </div>
            </Col>
            <Col sm={12} lg={6} className={styles.col}>
            <div className={styles.card_container_div}>
                <Card className={styles.info_card} style={{borderRadius:"20px"}}>
                    <div className={styles.card_body}>
                        <div style={{fontSize: "20px",textAlign:"center"}}>İşlem Geçmişi</div>
                        <Container style={{overflow: "auto",height: "300px"}}>
                            <div className={styles.transaction_history_row}>
                                <div>Premium Membership</div>
                                <div >08/01/2022</div>
                                <div>$18</div>
                            </div>
                            <div className={styles.transaction_history_row}>
                                <div>Premium Membership</div>
                                <div >08/01/2022</div>
                                <div>$18</div>
                            </div>
                            <div className={styles.transaction_history_row}>
                                <div>Premium Membership</div>
                                <div >08/01/2022</div>
                                <div>$18</div>
                            </div>
                            <div className={styles.transaction_history_row}>
                                <div>Premium Membership</div>
                                <div >08/01/2022</div>
                                <div>$18</div>
                            </div>
                            <div className={styles.transaction_history_row}>
                                <div>Premium Membership</div>
                                <div >08/01/2022</div>
                                <div>$18</div>
                            </div>
                            <div className={styles.transaction_history_row}>
                                <div>Premium Membership</div>
                                <div >08/01/2022</div>
                                <div>$18</div>
                            </div>
                            <div className={styles.transaction_history_row}>
                                <div>Premium Membership</div>
                                <div >08/01/2022</div>
                                <div>$18</div>
                            </div>
                        </Container>
                    </div>
                </Card>
                </div>
            </Col>
        </Row>
        </Col>
        </Row>
    </Container>
    <Contact/>
    </>
  );
}
