import styles from "../card/card.module.css";
import Card from "react-bootstrap/Card";
import { useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
export function Job_card() {
  const { isOpen: isOpenModal, onOpen: onCardOpen, onClose: onCardClose } = useDisclosure()
  return (
    <div className={styles.job_card_container1}>
    <div className={styles.job_card_container2}>
      <Card  className={styles.card_container}>
        <Card.Header className={styles.card_header_container}>

            <div className={styles.card_header_left}>Logo Design</div>
            <div className={styles.card_header_right}>3-5 Gün</div>
        </Card.Header>
        <Card.Body>
          <Card.Text className={styles.card_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </Card.Text>
          <div className={styles.card_footer_container}>
          <div className={styles.card_footer_left}>BGO TEAM</div>
          <button className={styles.card_footer_rigth} onClick={onCardOpen}>Çalışmayı görmek için tıkla</button>
          </div>
        </Card.Body>
      </Card>
      <Card  className={styles.card_container}>
        <Card.Header className={styles.card_header_container}>

            <div className={styles.card_header_left}>Logo Design</div>
            <div className={styles.card_header_right}>3-5 Gün</div>
        </Card.Header>
        <Card.Body>
          <Card.Text className={styles.card_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </Card.Text>
          <div className={styles.card_footer_container}>
          <div className={styles.card_footer_left}>BGO TEAM</div>
          <button className={styles.card_footer_rigth} onClick={onCardOpen}>Çalışmayı görmek için tıkla</button>
          </div>
        </Card.Body>
      </Card>
      <Card  className={styles.card_container}>
        <Card.Header className={styles.card_header_container}>

            <div className={styles.card_header_left}>Logo Design</div>
            <div className={styles.card_header_right}>3-5 Gün</div>
        </Card.Header>
        <Card.Body>
          <Card.Text className={styles.card_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </Card.Text>
          <div className={styles.card_footer_container}>
          <div className={styles.card_footer_left}>BGO TEAM</div>
          <button className={styles.card_footer_rigth} onClick={onCardOpen}>Çalışmayı görmek için tıkla</button>
          </div>
        </Card.Body>
      </Card>
      <Card  className={styles.card_container}>
        <Card.Header className={styles.card_header_container}>

            <div className={styles.card_header_left}>Logo Design</div>
            <div className={styles.card_header_right}>3-5 Gün</div>
        </Card.Header>
        <Card.Body>
          <Card.Text className={styles.card_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </Card.Text>
          <div className={styles.card_footer_container}>
          <div className={styles.card_footer_left}>BGO TEAM</div>
          <button className={styles.card_footer_rigth} onClick={onCardOpen}>Çalışmayı görmek için tıkla</button>
          </div>
        </Card.Body>
      </Card>
      <Card  className={styles.card_container}>
        <Card.Header className={styles.card_header_container}>

            <div className={styles.card_header_left}>Logo Design</div>
            <div className={styles.card_header_right}>3-5 Gün</div>
        </Card.Header>
        <Card.Body>
          <Card.Text className={styles.card_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </Card.Text>
          <div className={styles.card_footer_container}>
          <div className={styles.card_footer_left}>BGO TEAM</div>
          <button className={styles.card_footer_rigth} onClick={onCardOpen}>Çalışmayı görmek için tıkla</button>
          </div>
        </Card.Body>
      </Card>
      <Card  className={styles.card_container}>
        <Card.Header className={styles.card_header_container}>

            <div className={styles.card_header_left}>Logo Design</div>
            <div className={styles.card_header_right}>3-5 Gün</div>
        </Card.Header>
        <Card.Body>
          <Card.Text className={styles.card_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </Card.Text>
          <div className={styles.card_footer_container}>
          <div className={styles.card_footer_left}>BGO TEAM</div>
          <button className={styles.card_footer_rigth} onClick={onCardOpen}>Çalışmayı görmek için tıkla</button>
          </div>
        </Card.Body>
      </Card>
      <Modal onClose={onCardClose} isOpen={isOpenModal} isCentered >
        <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{ borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody className={styles.modal_body}>
            <div className={styles.card_header_left}>Logo Design</div>
            <div className={styles.card_header_right}>3-5 Gün</div>
          <Card.Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </Card.Text>
          <div className={styles.card_footer_container}>
          <div className={styles.card_footer_left}>BGO TEAM</div>
          </div>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    </div>
  );
}
