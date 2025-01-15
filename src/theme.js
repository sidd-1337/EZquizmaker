import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#ffbba7',
            main: '#ffab91',
            dark: '#b27765',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffb199',
            main: '#ff9e80',
            dark: '#b26e59',
            contrastText: '#000',
        },
    },
});

export default theme;
