import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Typography } from "@mui/material";

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', "Item 5", 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5'];

const HorizontalList = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant='h6' marginLeft={ 5 }>
        Daily
      </Typography>
      <Tabs
        value={ value }
        onChange={ handleChange }
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Horizontal Tabs"
      >
        { items.map((item, index) => (
          <Tab key={ item } label={ item } />
        )) }
      </Tabs>
    </>
  );
};

export default HorizontalList;
