import { FormEvent } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuth } from '../service/useAuth';
import { useNavigate } from 'react-router';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const loginUser = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const user = {
      username: form.username.value,
      password: form.password.value
    };
    login(user.username, user.password).then((res) => {
      console.log(res);
      navigate('/statements');
    })
  }
  return (
    <Container style={{ marginTop: '200px' }}>
      <Row className='justify-content-md-center'>
        <Col md='auto'>
          <Card style={{ width: '35rem' }}>
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Form onSubmit={loginUser}>
                <Form.Group className='mb-3' controlId='username'>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control type='text' placeholder='username' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='password'>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type='password' placeholder='password' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='submit'>
                  <Form.Control type='submit' className='bg-dark text-light'></Form.Control>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;