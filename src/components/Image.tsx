// components/Image.tsx
import {Platform} from 'react-native';
import {Image as RNImage} from 'react-native';

interface Props {
  src: string;
  alt?: string;
  className?: string;
}

export default function UniversalImage({src, alt, className}: Props) {
  if (Platform.OS === 'web') {
    return <img src={src} alt={alt} className={className} />;
  }
  return <RNImage source={{uri: src}} className={className} />;
}
