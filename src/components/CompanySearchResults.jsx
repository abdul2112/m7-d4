import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import uniqid from 'uniqid';

class CompanySearchResults extends React.Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    this.getJobsByCompanyName();
  }

  baseEndpoint = 'https://remotive.io/api/remote-jobs?company_name=';

  getJobsByCompanyName = async () => {
    const response = await fetch(
      this.baseEndpoint + this.props.match.params.companyName
    );
    const { jobs } = await response.json();

    this.setState({ jobs });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            {this.state.jobs.map((jobData) => (
              <Job key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CompanySearchResults;
