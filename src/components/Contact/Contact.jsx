import React from 'react'
import { Form } from 'react-bootstrap'
import Button from '../Button/Button'

import styles from '../Contact/Contact.module.scss'

const Contact = () => {
    return (
        <div className={styles.contactWrapper} id='contact'>
            <h3 className={styles.contactHeadline}>Kontaktformular</h3>
            <Form>
                <div className={styles.contactEmailClub}>
                    <Form.Group className={styles.email} controlId="formBasicEmail">
                        <Form.Label>Email Addresse</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className={styles.club} controlId="formBasicClub">
                        <Form.Label>Verein</Form.Label>
                        <Form.Control type="text" placeholder='Verein' />
                    </Form.Group>
                </div>

                <Form.Group className={styles.nameWrapper} controlId="formBasicName">
                    <Form.Group className={styles.firstName} controlId="formBasicFirstName">
                        <Form.Label>Vorname</Form.Label>
                        <Form.Control type="text" placeholder="Vorname" />
                    </Form.Group>
                    <Form.Group className={styles.lastName} controlId="formBasicLastName">
                        <Form.Label>Nachname</Form.Label>
                        <Form.Control type="text" placeholder='Nachname' />
                    </Form.Group>
                </Form.Group>
                <Button
                    text={'Platz buchen'}
                    btnWidth={'fit-content'}
                    btnMinWidth={'150px'}
                    btnMaxWidth={'300px'}
                />
            </Form>
        </div>
    )
}

export default Contact