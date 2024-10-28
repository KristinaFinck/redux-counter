import styled, {css, createGlobalStyle} from 'styled-components';
import {ThemeType, theme} from './theme'


export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.colors.primary};
    font-family: Arial, Helvetica, sans-serif;
    color: ${({theme}) => theme.colors.secondary};
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;
type InternalProps = {
    children?: any
    flexDirection?: 'row' | 'column'
    gap?: string
    justifyContent?: string
    alignItems?: string
    maxWidth?: string
    width?: string
    height?: string
    minHeight?: string
    padding?: string

    flex?: string
    border?: string
    alignSelf?: string


}
// Контейнер
export const Container = styled.div<InternalProps>`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection || 'row'};
  gap: ${({gap}) => gap || '30px'};
  justify-content: ${({justifyContent}) => justifyContent || 'space-evenly'};
  align-items: ${({alignItems}) => alignItems || 'center'};
  max-width: ${(props => props.maxWidth && '980px')};
  width: ${({width}) => width};
  padding: ${({padding}) => padding || '20px 0'};
  border: ${({border}) => border || 'solid 2px cyan'};
  border-radius: 10px;
  flex: ${({flex}) => flex || '1'};
  align-self: ${({alignSelf}) => alignSelf};
  
  
  
  @media (max-width: 767px) {
    padding: 5px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
    height: 100vh;
    padding: 5px;
  }

`;

type InputProps = {
    hasError?: boolean
    backgroundColor?: string
    color?: string
    fontSize?: string
    width?: string
    border?: string
    borderRadius?: string
    theme?: ThemeType
    textAlign?: string;
}

export const StyledInput = styled.input<InputProps>`
  background-color: ${({hasError}) => (hasError ? 'lightcoral' : 'lightsteelblue')};
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({fontSize}) => fontSize || '1em'};
  width: ${({width}) => width || '70px'};
  border: 2px solid ${({hasError}) => (hasError ? theme.colors.errorColor : theme.colors.secondary)};
  border-radius: 5px;
  text-align: center;
  
  &:focus {
    outline: none; /* Убираем фокус */
  }
  @media (max-width: 767px) {
    font-size: 1.5em;
  }
`


type SpanType = {
    fontSize?: string
    color?: string
    hasError? : boolean
    theme?: ThemeType
    display?: string
    alignItems?: string
    justifyContent?: string
    whiteSpace?: string
    isMediaIncreaseFontSize?: boolean;

}
export const StyledSpan = styled.span<SpanType>`
  color: ${({hasError, theme, color}) => (hasError ? theme.colors.errorColor : color || theme.colors.secondary)};
  font-size: ${({fontSize}) => fontSize || '1.5em'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media (max-width: 767px) {
    font-size: ${({isMediaIncreaseFontSize}) => isMediaIncreaseFontSize ? '5em' : '1em'};
    white-space: normal;
    word-break: normal;
    text-align: center;
  }
  @media (max-width: 480px) {
    font-size: ${({isMediaIncreaseFontSize}) => isMediaIncreaseFontSize ? '5em' : '2em'};
    white-space: normal;
    text-align: center;
  }
  

`