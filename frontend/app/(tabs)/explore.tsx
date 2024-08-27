import { StyleSheet} from 'react-native';


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
   
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Good to go!</ThemedText>
      </ThemedView>

  );
}

const styles = StyleSheet.create({

  titleContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
