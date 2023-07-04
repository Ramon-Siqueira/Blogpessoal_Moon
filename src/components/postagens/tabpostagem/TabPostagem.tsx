import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre a Lua</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">A Lua é o único satélite natural da Terra[nota 1] e o quinto maior do Sistema Solar. É o maior satélite natural de um planeta no sistema solar em relação ao tamanho do seu corpo. A Lua encontra-se em rotação sincronizada com a Terra, mostrando sempre a mesma face visível, marcada por mares vulcânicos escuros entre montanhas cristalinas e proeminentes crateras de impacto.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;