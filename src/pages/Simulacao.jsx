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
  
  function Simulacao() {
    const [origem, setOrigem] = useState("");
    const [destino, setDestino] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [resultado, setResultado] = useState(null);
  
    const simular = () => {
      // Simulando resposta da simulação
      const simulado = {
        meio: "Van",
        tempoEstimado: "1h 45min",
        precoIda: 6.5,
        precoVolta: 6.5,
      };
      setResultado(simulado);
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
        <Typography variant="h4">Simular Viagem</Typography>
  
        <Stack spacing={2}>
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
          <TextField
            label="Data"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <TextField
            label="Horário"
            type="time"
            InputLabelProps={{ shrink: true }}
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
  
          <Button variant="contained" onClick={simular}>
            Simular
          </Button>
        </Stack>
  
        {resultado && (
          <Card variant="outlined" sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6">Resultado da Simulação</Typography>
              <Typography>Meio: {resultado.meio}</Typography>
              <Typography>Tempo Estimado: {resultado.tempoEstimado}</Typography>
              <Typography>Preço Ida: R$ {resultado.precoIda.toFixed(2)}</Typography>
              <Typography>Preço Volta: R$ {resultado.precoVolta.toFixed(2)}</Typography>
              <Typography>Total: R$ {(resultado.precoIda + resultado.precoVolta).toFixed(2)}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Salvar Simulação</Button>
            </CardActions>
          </Card>
        )}
      </Box>
    );
  }
  
  export default Simulacao;
  