import { Box, Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import { mixed, number, object } from 'yup';
import { DatePickerField } from '../../components/Form/DatePickerField';
const sleep = (time_mil: number) => new Promise((acc) => setTimeout(acc, time_mil));

export default function Home() {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{
            first_name: '',
            lastName: '',
            millionaire: false,
            money: 0,
            description: '',
            joining_date: new Date().toISOString()
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
              <Field fullWidth name="last_name" component={TextField} label="Last Name" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="mobile" component={TextField} label="Mobile No." />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="email" component={TextField} label="Email" />
            </Box>
            
          </FormikStep>
          <FormikStep
            label="Address"
            validationSchema={object({
              money: mixed().when('millionaire', {
                is: true,
                then: number()
                  .required()
                  .min(
                    1_000_000,
                    'Because you said you are a millionaire you need to have 1 million'
                  ),
                otherwise: number().required(),
              }),
            })}
          >
            <Box paddingBottom={1}>
              <Field
                fullWidth
                name="line1"
                component={TextField}
                label="Line 1"
              />
            </Box>
            <Box paddingBottom={1}>
              <Field
                fullWidth
                name="line2"
                component={TextField}
                label="Line 2"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="city"
                component={TextField}
                label="City"
              />
            </Box>
            <Grid container spacing={2}>
              <Grid item>
                <Box paddingBottom={1}>
                  <Field
                    fullWidth
                    name="state"
                    component={TextField}
                    label="State"
                  />
              </Box>
              </Grid>
            <Grid item>
              <Box paddingBottom={1}>
                <Field
                  fullWidth
                  name="zip"
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
              <Field fullWidth name="highest" component={TextField} label="Highest Education" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="ssc" component={TextField} label="SSC" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="hsc" component={TextField} label="HSC" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="others" component={TextField} label="Others" />
            </Box>
          </FormikStep>
          <FormikStep label="Experience">
            <Box paddingBottom={2}>
              <Field fullWidth name="lastOrg" component={TextField} label="Previous Organization" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="years" component={TextField} label="Years" />
            </Box>
          </FormikStep>
          <FormikStep label="Compensation">
            <Box paddingBottom={2}>
              <Field name="joining_date" component= {DatePickerField} label = "Joining Date"/>
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="role" component={TextField} label="Role" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="amount" component={TextField} label="Annual Compensation" />
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