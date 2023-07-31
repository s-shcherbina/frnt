import {
  FormatQuote,
  LightbulbOutlined,
  Psychology,
  ShoppingCart,
} from '@mui/icons-material';
import { Avatar, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FC } from 'react';
import uuid from 'react-uuid';

const TableComponent: FC<{
  category: string;
  name: string;
  gridName: number;
  data: string[];
  gridData: number;
}> = ({ category, name, gridName, data, gridData }): JSX.Element => {
  return (
    <>
      <Grid item xs={0.9} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar sx={{ bgcolor: grey[700], p: 1 }}>
          {category === 'Task' ? (
            <ShoppingCart fontSize='large' />
          ) : category === 'Random Thought' ? (
            <Psychology fontSize='large' />
          ) : category === 'Idea' ? (
            <LightbulbOutlined fontSize='large' />
          ) : (
            category === 'Quote' && <FormatQuote fontSize='large' />
          )}
        </Avatar>
      </Grid>
      <Grid item xs={gridName}>
        <Typography variant='h5' noWrap>
          {name}
        </Typography>
      </Grid>
      {data.map((item) => (
        <Grid key={uuid()} item xs={gridData}>
          <Typography variant='h5' noWrap sx={{ opacity: 0.6 }}>
            {item}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

export default TableComponent;
