/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

import AirbnbCerealBook from './fonts/AirbnbCerealBook.woff';
import AirbnbCerealLight from './fonts/AirbnbCerealLight.woff';
import AirbnbCerealMedium from './fonts/AirbnbCerealMedium.woff';

export const CssReset = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
    vertical-align: baseline;
    scroll-behavior: smooth;
	box-sizing: border-box;
	-moz-osx-font-smoothing: auto;
	-webkit-font-smoothing: auto;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

@font-face {
font-family: 'Airbnb Cereal App Book';
font-style: normal;
font-weight: normal;
src: local('Airbnb Cereal App Book'), url(${AirbnbCerealBook}) format('woff');
}
    
    
@font-face {
font-family: 'Airbnb Cereal App Light';
font-style: normal;
font-weight: normal;
src: local('Airbnb Cereal App Light'), url(${AirbnbCerealLight}) format('woff');
}


@font-face {
font-family: 'Airbnb Cereal App Medium';
font-style: normal;
font-weight: normal;
src: local('Airbnb Cereal App Medium'), url(${AirbnbCerealMedium}) format('woff');
}
`;
