import { Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FC } from 'react';
import { summaryBar } from '../moks';
import TableComponent from './table-component';

const SummaryBar: FC = (): JSX.Element => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: grey[500],
        color: '#fff',
        // fontWeight: 'bold',
        borderRadius: 1.5,
        py: 1.6,
        mt: 6,
      }}
    >
      <TableComponent
        category={''}
        name={'Note Category'}
        gridName={4.5}
        data={summaryBar}
        gridData={3}
      />
      {/* <Grid item xs={0.9}></Grid>
      <Grid item xs={4.5}>
        <Typography variant='h5' sx={{ fontWeight: 700 }}>
          Note Category
        </Typography>
      </Grid>
      {summaryBar.map((item) => (
        <Grid item xs={3} key={item}>
          <Typography variant='h5' sx={{ fontWeight: 700 }}>
            {item}
          </Typography>
        </Grid>
      ))} */}

      {/* <Grid item xs={3}>
        <Typography variant='h5' sx={{ fontWeight: 800 }}>
          Active
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant='h5' sx={{ fontWeight: 800 }}>
          Archived
        </Typography>
      </Grid> */}
    </Grid>
  );
};

export default SummaryBar;
