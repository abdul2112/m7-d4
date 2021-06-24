import { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addJobToFavouriteAction } from '../actions';
import { connect } from 'react-redux';

// const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToFavourite: (job) => {
    dispatch(addJobToFavouriteAction(job));
  },
});
class Job extends Component {
  state = {
    showDetail: false,
  };

  render() {
    return (
      <>
        <Row
          className="mx-0 mt-3 p-3"
          style={{ border: '1px solid #00000033', borderRadius: 15 }}
        >
          <Col xs={2}>
            <Link to={`/company-detail/${this.props.data.company_name}`}>
              {this.props.data.company_name}
            </Link>
          </Col>
          <Col xs={3}>
            <Link to={{ pathname: this.props.data.url }} target="_blank">
              {this.props.data.title}
            </Link>
          </Col>
          <Col xs={2}>
            <Button
              className="btn btn-dark"
              style={{ textDecoration: 'none' }}
              onClick={() =>
                this.state.showDetail
                  ? this.setState({ showDetail: false })
                  : this.setState({ showDetail: true })
              }
            >
              Details
            </Button>
          </Col>
          <Col xs={3}>
            <Button
              className="btn btn-dark"
              style={{ textDecoration: 'none' }}
              onClick={() => this.props.addToFavourite(this.props.data)}
            >
              Add to Favourite
            </Button>
          </Col>
        </Row>
        {this.state.showDetail && (
          <Row
            className="mx-0 mt-3 p-3"
            style={{ border: '1px solid #00000033', borderRadius: 15 }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: this.props.data.description }}
            ></div>
          </Row>
        )}
      </>
    );
  }
}

export default connect((s) => s, mapDispatchToProps)(Job);
