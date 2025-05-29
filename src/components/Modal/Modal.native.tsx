import {Modal, View, Text, Pressable} from 'react-native';

export default function AppModal({visible, onClose}: any) {
  return (
    <Modal transparent visible={visible}>
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className="bg-white p-6 rounded-md">
          <Text>앱 모달입니다</Text>
          <Pressable onPress={onClose}>
            <Text className="text-blue-500 mt-4">닫기</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
