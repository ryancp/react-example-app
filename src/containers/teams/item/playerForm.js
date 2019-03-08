import React, { Component } from 'react';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FormikTextField, FormikSelectField  } from 'formik-material-fields';
import { Link } from "react-router-dom";

import { savePlayerItem } from '../actions';

class PlayerForm extends Component {
  render() {
    const {
      teamItem,
      playerItem,
      teamId,
    } = this.props;

    return (
      <Formik
        initialValues={playerItem}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          const playerIndex = _.findIndex(teamItem.roster, {person: {displayName: playerItem.person.displayName}});
          this.props.savePlayerItem(teamId, playerIndex, values);
          actions.setSubmitting(false);
          this.props.history.push(`/teams/${teamId}`);
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <Grid container spacing={24}>
              <Grid item md={4}>
              </Grid>
              <Grid item md={4}>
                <FormikTextField
                  name="person.displayName"
                  label="Display Name"
                  margin="normal"
                  fullWidth
                  align="left"
                />
                <br />
                <FormikSelectField
                  name="unit"
                  label="Unit"
                  margin="normal"
                  align="left"
                  fullWidth
                  options={[
                    { label: 'Offense', value: 'OFFENSE' },
                    { label: 'Defense', value: 'DEFENSE' },
                  ]}
                />
                <br />
                <FormikSelectField
                  name="position"
                  label="Position"
                  margin="normal"
                  align="left"
                  fullWidth
                  options={[
                    { label: "Wide Receiver", value: "Wide Receiver" },
                    { label: "Quarterback", value: "Quarterback" },
                    { label: "Running Back", value: "Running Back" },
                    { label: "Weakside Linebacker", value: "Weakside Linebacker" },
                    { label: "Nose Tackle", value: "Nose Tackle" },
                    { label: "Strong Safety", value: "Strong Safety" },
                    { label: "Right Cornerback", value: "Right Cornerback" },
                    { label: "Left Defensive End", value: "Left Defensive End" },
                    { label: "Right Defensive End", value: "Right Defensive End" },
                  ]}
                />
                <br />
                <FormikSelectField
                  name="depthOrder"
                  label="Depth Order"
                  margin="normal"
                  align="left"
                  fullWidth
                  options={[
                    { label: 'Starter', value: 1 },
                    { label: 'Backup', value: 2 },
                  ]}
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
                &nbsp;
                <Button
                  type="button"
                  variant="contained"
                  color="default"
                  component={Link}
                  to={`/teams/${teamId}`}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item md={4}>
              </Grid>
            </Grid>
          </Form>
        )}
      />
    );
  }
}

export default withRouter(connect(
  null,
  { savePlayerItem }
)(PlayerForm));
