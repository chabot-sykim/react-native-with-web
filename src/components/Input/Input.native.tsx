import {TextInput, View} from 'react-native';

export default function Input({value, onChangeText}: any) {
  return (
    <View className="border border-gray-300 rounded-md p-2">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        className="text-base"
        placeholder="앱에서 입력"
      />
    </View>
  );
}
