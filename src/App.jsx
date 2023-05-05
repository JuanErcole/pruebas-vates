
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './routes/Navigation'
import { Container } from "@mui/material";

function App() {

  return (

    <Container>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Container>
      
    

  )
}

export default App
