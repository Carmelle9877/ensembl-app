import { Box, TextField } from '@mui/material'

export default function SearchBox() {
    return (
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        //backgroundColor:"white"
        
        
      }}
      noValidate
      autoComplete="off"
     >
        <div>
          <TextField id="outlined-search" label="Search field" type="search" />
        </div>
      </Box>
        )
      }
