import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '@/components/button';
import PageTitle from '@/components/page-title';
import LoanCard from '@/components/loan-card';
import { GET_LOAN_PRODUCTS } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import client from '@/graphql/client';
import { Key } from 'react';

export default function HomeScreen() {
  const router = useRouter();
  const handlePress = () => {
    router.push('/explore');
  };
  const { loading, error, data } = useQuery(GET_LOAN_PRODUCTS, { client });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading loan products</Text>;
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <PageTitle
          title="Loan Application Dashboard"
          style={styles.pageTitle}
        />

        {data?.loanProducts?.map((loan: { id: Key | null | undefined; name: string; maximumAmount: any; interestRate: any; }) => (
          <LoanCard
            key={loan.id}
            title={loan.name}
            amount={`$${loan.maximumAmount}`}
            interest={loan.interestRate}
            onClick={() => { }}
          />
        ))}
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
    marginTop: 40,
  },
});