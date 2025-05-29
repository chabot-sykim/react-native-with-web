import Input from 'src/components/Input';
import AppModal from 'src/components/Modal';
import UniversalImage from 'src/components/Image';
import Link from 'src/components/Link';
import {View} from 'react-native';
import {useState} from 'react';
import Button from 'src/components/Button';

export default function Screen() {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  return (
    <View className="p-4">
      <Input value={text} onChangeText={setText} />
      <UniversalImage
        src="https://picsum.photos/200"
        className="w-40 h-40 my-4"
      />
      <Link href="https://reactnative.dev" label="React Native Docs" />

      <Button onPress={() => setVisible(true)} label="모달 열기" />
      <AppModal visible={visible} onClose={() => setVisible(false)} />
    </View>
  );
}
