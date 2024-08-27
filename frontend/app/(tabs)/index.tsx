import { StyleSheet, ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '@/components/button';
import PageTitle from '@/components/page-title';
import LoanCard from '@/components/loan-card';

export default function HomeScreen() {
  const router = useRouter();
  const handlePress = () => {
    router.push('/explore');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <PageTitle
          title="Loan Application Dashboard"
          style={styles.pageTitle}
        />
        <LoanCard
          title="Personal Loan"
          amount="$200,000"
          interest="Interest: 3.5%"
          onClick={handlePress}
          style={styles.blueCardStyle}
        />
        <LoanCard
          title="Home Loan"
          amount="$20,000"
          interest="Interest: 5%"
          onClick={handlePress}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="APPLY FOR LOAN"
          onPress={handlePress}
          variant="solid"
          style={styles.buttonStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 30,
    paddingTop: 80,
  },
  pageTitle: {
    width: '75%',
    paddingTop: 62,
    lineHeight: 34,
    fontSize: 29,
    fontWeight: 'bold',
    fontFamily: 'RobotoBlack',
    marginBottom: 20,
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
    height: 56,
  },
  blueCardStyle: {
    backgroundColor: '#D4FAF5',
    marginBottom: 20,
  },
});