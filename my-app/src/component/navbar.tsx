import React, {  useEffect  } from "react";
import { AppBar , Tab, Tabs,  } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Data , pageADataFetch, pageBDataFetch } from "../redux/data/action";
import { RootState } from "../store";
import BasicTable from "./table";
import { TabPanel } from "./TabPanel";
import { io } from "socket.io-client";

interface Iprops {
  values: string | number;
  setValue: Function
}
let pageA: Data[];
let pageB: Data[];

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

export function NavBar(props: Iprops) {


  const dispatch = useDispatch();

  useEffect(() => {
    let socket = io('http://127.0.0.1:8080')

    socket.on('ftx', (data: any) => {
      console.log('ftx', data)
      pageA = data.pageA
      pageB = data.pageB
      dispatch(pageADataFetch(pageA))
      dispatch(pageBDataFetch(pageB))
    })
  }, [])

  const pageAFromStore = useSelector((state: RootState) => state.data.pageA)
  const pageBFromStore = useSelector((state: RootState) => state.data.pageB)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    props.setValue(newValue);
  };



  return (
    <>
      <AppBar position='relative' className={'testing'}  >
        <Tabs value={props.values} onChange={handleChange} variant="fullWidth" >
          <Tab label="SPOT" {...a11yProps(0)} />
          <Tab label="Future" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={props.values} index={0}>
        <BasicTable data={pageAFromStore} />
      </TabPanel>
      <TabPanel value={props.values} index={1}>
        <BasicTable data={pageBFromStore} />
      </TabPanel>
    </>
  );


} export default NavBar

