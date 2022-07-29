import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#ebebeb',
        color: 'blackAlpha.900',
      },
    },
  },
  colors: {
    primary: {
      50: '#FFF9BD',
      100: '#FFF693',
      200: '#FFF693',
      300: '#FFF583',
      400: '#FFF372',
      500: '#fff159',
      600: '#E6D950',
      700: '#CCC147',
      800: '#BFB543',
      900: '#BFB543',
    },
    secondary: {
      ...theme.colors.messenger,
      100: theme.colors.messenger[50],
      50: `rgba(65,137,230,.15)`,
    },
    success: theme.colors.whatsapp,
    error: theme.colors.red,
    warning: theme.colors.orange,
  },
  sizes: {
    container: {
      xl: '1200px',
    },
  },
});
