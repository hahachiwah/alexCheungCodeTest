interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && (
          children
        )}
          </div>
        );
  }
  