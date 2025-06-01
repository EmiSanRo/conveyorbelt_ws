import Card from "./components/camera_comp";
import ProductTable from "./components/product_table";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <>
      <div>
        <Container sx={{ bgcolor: "pink", height: "100vh" }}>
          <Typography variant="h3">Conveyor Belt Dashboard</Typography>
          <Card title="Huh" description="Hola" />
          <ProductTable />
        </Container>
      </div>
    </>
  );
}

export default App;
