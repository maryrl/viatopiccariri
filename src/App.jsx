import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

import Home from "./pages/Home";
import BuscaRota from "./pages/BuscaRota";
import Simulacao from "./pages/Simulacao";
import Favoritos from "./pages/Favoritos";

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleDrawer = (open) => () => setMenuAberto(open);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Buscar Rota", path: "/buscar" },
    { label: "Simular Viagem", path: "/simulacao" },
    { label: "Favoritos", path: "/favoritos" },
  ];

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
              ViaTopicCariri
              </Typography>
              <Drawer anchor="left" open={menuAberto} onClose={toggleDrawer(false)}>
                <List sx={{ width: 200 }}>
                  {navItems.map((item) => (
                    <ListItem
                      button
                      key={item.label}
                      component={Link}
                      to={item.path}
                      onClick={toggleDrawer(false)}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                ViaTopicCariri
              </Typography>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: 16,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          width: "100%",
          minHeight: "calc(100vh - 64px)", // 64px = altura da AppBar
          p: { xs: 2, md: 4 },
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<BuscaRota />} />
          <Route path="/simulacao" element={<Simulacao />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
