import { Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FC } from 'react';
import { summaryBar } from '../common/moks';
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
        borderRadius: 1.5,
        py: 1.6,
        mt: 6,
      }}
    >
      <TableComponent
        category={''}
        gridName={4.5}
        data={summaryBar}
        gridData={3}
      />
    </Grid>
  );
};

export default SummaryBar;
