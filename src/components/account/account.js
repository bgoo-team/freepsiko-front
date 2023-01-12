import styles from "../account/account.module.css";
// import {HashLink as Link} from 'react-router-hash-link';
import { Container, Row, Col } from 'react-grid-system';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Menu } from "../menu/menu";
import { Contact } from "../contact/contact";
import user from "../../img/account_user.svg";
import works from "../../img/account_works.svg";
import { BsClockFill } from "react-icons/bs";
import { useDisclosure } from '@chakra-ui/react'
import { Input} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
export function Account() {
  const { isOpen: isPersonalInfoOpen, onOpen: onPersonalInfoOpen, onClose: onPersonalInfoClose } = useDisclosure()
  const { isOpen: isRegistersOpen, onOpen: onRegistersOpen, onClose: onRegistersClose } = useDisclosure()
  const { isOpen: isWorksOpen, onOpen: onWorksOpen, onClose: onWorksClose } = useDisclosure()
  const { isOpen: isOfferOpen, onOpen: onOfferOpen, onClose: onOfferClose } = useDisclosure()
  const { isOpen: isPersonalUpdateOpen, onOpen: onPersonalUpdateOpen, onClose: onPersonalUpdateClose } = useDisclosure()
  const { isOpen: isOpenModal, onOpen: openModal, onClose: closeModal } = useDisclosure()
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
            <Card className={styles.info_card} style={{borderRadius:"20px",alignItems: "center",height:"200px"}} onClick={onPersonalInfoOpen}>
                <img src={user} className={styles.img} />
                <div className={styles.card_body}>
                    <div style={{fontSize: "20px",textAlign: "center"}}>Kişisel</div>
                    <div style={{fontSize: "16px",textAlign: "center"}}>Bilgiler</div>
                </div>
            </Card>
            </div>
            </Col>
            <Col style={{marginTop: "46px"}} sm={6} lg={3} className={styles.col}>
            <div className={styles.card_container_div}>
            <Card className={styles.info_card} style={{borderRadius:"20px",alignItems: "center",height:"200px"}} onClick={onRegistersOpen}>
            <BsClockFill style={{fontSize:"2.5rem",marginTop:"40px"}}/>
                <div className={styles.card_body}>
                    <div style={{fontSize: "20px",textAlign: "center"}}>Eski Çalışmalarım</div>
                    <div style={{fontSize: "16px",textAlign: "center"}}>2 Adet</div>
                </div>
            </Card>
            </div>
            </Col>
            <Col style={{marginTop: "46px"}} sm={6} lg={3} className={styles.col}>
            <div className={styles.card_container_div}>
            <Card className={styles.info_card} style={{borderRadius:"20px",alignItems: "center",height:"200px"}} onClick={onWorksOpen}>
                <img src={works} className={styles.img} />
                <div className={styles.card_body}>
                    <div style={{fontSize: "20px",textAlign: "center"}}>Çalışmalarım</div>
                    <div style={{fontSize: "16px",textAlign: "center"}}>1 Adet</div>
                </div>
            </Card>
            </div>
            </Col>
        </Row>
        <Row><Col style={{marginTop: "46px"}} sm={6} lg={3} className={styles.col}>
            <div className={styles.card_container_div}>
            <Card className={styles.info_card} style={{borderRadius:"20px",alignItems: "center",height:"80px"}} onClick={onOfferOpen}>
                <div className={styles.card_body}>
                    <div style={{fontSize: "20px",textAlign: "center",marginTop:"10%"}}>İş Tekliflerim <i style={{color:"#E23072"}}>(1)</i></div>
                </div>
            </Card>
            </div>
            </Col></Row>
        </Col>
        </Row>
    </Container>
    <Modal onClose={onPersonalInfoClose} isOpen={isPersonalInfoOpen} isCentered >
        <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{ borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody>
            <div style={{ fontSize: "24px", fontWeight: 400,marginTop:"20px",marginBottom:"30px",textAlign:"center"}}>
            Kişisel Bilgiler
            </div>
                <Input type='text'  value="Lena"/>
                <Input type='text' value="+90(123)1231231234" />
                <Input type='email' value="free@gmail.com" />
                <Input type='password' value="12345678" />
            <button className={styles.modal_button} onClick={onPersonalUpdateOpen}>Bilgilerimi Güncelle</button>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal onClose={onPersonalUpdateClose} isOpen={isPersonalUpdateOpen} isCentered>
      <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{ borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody>
            <div style={{ fontSize: "24px", fontWeight: 400,marginTop:"20px",marginBottom:"30px",textAlign:"center"}}>
            Kişisel Bilgiler
            </div>
                <Input type='text' placeholder="Username"/>
                <Input type='text' placeholder="Phone" />
                <Input type='email' placeholder="Mail" />
                <Input type='password' placeholder="Password" />
            <button className={styles.modal_button}>Kaydet</button>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal onClose={onRegistersClose} isOpen={isRegistersOpen} isCentered size="xl" m={4}>
        <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{ borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody>
            <div style={{ fontSize: "24px", fontWeight: 400,marginTop:"20px",marginBottom:"30px"}}>
            Eski Çalışmalarım
            </div>
            <div className={styles.modal_text}>
              <Container style={{float:"left",left:"0"}}>
                <Row>
                <Col>
                <Card  className={styles.card_container}>
                   <Card.Header className={styles.card_header_container}>
                    <div className={styles.card_header_left}>Jobs</div>
                    <div className={styles.card_header_right}>14 August</div>
                  </Card.Header>
                <Card.Body>
                  <Card.Text className={styles.card_text}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  </Card.Text>
                    <div className={styles.card_footer_container}>
                    <div className={styles.card_footer_left}>BGO TEAM</div>
                    <div className={styles.card_footer_rigth}>Full Time</div>
                    </div>
                </Card.Body>
              </Card>
                </Col>
                <Col>
                  <Card  className={styles.card_container}>
                    <Card.Header className={styles.card_header_container}>
                        <div className={styles.card_header_left}>Jobs</div>
                        <div className={styles.card_header_right}>14 August</div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text className={styles.card_text}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                      </Card.Text>
                      <div className={styles.card_footer_container}>
                      <div className={styles.card_footer_left}>BGO TEAM</div>
                      <div className={styles.card_footer_rigth}>Part Time</div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card  className={styles.card_container}>
                   <Card.Header className={styles.card_header_container}>
                    <div className={styles.card_header_left}>Jobs</div>
                    <div className={styles.card_header_right}>14 August</div>
                  </Card.Header>
                <Card.Body>
                  <Card.Text className={styles.card_text}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  </Card.Text>
                    <div className={styles.card_footer_container}>
                    <div className={styles.card_footer_left}>BGO TEAM</div>
                    <div className={styles.card_footer_rigth}>Full Time</div>
                    </div>
                </Card.Body>
              </Card>
                </Col>
                <Col>
                <Card  className={styles.card_container}>
                   <Card.Header className={styles.card_header_container}>
                    <div className={styles.card_header_left}>Jobs</div>
                    <div className={styles.card_header_right}>14 August</div>
                  </Card.Header>
                <Card.Body>
                  <Card.Text className={styles.card_text}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  </Card.Text>
                    <div className={styles.card_footer_container}>
                    <div className={styles.card_footer_left}>BGO TEAM</div>
                    <div className={styles.card_footer_rigth}>Full Time</div>
                    </div>
                </Card.Body>
              </Card>
                </Col>
                                <Col>
                <Card  className={styles.card_container}>
                   <Card.Header className={styles.card_header_container}>
                    <div className={styles.card_header_left}>Jobs</div>
                    <div className={styles.card_header_right}>14 August</div>
                  </Card.Header>
                <Card.Body>
                  <Card.Text className={styles.card_text}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  </Card.Text>
                    <div className={styles.card_footer_container}>
                    <div className={styles.card_footer_left}>BGO TEAM</div>
                    <div className={styles.card_footer_rigth}>Full Time</div>
                    </div>
                </Card.Body>
              </Card>
                </Col>
                </Row>
              </Container>
            </div>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <Modal onClose={onWorksClose} isOpen={isWorksOpen} isCentered size="xl">
        <ModalOverlay   bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{ borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody>
            <div style={{ fontSize: "24px", fontWeight: 400,marginTop:"20px",marginBottom:"30px"}}>
            Çalışmalarım
            </div>
            <div className={styles.modal_text}>
            <Card  className={styles.card_container}>
                    <Card.Body>
                        <Container >
                          <Row >
                            <Col sm={3} >Web Site</Col>
                            <Col sm={6} className={styles.text}>Lorem ipsum dolor sit amet,consetetur</Col>
                            <button sm={3} style={{color:"#ec3b83"}} onClick={openModal}>More</button>
                          </Row>
                        </Container>
                    </Card.Body>
            </Card>
            <Card  className={styles.card_container}>
                    <Card.Body>
                        <Container>
                          <Row >
                            <Col sm={3} >Mobile App</Col>
                            <Col sm={6} className={styles.text} >Lorem ipsum dolor sit amet,consetetur</Col>
                            <button sm={3} style={{color:"#ec3b83"}} onClick={openModal}>More</button>
                          </Row>
                        </Container>
                    </Card.Body>
            </Card>
            <Card  className={styles.card_container}>
                    <Card.Body>
                        <Container>
                          <Row >
                            <Col sm={3} >Graphic</Col>
                            <Col sm={6} className={styles.text}>Lorem ipsum dolor sit amet,consetetur</Col>
                            <button sm={3} style={{color:"#ec3b83"}} onClick={openModal}>More</button>
                          </Row>
                        </Container>
                    </Card.Body>
            </Card>
            </div>

          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal onClose={onOfferClose} isOpen={isOfferOpen} isCentered >
        <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{ borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody>
            <div style={{ fontSize: "24px", fontWeight: 400,marginTop:"20px",marginBottom:"30px"}}>
            Logo Tasarımı
            </div>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div>Bu işi kabul ediyor musunuz?</div>
            <button className={styles.modal_button} style={{borderRadius:"20px"}}>Kabul</button>
            <button className={styles.modal_button} style={{backgroundColor:"#e23072",color:"white",borderRadius:"20px",marginLeft:"10px"}}>Red</button>
            <Row style={{marginTop:"25px"}}>
              <Col>
              <Col>Ortalama</Col>
            <Col style={{color:"#e23072"}}>3-5 gün</Col>
              </Col>
              <Col>
              <Col>İşveren</Col>
              <Col style={{color:"#e23072"}}>google.com</Col>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal onClose={closeModal} isOpen={isOpenModal} isCentered >
        <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{ borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody className={styles.modal_body}>
            <Container >
              <Row >
                <Col sm={3} >Web Site</Col>
                <Col sm={6}>Lorem ipsum dolor sit amet,consetetur</Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    <Contact/>
    </>
  );
}
