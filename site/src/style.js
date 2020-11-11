import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
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
`;

export const Desc = styled.p`
font-size: ${th.fontSize(3)};
margin: 0;
`;

export const RightAligned = styled(Flex)`
text-align: right;
`;

export const ColorName = styled.h2`
font-size: ${th.fontSize(8)};
margin: 0;
letter-spacing: ${th.space(1)};
`;

export const ColorButton = styled.button`
padding: ${th.space(2)} ${th.space(5)};
cursor: pointer;
font-size: ${th.fontSize(3)};
width: 40%;
max-width: 300px;
border-radius: ${th.space(8)};
color: #fff;
background-color: #4d4d4d;
border: solid 1px #ccc;
`;

export const ColorNameTitle = styled.span`
  font-weight: 600;
  padding-right: ${th.space(2)};
`;



