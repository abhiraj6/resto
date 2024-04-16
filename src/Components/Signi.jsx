import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'

const Loginp = () => {
  return (
    <div>
        <center>
            <Typography variant='h2'> sign-in</Typography><br/>
            <TextField id="F-name" label="FirstName" variant="outlined" /><br/><br/>
            <TextField id="L-name" label="Lastname" variant="outlined" /><br/><br/>
            <TextField id="number" label="Contact Number" variant="outlined" /><br/><br/>
            <TextField id="mail" label="E-mail" variant="outlined" /><br/><br/>
            <TextField id="address" label="Address" variant="outlined" /><br/><br/>
            <TextField id="l-mark" label="Landmark" variant="outlined" /><br/><br/>
            <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
        </center>
    </div>
  )
}

export default Loginp