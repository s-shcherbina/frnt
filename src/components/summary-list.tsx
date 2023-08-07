import { Grid, Stack } from '@mui/material';
import { FC, Fragment } from 'react';
import { categories } from '../common/moks';
import uuid from 'react-uuid';
import TableComponent from './table-component';
import { indigo } from '@mui/material/colors';
import SummaryBar from './summary-bar';
import { useAppSelector } from '../utils/hooks';

const SummaryList: FC = (): JSX.Element => {
  const notes = useAppSelector((state) => state.notes.list);
  const sumNotes = (category: string, archived: boolean) =>
    notes
      .filter((note) => note.category === category)
      .filter((note) => note.archived === archived).length;
  return (
    <>
      <SummaryBar />
      <Stack>
        {categories.map((category) => (
          <Fragment key={uuid()}>
            {sumNotes(category, false) + sumNotes(category, true) ? (
              <Grid
                container
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: indigo[50],
                  py: 1,
                  mt: 2,
                }}
              >
                <TableComponent
                  category={category}
                  gridName={4.5}
                  data={[
                    category,
                    sumNotes(category, false)
                      ? sumNotes(category, false).toString()
                      : '',
                    sumNotes(category, true)
                      ? sumNotes(category, true).toString()
                      : '',
                  ]}
                  gridData={3}
                />
              </Grid>
            ) : null}
          </Fragment>
        ))}
      </Stack>
    </>
  );
};

export default SummaryList;
