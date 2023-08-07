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
  gridName: number;
  data: string[];
  gridData: number;
}> = ({ category, gridName, data, gridData }): JSX.Element => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={0.9}
        sx={{ display: 'flex', justifyContent: { xs: 'start', md: 'center' } }}
      >
        {category && (
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
        )}
      </Grid>
      <Grid item xs={12} md={gridName}>
        <Typography
          variant='h5'
          noWrap
          sx={{ fontWeight: category ? 'normal' : 'bold' }}
        >
          {data[0]}
        </Typography>
      </Grid>
      {data.slice(1).map((item) => (
        <Grid key={uuid()} item xs={12} md={gridData}>
          <Typography
            variant='h5'
            noWrap
            sx={{
              opacity: category ? 0.6 : 1,
              fontWeight: category ? 'normal' : 'bold',
            }}
          >
            {item}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

export default TableComponent;
