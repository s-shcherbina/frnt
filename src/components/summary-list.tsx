import { Grid, Stack } from '@mui/material';
import { FC } from 'react';
import { summary } from '../moks';
import uuid from 'react-uuid';
import TableComponent from './table-component';
import { indigo } from '@mui/material/colors';

const SummaryList: FC = (): JSX.Element => {
  return (
    <Stack>
      {summary.map((item) => (
        <Grid
          key={uuid()}
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: indigo[50],
            py: 1,
            mt: 2,
          }}
        >
          {item.active + item.archived !== 0 && (
            <TableComponent
              category={item.category}
              name={item.category}
              gridName={4.5}
              data={[item.active.toString(), item.archived.toString()]}
              gridData={3}
            />
          )}
        </Grid>
      ))}
    </Stack>
  );
};

export default SummaryList;
