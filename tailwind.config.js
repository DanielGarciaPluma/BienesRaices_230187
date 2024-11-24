/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      colors: {
        background: '#8D91C7', // Fondo principal
        formBackground: '#FFFFFF', // Fondo formularios 
        primaryText: '#000000', // Texto principal
        secondaryText: '#636363', // Textos secundarios
        action: '#054A91', // Botones de acción
        hoverAction: '#C66DB3', // Hover en botones
        success: '#4CAF50', // Mensajes de éxito
        error: '#FF5252', // Mensajes de error
      },
    },
  },
  plugins: [],
}
