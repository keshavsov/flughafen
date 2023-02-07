import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styled from '@mui/styled-engine-sc';

const steps = [
 'Booking Details',
  'Vehicle option',
  'Kontakt-Information',
  'Summary',
];

const StepperWrapper = styled('div')(()=>({  
  '& .MuiStepConnector-root' : {
    top: '1.4rem',
  },
  '& .MuiStepLabel-iconContainer': {
    zIndex: 1
  }
}));

export default function Stapper() {
  return ( 
    <Box sx={{ width: '100%', my: 4 }}>
      <StepperWrapper>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} sx={{zIndex: 1}}>
            <StepLabel ><b>{label}</b></StepLabel>
          </Step>
        ))}
      </Stepper>
      </StepperWrapper>
    </Box>
  );
}