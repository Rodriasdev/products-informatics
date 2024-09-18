import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap';

interface Equipment {
  id: number;
  name: string;
  status: string;
  location: string;
  acquisitionDate: string;
}

export  const Products = () => {
  const [equipments, setEquipments] = useState<Equipment[]>([
    { id: 1, name: 'Laptop Dell XPS', status: 'Activo', location: 'Oficina A', acquisitionDate: '2023-01-15' },
    { id: 2, name: 'Impresora HP LaserJet', status: 'En mantenimiento', location: 'Almacén', acquisitionDate: '2022-11-30' },
  ]);

  const [newEquipment, setNewEquipment] = useState<Omit<Equipment, 'id'>>({
    name: '',
    status: '',
    location: '',
    acquisitionDate: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEquipment(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEquipments(prev => [...prev, { ...newEquipment, id: prev.length + 1 }]);
    setNewEquipment({ name: '', status: '', location: '', acquisitionDate: '' });
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">FORMOTEX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#inventory">Inventario</Nav.Link>
              <Nav.Link href="#maintenance">Mantenimiento</Nav.Link>
              <Nav.Link href="#reports">Informes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Resumen de Inventario</Card.Title>
                <Card.Text>
                  Total de equipos: {equipments.length}<br />
                  Equipos activos: {equipments.filter(e => e.status === 'Activo').length}<br />
                  En mantenimiento: {equipments.filter(e => e.status === 'En mantenimiento').length}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>Agregar Nuevo Equipo</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre del Equipo</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="name" 
                          value={newEquipment.name} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="status" 
                          value={newEquipment.status} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Ubicación</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="location" 
                          value={newEquipment.location} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Fecha de Adquisición</Form.Label>
                        <Form.Control 
                          type="date" 
                          name="acquisitionDate" 
                          value={newEquipment.acquisitionDate} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" type="submit">
                    Agregar Equipo
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Inventario de Equipos</Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Estado</th>
                      <th>Ubicación</th>
                      <th>Fecha de Adquisición</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipments.map(equipment => (
                      <tr key={equipment.id}>
                        <td>{equipment.id}</td>
                        <td>{equipment.name}</td>
                        <td>{equipment.status}</td>
                        <td>{equipment.location}</td>
                        <td>{equipment.acquisitionDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}