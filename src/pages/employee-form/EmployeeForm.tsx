import { Box, Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import { DatePickerField } from '../../components/Form/DatePickerField';
import { Preview } from './Preview';
const sleep = (time_mil: number) => new Promise((acc) => setTimeout(acc, time_mil));

export default function Home() {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{
            first_name: '',
            last_name: '',
            middle_name: '',
            dob: new Date().toISOString(),
            email: '',
            mobile: '',
            details: '',
            role_name: '',
            role_type: 0,
            role_payBand: '',
            joining_date: new Date().toISOString(),
            comp_type: '',
            comp_amount: '',
            comp_isTaxable: false,
            add_line1: '',
            add_line2: '',
            add_line3: '',
            add_city: '',
            add_district: '',
            add_state: '',
            add_country: '',
            add_zip: '',
            millionaire:false
          }}
          onSubmit={async (values) => {
            await sleep(3000);
            console.log('values', values);
          }}
        >
          <FormikStep label="Personal">
            <Box paddingBottom={2}>
              <Field fullWidth name="first_name" component={TextField} label="First Name" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="middle_name" component={TextField} label="Middle Name" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="last_name" component={TextField} label="Last Name" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="mobile" component={TextField} label="Mobile No." />
            </Box>
            <Box paddingBottom={2}>
              <Field name="dob" component= {DatePickerField} label = "Date of Birth"/>
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="email" component={TextField} label="Email" />
            </Box>

          </FormikStep>
          <FormikStep
            label="Address"
          >
            <Box paddingBottom={1}>
              <Field
                fullWidth
                name="add_line1"
                component={TextField}
                label="Line 1"
              />
            </Box>
            <Box paddingBottom={1}>
              <Field
                fullWidth
                name="add_line2"
                component={TextField}
                label="Line 2"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="add_city"
                component={TextField}
                label="City"
              />
            </Box>
            <Grid container spacing={2}>
              <Grid item>
                <Box paddingBottom={1}>
                  <Field
                    fullWidth
                    name="add_state"
                    component={TextField}
                    label="State"
                  />
              </Box>
              </Grid>
            <Grid item>
              <Box paddingBottom={1}>
                <Field
                  fullWidth
                  name="add_zip"
                  type = "number"
                  component={TextField}
                  label="Zip/Postal code"
                />
              </Box>
            </Grid>
          </Grid>
          </FormikStep>

          <FormikStep label="Education">
            <Box paddingBottom={2}>
              <Field fullWidth name="edu_highest" component={TextField} label="Highest Education" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="edu_ssc" component={TextField} label="SSC" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="edu_hsc" component={TextField} label="HSC" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="edu_others" component={TextField} label="Others" />
            </Box>
          </FormikStep>
          <FormikStep label="Experience">
            <Box paddingBottom={2}>
              <Field fullWidth name="exp_lastOrg" component={TextField} label="Previous Organization" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="exp_years" component={TextField} label="Years" />
            </Box>
          </FormikStep>
          <FormikStep label="Compensation">
            <Box paddingBottom={2}>
              <Field name="joining_date" component= {DatePickerField} label = "Joining Date"/>
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="role_name" component={TextField} label="Role Name" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="role_type" component={TextField} label="Role Type" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="role_payBand" component={TextField} label="Role Pay band" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="comp_type" component={TextField} label="Compensation Type" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="comp_amount" component={TextField} label="Compensation Amount" />
            </Box>
            <Box paddingBottom={2}>
              <Field
                name="comp_isTaxable"
                type="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: 'This is taxable' }}
              />
            </Box>
          </FormikStep>
          <FormikStep label="Preview">
            <Box paddingBottom={2}>
              <Field name="dob" component= {Preview} label = "Preview"/>
            </Box>
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}