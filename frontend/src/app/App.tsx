import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined'
import { AppBar, Box, Button, Container, CssBaseline, Paper, Toolbar, Typography } from '@mui/material'
import { Link, Navigate, Route, Routes } from 'react-router-dom'

function LibraryHome() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Paper variant="outlined" sx={{ p: { xs: 4, md: 7 }, textAlign: 'center' }}>
        <LocalMoviesOutlinedIcon color="primary" sx={{ fontSize: 64 }} />
        <Typography component="h1" variant="h3" sx={{ mt: 2, fontWeight: 700 }}>
          Your movie library, curated by you
        </Typography>
        <Typography color="text.secondary" sx={{ mx: 'auto', mt: 2, maxWidth: 600 }}>
          Keep movies and series organized in one durable, searchable collection.
        </Typography>
        <Button component={Link} to="/media" variant="contained" size="large" sx={{ mt: 4 }}>
          Add your first title
        </Button>
      </Paper>
    </Container>
  )
}

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <LocalMoviesOutlinedIcon sx={{ mr: 1.5 }} />
          <Typography variant="h6" component={Link} to="/" color="inherit" sx={{ textDecoration: 'none', flexGrow: 1 }}>
            Movie Library
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/media" element={<LibraryHome />} />
        <Route path="/" element={<Navigate to="/media" replace />} />
      </Routes>
    </Box>
  )
}
