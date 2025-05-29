import {Pressable, Text, Linking} from 'react-native';

export default function Link({href, label}: any) {
  return (
    <Pressable onPress={() => Linking.openURL(href)}>
      <Text className="text-blue-500 underline">{label}</Text>
    </Pressable>
  );
}
