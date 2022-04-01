import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import useLocalStorage from 'react-use-localstorage';

function Home() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history.push("/login")
  
      }
  }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a) ao meu blog!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://github.com/joaocarloslima/portifolio/blob/master/imagens/bg.jpg?raw=true" alt="" width="950px" height="600px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;