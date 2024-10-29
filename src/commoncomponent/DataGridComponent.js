import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

function DataGridComponent({ rows, columns, title }) {
  return (
    <Box sx={{ height: 400, width: '100%', p: 3, mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </Box>
  );
}

export default DataGridComponent;
