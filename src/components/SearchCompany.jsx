import { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Job from './Job';
import uniqid from 'uniqid';

class SearchCompany extends Component {
  state = {
    query: '',
    jobs: [],
  };

  baseEndpoint = 'https://remotive.io/api/remote-jobs?company_name=';

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(this.baseEndpoint + this.state.query);

    if (!response.ok) {
      alert('Error fetching results');
      return;
    }

    const { jobs } = await response.json();
    console.log(jobs);
    this.setState({ jobs });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Search Company</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                placeholder="type company name"
                value={this.state.query}
                onChange={(e) => {
                  this.setState({ query: e.target.value });
                }}
              />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mt-2">
            <Row>
              <Col xs={3}>Company Name</Col>
              <Col xs={3}>Job Title</Col>
            </Row>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {this.state.jobs.map((jobData) => (
              <Job key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchCompany;
