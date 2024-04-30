import { ImageBackground, View } from 'react-native';
import { styles } from './App.style';
import { Input } from './components/Input/Input';
import { DisplayTemp } from './components/DisplayTemp/DisplayTemp';
import city from "./assets/city.jpeg";
import { useState } from 'react';
import { convertTemp, toggleUnit } from "./utils/temperature";
import { ToggleButton } from './components/ToggleButton/ToggleButton';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("F");

  function getConvertedTemp() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      const oppositeUnit = toggleUnit(currentUnit);
      const convertedTemp = convertTemp(inputValue, oppositeUnit);
      return convertedTemp ? convertedTemp.toFixed(1) : "";
    }
  }

  return (
    <ImageBackground source={city} style={styles.background}>
      <View style={styles.container}>
        <View>
          <DisplayTemp temperature={getConvertedTemp()} unit={currentUnit} />
        </View>

        <View style={styles.inputWrapper}>
          <Input defaultValue={0} onChange={setInputValue} />
        </View>

        <View>
          <ToggleButton onPress={() => {
            setCurrentUnit(currentUnit === "F" ? "C" : "F");
          }}
            unit={currentUnit === "F" ? "C" : "F"} />
        </View>
      </View>
    </ImageBackground>
  );
}
