import styled from 'styled-components';

export const GalleryFeaturesContainer = styled.div`
position: relative:
background-color: white;
padding-bottom: 54px;
width: 100%;

&.slide-enter {
    transform: translateY(100%);
    opacity: 0;
}

&.slide-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: all 600ms ease;
}

&.slide-exit {
    transform: translateY(0);
    opacity: 1;
}

&.slide-exit-active {
    transform: translateY(100%);
    opacity: 0;
    transition: all 600ms ease;
}
`;

export const Header = styled.div`
height: 48px;
width: 100%;
position: fixed;
background-color: white;
z-index: 2;
`;

export const ToggleButton = styled.button`
color: rgb(34, 34, 34);
height: 32px;
width: 32px;

position: absolute;
left: 16px;
bottom: 0;

border-radius: 100px;
border-width: 0px;
background-color: white; 

&:focus {
    outline:0;
}

&:hover {
    cursor: pointer;
    background-color: rgb(245, 245, 245); 
}
`;

export const Overview = styled.div`
max-width: 1120px;

padding-top: 48px;
margin: 0 auto;
`;

export const OverviewHeadingContainer = styled.div`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 20px;
font-weight: 700px;

padding-top: 14px;
padding-bottom: 30px;
`;

export const OverviewHeadingContainerHeading = styled.h2`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 22px;
line-height: 30px;
font-weight: 400px;
`;

export const OverviewRoomsContainer = styled.div`
max-width: 1120px;
display: flex;
flex-direction: row;
gap: 16px;
flex-wrap: wrap;
`;

export const AmenitiesModule = styled.div`
max-width: 1120px;
margin: 46px auto;

display: grid;
grid-template-columns: minmax(210px, 378px) minmax(436px, 742px);
grid-row-gap: 48px;
`;
