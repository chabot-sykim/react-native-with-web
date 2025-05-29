import {View, Text} from 'react-native';
import Button from 'src/components/Button';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white min-h-screen">
      <Text className="text-2xl font-bold text-blue-500">Web View</Text>
      <Button onClick={() => alert('Clicked')}>버튼</Button>
    </View>
  );
}
