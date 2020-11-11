
import React from 'react';
import { Flex, Box } from "reflexbox";
import axios from 'axios';
import {BackgroundWrapper, RightAligned, Title, Desc, ColorName, GeneratorButton, ColorNameTitle, ThemedTxtColor} from "./style";
import './App.css';


const App = (props) => {
  const getRandomHex = () => {
    const letters = '0123456789ABCDEF'.split('');
    let color = '';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const [data, setData] = React.useState({});
  const [query, setQuery] = React.useState("24B1E0");
  const [colorHex, setColorHex] = React.useState("#24B1E0");
  const [colorName, setColorName] = React.useState("Cerulean");
  const [colorRGB, setColorRGB] = React.useState("rgb(36, 177, 224)");
  const [isLoading, setIsLoading] = React.useState(false);
  const [fade, setFade] = React.useState(false);
  const [txtColor, setTxtColor] = React.useState("#fff");

  React.useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.thecolorapi.com/id?hex=${query}`,
      );
      if(mounted){
        setData(result.data);
      } 
      setIsLoading(false);
    };
    fetchData();
  }, [query]);



  const onGenerateColor = () => {
    const name = data.name.value;
    const hex = data.hex.value;
    const rgb = data.rgb.value;
    setQuery(getRandomHex());
    setColorName(name);
    setColorHex(hex);
    setColorRGB(rgb);
    setFade(true);

    const hexTxt = query;
    console.log("txt", hexTxt);
    const firstChar = hexTxt.charAt(0);
    console.log(firstChar);
    if(firstChar === "0" || firstChar === "1" || firstChar === "2" || firstChar === "3"){
      setTxtColor("#ffffff");
    } else {
      setTxtColor("#191919");
    }
  }


  return (
    <>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <BackgroundWrapper justifyContent="flex-start" alignItems="center" width={1} bgColor={colorHex} onAnimationEnd={() => !fade} className={fade ? 'fade' : ''}>
        <Box width={1 / 2}>
          <RightAligned flexDirection="column" p={6} justifyContent="flex-end">
            <Box width={1}>
              <ColorName color={txtColor}>{colorHex}</ColorName>
            </Box>
            <Box width={1}>
              <Flex justifyContent="flex-end">
                <Box pr={3}>
                  <ColorNameTitle color={txtColor}>RGB</ColorNameTitle>
                  <ThemedTxtColor color={txtColor}>{colorRGB}</ThemedTxtColor>
                </Box>
                <Box>
                  <ColorNameTitle color={txtColor}>Name</ColorNameTitle> 
                  <ThemedTxtColor color={txtColor}>{colorName}</ThemedTxtColor></Box>
              </Flex>
            </Box>
          </RightAligned>
        </Box>
        <Box width={1 / 2}>
          <Flex flexDirection="column">
            <Box width={1}>
              <Title color={txtColor}>Color of the Day</Title>
            </Box>
            <Box width={1} mb={4}>
              <Desc color={txtColor}>Click the button and generate the lucky color of your day!</Desc>
            </Box>
            <Box>
              <GeneratorButton id="colorSubmit" onClick={onGenerateColor} bgColor={colorHex} color={txtColor}>Generate a Color!</GeneratorButton>
            </Box>
          </Flex>
        </Box>
      </BackgroundWrapper>
    )}
    </>
  );
}

export default App;
