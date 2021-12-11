


const theme = {
    isDark: true,
    dark: {
        color: 'white',
        bg: 'black'
    },
    light: {
        color: 'black',
        bg: 'white'  
    }
}

const setTheme= (state, theme) => {
    return {...theme, isDark: !state.isDark}
}