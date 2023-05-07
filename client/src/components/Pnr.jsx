import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';


const theme = createTheme({
  palette: {
    primary: green,
  },
});

export default function PnrStatusCard() {
    const [dialogOpen, setDialogOpen] = useState(false);


  const handlePnrSubmit = (event) => {
    event.preventDefault();
    // Here you can make an API call to get the PNR status using the pnrNumber state
    // and update the pnrStatus state with the result
    setDialogOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ minWidth: 275, maxWidth: 400, boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)', borderRadius: '10px', padding: '20px' }}>
          <CardHeader title="PNR Status" style={{ textAlign: 'center' }} />
          <CardContent>
            <form onSubmit={handlePnrSubmit}>
              <TextField
                required
                id="pnr-number"
                label="PNR Number"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary" fullWidth style={{ padding:4 }}>
                Check Status
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
 
  <Card sx={{width:500}}>
          <CardHeader title="PNR Status" />
          <CardContent>
            <form onSubmit={handlePnrSubmit}>
             
              <div style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>Train Name</div>
                <div>Some Train Name</div>
              </div>
              <div style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>Train Number</div>
                <div>12345</div>
              </div>
              <div style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>Date of Journey</div>
                <div>12/05/2023</div>
              </div>
              <div style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>Source</div>
                <div>Delhi</div>
              </div>
              <div style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>Destination</div>
                <div>Mumbai</div>
              </div>
             
              
              <div style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}></div>
              <div>List of Passengers:</div>
              <br />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>Passenger 1</div> <div>Confirmed</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>Passenger 2</div> <div>Confirmed</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>Passenger 3</div> <div>Confirmed</div>
              </div>
              
              
            </form>
          </CardContent>
          </Card>
  {/* Add content for the dialog box here */}
</Dialog>

    </ThemeProvider>
  );
}
