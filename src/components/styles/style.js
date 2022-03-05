// @ts-nocheck
import Styled from 'styled-components'


export const Container = Styled.View`
background:${(props) => props.theme.colors.bg.primary};
flex:1;
margin-bottom:${(props) => props.theme.space[3]}
`;

export const Title = Styled.Text`  
color:${(props) => props.theme.colors.text.inverse}
font-family:${(props) => props.theme.fonts.body}
`;

export const Image = Styled.Image`  
width: 20px;
height: 20px;  
`;