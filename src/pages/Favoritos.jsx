import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Stack,
  } from "@mui/material";
  import { useState } from "react";
  
  function Favoritos() {
    const [favoritos, setFavoritos] = useState([
      {
        id: 1,
        origem: "Centro",
        destino: "Universidade",
        meio: "Ônibus",
        tempo: "40 min",
        preco: "R$ 4,50",
      },
      {
        id: 2,
        origem: "Bairro A",
        destino: "Trabalho",
        meio: "Van",
        tempo: "25 min",
        preco: "R$ 6,00",
      },
    ]);
  
    const removerFavorito = (id) => {
      const atualizados = favoritos.filter((f) => f.id !== id);
      setFavoritos(atualizados);
    };
  
    return (
      <Box
        sx={{
          maxWidth: "800px",
          mx: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h4">Minhas Rotas Favoritas</Typography>
  
        {favoritos.length === 0 ? (
          <Typography>Nenhuma rota salva.</Typography>
        ) : (
          <Stack spacing={2}>
            {favoritos.map((rota) => (
              <Card key={rota.id} variant="outlined">
                <CardContent>
                  <Typography variant="h6">
                    {rota.origem} → {rota.destino}
                  </Typography>
                  <Typography>Meio: {rota.meio}</Typography>
                  <Typography>Tempo: {rota.tempo}</Typography>
                  <Typography>Preço: {rota.preco}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Buscar Novamente</Button>
                  <Button size="small" color="error" onClick={() => removerFavorito(rota.id)}>
                    Remover
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Stack>
        )}
      </Box>
    );
  }
  
  export default Favoritos;
  