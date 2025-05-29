import {Pressable, Text} from 'react-native';

type ButtonProps = {
  onPress: () => void;
  label: string;
};

export default function Button({onPress, label}: ButtonProps) {
  return (
    <Pressable onPress={onPress} className="bg-blue-500 px-4 py-2 rounded mt-4">
      <Text className="text-white text-center">{label}</Text>
    </Pressable>
  );
}
