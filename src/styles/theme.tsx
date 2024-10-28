export type ThemeType = {
    colors: {
        primary: string;
        secondary: string;
        errorColor: string
    }
}
export const theme:ThemeType = {
    colors: {
        primary: 'black',
        secondary: 'cyan',
        errorColor: 'red'
    },
};