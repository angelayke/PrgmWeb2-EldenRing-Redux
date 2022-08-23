import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Input from "../../eldenring/components/Input";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Input from "./Input";
import Button from "react-bootstrap/Button";

const LoginForm = () => {
    // On crée un état qui contiendra un objet. Cet objet sera
    // les valeurs initiales de notre formulaire
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        lastname: "",
    });

    const onChange = (newValue, id) => {
        setFormData({
            ...formData,
            // Ici c’est ce que nous appelons une dynamic key. L’id
            // du input est passé à la fonction (voir component Input)
            // puis cet id sera la clé passée à notre objet formulaire.
            // La variable newValue sera la nouvelle valeur associée à
            // la clé. On aura la clé ajoutée au state.
            [id]: newValue,
        });
    };
    const onSubmit = (event) => {
         // Important pour que la page ne rafraîchisse pas
         event.preventDefault();
         // On fait notre logique au submit ici.
        console.log(formData);
    }
        
    return (
        <Container fluid className="vh-100">
            <Container className="h-100 d-flex justify-content-center align-items-center">
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col>
                            <Input id="email" onChange={onChange} value={formData.email} />
                        </Col>
                        <Col>
                            <Input id="password" type="password" onChange={onChange} value={formData.email} />
                        </Col>
                        <Col>
                            <Button type="submit">Connexion</Button>
                        </Col>
                    </Row>
                    
                </Form>
            </Container>
        </Container>
    );
    };
    export default LoginForm;