import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../section4/section4.module.css"
import img1 from "../../img/section4_1.svg";
import img2 from "../../img/section4_2.svg";
import { motion } from "framer-motion"

function Section4() {

  return (
    <div className={styles.section4_big_container}>
      {/* <img className={styles.img2} src={img2} /> */}
    <Container className={styles.section4_container}>
      <Row className={styles.section4_row}>
    <Col  sm={6} xs={12} className={`${styles.left_card} mh-100`}>
      <Card.Body>
        <Card.Title className={styles.section4_left_card_title}>Why Freelance</Card.Title>
        <Col className={styles.left_card_text} sm={10}>
        Lorem ipsum dolor sit amet, consetetur
sadipscing elitr sed diam nonumy
        </Col>
        <Button className={styles.left_card_button} variant="primary">More</Button>
      </Card.Body>
    </Col>
        <Col  sm={6} xs={12} className={`${styles.right_card} mh-100`}>
        <Card.Body className={styles.right_card_body}>
          <Card.Title className={styles.right_card_title}>+90M</Card.Title>
          <Card.Text className={styles.right_card_text}>
          User
          </Card.Text>
        </Card.Body>
      </Col>
      </Row>
    </Container>
    <motion.div
      style={{ y: 0 }}
      animate={{ y: -50 }}
      transition={{
          delay: 1,
          duration: 2,
          ease: [0.075, 0.82, 0.565, 1.38],
          repeat: Infinity,
          repeatType: "reverse",
      }}
    >
      <img className={styles.img1} src={img1} />
    </motion.div>
    </div>
  );
}

export default Section4;