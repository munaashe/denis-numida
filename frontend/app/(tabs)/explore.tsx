import { StyleSheet, View } from 'react-native';


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/button';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter();
  const handlePress = () => {
    router.push('/');
  };
  return (

    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Good to go!</ThemedText>
      <View style={styles.buttonContainer}>
        <Button
          title="APPLY FOR LOAN"
          onPress={handlePress}
          variant="solid"
          style={styles.buttonStyle}
        />
      </View>
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
  buttonContainer: {
    padding: 30,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  buttonStyle: {
    alignSelf: 'stretch',
    marginBottom: 28,
    textTransform: 'uppercase',
  },
});
