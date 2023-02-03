import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
 'Booking Details',
  'Vehicle option',
  'Kontakt-Information',
  'Summary',
];

export default function Stapper() {
  return (
    <Box sx={{ width: '100%', my: 4 }}>
      <Stepper activeStep={1} alternativeLabel sx={{height: '5rem'}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel ><b>{label}</b></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}