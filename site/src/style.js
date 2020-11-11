import styled from '@xstyled/styled-components';
import { th, css } from '@xstyled/system';
import { Flex } from "reflexbox";


export const BackgroundWrapper = styled(Flex)`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
font-size: ${th.fontSize(5)};
font-weight: 600;
margin: ${th.space(2)} 0;
color: ${(props) => props.color};
`;

export const Desc = styled.p`
font-size: ${th.fontSize(3)};
margin: 0;
color: ${(props) => props.color};
`;

export const RightAligned = styled(Flex)`
text-align: right;
`;

export const ColorName = styled.h2`
font-size: ${th.fontSize(8)};
margin: 0;
letter-spacing: ${th.space(1)};
color: ${(props) => props.color};
`;

export const ThemedTxtColor = styled.span`  
color: ${(props) => props.color};
`;

export const GeneratorButton = styled.button`
padding: ${th.space(2)} ${th.space(5)};
cursor: pointer;
font-size: ${th.fontSize(3)};
font-weight: ${th.fontWeight(600)};
width: 40%;
max-width: 300px;
border-radius: ${th.space(8)};
color: ${(props) => props.color};
background-color: ${(props) => props.bgColor};
border: solid 3px ${(props) => props.color};
`;

export const ColorNameTitle = styled.span`
  font-weight: 600;
  padding-right: ${th.space(2)};
  color: ${(props) => props.color};
`;



