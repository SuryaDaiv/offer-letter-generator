import React from 'react';
import { Page, Text, Document, StyleSheet, Image, View, Font } from '@react-pdf/renderer';
import header from './Header.png'; // Ensure this file is in your project directory
import footer from './Footer.png'; // Ensure this file is in your project directory

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    color: '#000',
  },

  body: {
    flex: 1,
    fontSize: 12,
    lineHeight: 1.5,
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  bulletPoints: {
    textAlign: 'justify',
    marginLeft: 10,
  },
  section: {
    marginBottom: 10,
    textAlign: 'justify',
  },
  bold: {
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  acceptance: {
    textAlign: 'justify',
    marginTop: 25,
    paddingTop: 10,
    borderTop: 1,
    borderColor: '#ccc',
  },
});

const styleBold = StyleSheet.create({
  bold: {
    fontFamily: 'Helvetica-Bold', // Use the appropriate font family for bold text
  },
});

const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Custom function to calculate the deadline date
const calculateDeadLineDate = (startDate) => {
  const date = new Date(`${startDate}T00:00:00`);
  // Subtract 3 days for the deadline
  date.setDate(date.getDate() - 3);
  return date.toISOString().split('T')[0];
};


const formatDate = (dateString) => {
  // Create a new Date object from the input date string
  const date = new Date(`${dateString}T00:00:00`);

  // Array to hold month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get the month, day, and year components
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Function to add suffix to day
  const addSuffixToDay = (day) => {
    if (day >= 11 && day <= 13) {
      return `${day}th`;
    }
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  // Format the date with the appropriate suffix for the day
  const formattedDate = `${month} ${addSuffixToDay(day)}, ${year}`;

  return formattedDate;
};



const PDFDocument = ({ formData }) => {
  const deadLineDate = formatDate(calculateDeadLineDate(formData.jobStartDate));
  const startDateInPDF = formatDate(formData.jobStartDate);
  const firstName = toTitleCase(formData.firstName);
  const lastName = toTitleCase(formData.lastName);
  const position = toTitleCase(formData.position);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={header} />
        </View>
        <View style={styles.body}>
          <Text style={[styles.title, styleBold.bold]}>OFFER LETTER</Text>
          <Text style={styles.section}>
            Dear {firstName} {lastName},
          </Text>
          <Text style={styles.section}>
            We are delighted to extend to you a full-time position for the role of {position} at Redsun Solutions LLC. 
            Your skills and qualifications have impressed us, and we believe that your contributions will greatly enhance our projects and team.
          </Text>
          <Text style={styleBold.bold}>
            Position Details:</Text>
          <Text style={styles.section}>
            Title: {position} {'\n'}
            Company: Redsun Solutions LLC {'\n'}
            Federal Identification / EIN Number: 86-3621090 {'\n'}
            Start Date: {startDateInPDF}.{'\n'}
          </Text>
          <Text style={styles.section}>
            You will be reporting to Sneha Reddy, who will be supervising you and approving your timesheets.</Text>
          <Text style={styleBold.bold}>
            Position Overview:</Text>
          <Text style={styles.section}>
            As a {position} at Redsun Solutions LLC, you will play an integral role in our software engineering endeavors. 
            Your responsibilities will span the entire software development lifecycle, including design, development, testing, deployment, and operations.
          </Text>
          <Text style={styleBold.bold}>Key Responsibilities:</Text>
          <Text style={styles.bulletPoints}>
            • Design and Development: Collaborate closely with the team to craft and develop top-notch software solutions 
            aligned with project requirements and industry best practices. Your technical expertise will contribute to the project's design and architecture.
          </Text>
          <Text style={styles.bulletPoints}>
            • Testing and Defect Resolution: Detect and resolve defects and glitches throughout the testing, pre-production, production, and post-release phases. 
            Active involvement in testing procedures will ensure software quality and dependability.
          </Text>
          <Text style={styles.bulletPoints}>
            • Cross-functional Collaboration: Forge strong partnerships with various client teams, such as product management and different business units, 
            to comprehend their needs and drive outcomes. 
            Effective cross-functional collaboration guarantees communication and alignment throughout the project lifecycle.
          </Text>
          <Text style={styles.bulletPoints}>
            • Project Design and Architecture: Participate in project design and architecture discussions, bringing forth your insights, suggestions, 
            and inventive ideas to boost software quality, scalability, and maintainability.
          </Text>

          </View>
        <View style={styles.footer}>
          <Image src={footer} />
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={header} />
        </View>
        <View style={styles.body}>


          <Text style={styles.section}>
          <Text style={styleBold.bold}>
            Terms of Employment:{'\n'}</Text>
            Your employment at Redsun Solutions LLC will be on an at-will basis, which means that either party can terminate the employment relationship 
            at any time and for any reason. This letter does not constitute a contract or guarantee of employment for a specific duration.
            {'\n\n'}
            <Text style={styleBold.bold}>
            Work Hours and Location:{'\n'}</Text>
            This position is a remote role, allowing you the flexibility to work from a location of your choice. You will be expected to work 40 hours per week, 
            contributing your time and expertise to our projects and team meetings.
            {'\n\n'}
            <Text style={styleBold.bold}>
            Offer Contingencies:{'\n'}</Text>
            Please note that this offer is contingent upon the successful completion of a satisfactory background check and the submission of a completed I-9 form, 
            as required by law.
            {'\n\n'}
            We are enthusiastic about having you join our team and contribute your expertise to our projects. 
            Please confirm your acceptance of this offer by signing and returning a copy of this letter by {deadLineDate}. If you have any questions or require 
            further clarification, please do not hesitate to contact us at hr@redsunsoln.com.
          </Text>

          <Text style={styles.acceptance}>
            Sincerely,
            {'\n\n\n'}
            Sneha Reddy{'\n'}
            Director of HR
          </Text>
          <Text style={styles.acceptance}>
            Acceptance:{'\n\n'}
            Employee Signature: ______________________________{'\n'}
            Printed Name: ___________________________{'\n'}
            Date: _________________________________
          </Text>
        </View>
        <View style={styles.footer}>
          <Image src={footer} />
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
