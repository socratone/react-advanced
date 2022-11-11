import {
  Button,
  Chip,
  Container,
  createTheme,
  Divider,
  ThemeProvider,
  Typography,
} from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['primary'];
  }
  interface PaletteOptions {
    custom: PaletteOptions['primary'];
  }
  interface TypeText {
    teritary: string;
  }
}

// https://stackoverflow.com/questions/46486565/mui-customize-button-color
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: '#fff0f0',
    },
    text: {
      primary: '#4c6bd1',
      secondary: '#91a5e6',
      teritary: '#c5d1fa',
      disabled: '#b1b1b1',
    },
  },
});

const CustomMuiColorThemePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button size="small" variant="contained" color="custom">
          custom contained button
        </Button>
        <Button size="small" variant="outlined" color="custom">
          custom outlined button
        </Button>

        <Divider />

        <Typography color="primary.main">primary.main</Typography>

        <Divider />

        <Typography color="custom.light">custom.light</Typography>
        <Typography color="custom.main">custom.main</Typography>
        <Typography color="custom.dark">custom.dark</Typography>
        <Typography color="custom.contrastText">custom.contrastText</Typography>

        <Divider />

        <Typography>default</Typography>
        <Typography color="text.primary">text.primary</Typography>
        <Typography color="text.secondary">text.secondary</Typography>
        <Typography color="text.teritary">text.teritary</Typography>
        <Typography color="text.disabled">text.disabled</Typography>

        <Chip label="default chip color is text.primary" />
      </Container>
    </ThemeProvider>
  );
};

export default CustomMuiColorThemePage;
