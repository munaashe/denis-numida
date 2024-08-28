import { ScrollView, StyleSheet, View } from 'react-native';
import Button from '@/components/button';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { LoanRequestDetails } from '@/utils/types';
import PageTitle from '@/components/page-title';
import Input from '@/components/input';
import { validateEmail } from '@/utils/validators';

const initialState: LoanRequestDetails = {
  applicantName: '',
  email: '',
  amount: 0,
  purpose: ''
};

export default function TabTwoScreen() {
  const router = useRouter();
  const [loanDetails, setLoanDetails] = useState<LoanRequestDetails>(initialState);

  const handleChange = (name: keyof LoanRequestDetails, value: string | number) => {
    setLoanDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!validateEmail(loanDetails.email)) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch(`${process.env.API_URL}/apply-loan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: loanDetails.applicantName,
          email: loanDetails.email,
          loan_amount: loanDetails.amount,
          loan_purpose: loanDetails.purpose,
        }),
      });

      if (response.ok) {
        alert('Loan application submitted successfully');
        router.push('/');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Something went wrong'}`);
      }
    } catch (error) {
      alert('Error submitting loan application');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <PageTitle title="Apply for a loan" style={styles.pageTitle} />
        <View style={styles.inputContainer}>
          {Object.entries(loanDetails).map(([key, value]) => {
            let placeholder = '';
            let title = ''

            switch (key) {
              case 'applicantName':
                title = 'Full Name'
                placeholder = 'Full Name';
                break;
              case 'email':
                title = 'Email'
                placeholder = 'yourname@example.com';
                break;
              case 'amount':
                title = 'Loan Amount'
                placeholder = 'UGX';
                break;
              case 'purpose':
                title = 'Loan Purpose'
                placeholder = 'Purpose of Loan';
                break;
              default:
                placeholder = '';
            }

            return (
              <Input
                key={key}
                title={title}
                placeholder={placeholder}
                value={value}
                onChange={(text) => handleChange(key as keyof LoanRequestDetails, text)}
              />
            );
          })}
        </View>
        <View style={styles.buttonContainer}>
          <Button title="SUBMIT" onPress={handleSubmit} variant="solid" style={styles.buttonStyle} />
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
    marginTop: 20,
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