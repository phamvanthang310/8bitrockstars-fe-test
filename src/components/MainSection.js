import React, { Fragment } from 'react';
import { Paper } from 'material-ui';
import { Col, Container, Row } from 'react-grid-system';

export class MainSection extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const {children, title} = this.props;

    return (
      <Fragment>
        <div className='section-header'>
          <h1 className='title'>{title}</h1>
        </div>
        <Container className='main' style={{marginTop: '20px'}}>
          <Paper zDepth={1} rounded={false} style={{padding: '15px'}}>
            <Row>
              <Col xs={12}>
                {children}
              </Col>
            </Row>
          </Paper>
        </Container>
      </Fragment>
    );
  }
}