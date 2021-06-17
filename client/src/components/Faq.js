import Header from "./Header";
import styles from "../css/Faq.module.css";
import { Accordion, Card } from "react-bootstrap";
import pattern from "../assets/faqPattern.svg";
const Faq = ({ logoVariant }) => {
  const questions = ["question 1", "question 2", "question 3", "question 4"];
  const answers = ["answer 1", "answer 2", "answer 3", "answer 4"];
  return (
    <>
      <Header logoVariant={logoVariant} />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className={styles.faqContainer}>
          <div className={styles.cols}>
            <Accordion>
              {questions.map((question, index) => {
                return (
                  <Card className={styles.questionCard} key={index + question}>
                    <Card.Header className={styles.header}>
                      <div className={styles.headerText}>{question}</div>
                      <Accordion.Toggle
                        eventKey={index + 1}
                        className={styles.toggle}
                      >
                        +
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index + 1}>
                      <Card.Body>{answers[index]}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                );
              })}
            </Accordion>
          </div>
        </div>
        <div className={styles.fadedText}>
          <strong>Still have questions?</strong>
          <p>
            If you cannot find answers to your questions here, you can always
            contact us. <br /> We will answer to you shortly !
          </p>
        </div>
      </div>
      <img className={styles.pattern} src={pattern} alt="" />
    </>
  );
};

export default Faq;