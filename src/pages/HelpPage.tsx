import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import StepperComponent from '../components/StepperComponent';
import { useState } from 'react';
import MasonryImageList from '../components/MasonryImageList';
import TransferListComponent from '../components/TransferListComponent';
import RatingComponent from '../components/RatingComponent';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const HelpPage = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Help" {...a11yProps(0)} />
          <Tab label="Image List" {...a11yProps(1)} />
          <Tab label="Transfer List" {...a11yProps(2)} />
          <Tab label="Ratting" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <StepperComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <MasonryImageList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TransferListComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <RatingComponent />
      </CustomTabPanel>
    </Box>
  );
};

export default HelpPage;
