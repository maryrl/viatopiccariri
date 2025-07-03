import { Typography, Button, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 3,
        px: 2,
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Transporte público na sua mão!
      </Typography>
      <Typography variant="h6">
        Planeje suas rotas com agilidade e praticidade!
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/buscar"
        >
          Buscar Rota
        </Button>
        <Button
          variant="outlined"
          size="large"
          component={Link}
          to="/simulacao"
        >
          Simular Viagem
        </Button>
      </Stack>
    </Box>
  );
}

export default Home;
