import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from './Image'; // Assurez-vous que le chemin est correct
import Name from './Name'; // Assurez-vous que le chemin est correct
import Price from './Price'; // Assurez-vous que le chemin est correct
import Description from './Description'; // Assurez-vous que le chemin est correct
import './App.css'; // Importez votre fichier CSS ici

const App = () => {
  const name = "Iskander"; 

  return (
    <Container className="container-center">
      <Row>
        <Col md={6}>
          <div className="card">
            <Image name={name} />
            <div className="card-body">
              <Name />
              <Price />
              <Description />
            </div>
          </div>
          <div className="greeting mt-3">
            <h3>Bonjour, {name ? name : ''}!</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
