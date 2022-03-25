import {Grid, Box, Typography, Button} from "@material-ui/core";

//import {Box, Paper, Button} from "@material-ui/core";

import "./Home.css";


function Home(){
    return (
        <>
           <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo' > Seja bem Vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo' >Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1} >
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens </Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i0.wp.com/derzweifel.com/wp-content/uploads/2021/04/frozen-2-recensione.jpg?fit=1920%2C1080&ssl=1" alt="Imagem Aula" width="900px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
