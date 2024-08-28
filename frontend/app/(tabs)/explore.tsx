import { ScrollView, StyleSheet, View } from 'react-native';
import Button from '@/components/button';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { LoanRequestDetails } from '@/utils/types';
import PageTitle from '@/components/page-title';
import Input from '@/components/input';

const initialState: LoanRequestDetails = {
  applicantName: '',
  email: '',
  amount: 0,
  purpose: ''
}

export default function TabTwoScreen() {
  const router = useRouter();
  const [loanDetails, setLoanDetails] = useState<LoanRequestDetails>(initialState)
  const handlePress = () => {
    router.push('/');
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <PageTitle
          title='Apply for a loan'
          style={styles.pageTitle}
        />
        <View style={styles.inputContainer}>
          <Input
            onChange={() => { }}
            placeholder='Full Name'
            value=''
            title='Full Name'
          />
          <Input
            onChange={() => { }}
            placeholder='yourname@example.com'
            value=''
            title='Email'
          />
          <Input
            onChange={() => { }}
            placeholder='UGX'
            value=''
            title='Loan Amount'
          />
          <Input
            onChange={() => { }}
            placeholder='UGX'
            value=''
            title='Loan Purpose'
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="SUBMIT"
            onPress={handlePress}
            variant="solid"
            style={styles.buttonStyle}
          />
        </View>
      </ScrollView>
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
    paddingTop: 64,
    lineHeight: 37.5,
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'RobotoBlack',
    marginBottom: 20,
  },
  inputContainer: {
    marginTop:20,
    marginBottom: 64,
  },
  buttonContainer: {
    padding: 0,
  },
  buttonStyle: {
    alignSelf: 'stretch',
    marginBottom: 28,
    textTransform: 'uppercase',
    height: 56,
  },
});
