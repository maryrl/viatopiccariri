import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    Card,
    CardContent,
    CardActions,
  } from "@mui/material";
  import { useState } from "react";
  
  function BuscaRota() {
    const [origem, setOrigem] = useState("");
    const [destino, setDestino] = useState("");
    const [resultados, setResultados] = useState([]);
  
    const simularBusca = () => {
      // Simulando retorno do backend
      const dadosFake = [
        {
          id: 1,
          tipo: "Ônibus",
          tempo: "30 minutos",
          preco: "R$ 4,50",
        },
        {
          id: 2,
          tipo: "Van",
          tempo: "25 minutos",
          preco: "R$ 6,00",
        },
      ];
      setResultados(dadosFake);
    };
  
    return (
      <Box
        sx={{
          height: "100%",
          maxWidth: "800px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Buscar Rota
        </Typography>
  
        <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
          <TextField
            label="Origem"
            fullWidth
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />
          <TextField
            label="Destino"
            fullWidth
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={simularBusca}
            sx={{ minWidth: "150px" }}
          >
            Buscar
          </Button>
        </Stack>
  
        {resultados.length > 0 && (
          <Box>
            <Typography variant="h6" mt={2}>
              Opções encontradas:
            </Typography>
            <Stack spacing={2} mt={1}>
              {resultados.map((item) => (
                <Card key={item.id} variant="outlined">
                  <CardContent>
                    <Typography variant="h6">{item.tipo}</Typography>
                    <Typography variant="body2">Tempo: {item.tempo}</Typography>
                    <Typography variant="body2">Preço: {item.preco}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ver Detalhes</Button>
                    <Button size="small">Entrar em Contato</Button>
                  </CardActions>
                </Card>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    );
  }
  
  export default BuscaRota;
  