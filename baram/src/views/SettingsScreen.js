import { View, Text } from 'react-native';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import GetSettings from '../utils/GetSettings';

export default function SettingsScreen() {
  
  const [selectedUnit, setSelectedUnit] = GetSettings();

  console.log(selectedUnit);

  return (
    <View>
      <Text>Your Temperature will display in:</Text>
      <SelectPicker
        selectedValue={selectedUnit}
        onValueChange={(itemValue) => setSelectedUnit(itemValue)}
      > 
        <SelectPicker.Item label="Celcius" value="metric" />
        <SelectPicker.Item label="Fahrenheit" value="imperial" />
      </SelectPicker>
    </View>
  )
};
