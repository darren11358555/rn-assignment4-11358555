import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function JobCard({ job, style }) {
  const getImage = (company) => {
    switch (company) {
      case 'Facebook':
        return require('../assets/facebook-logo.png');
      case 'Google':
        return require('../assets/google-logo-job.png');
      case 'Burger King':
        return require('../assets/burger-king-logo.png');
      case 'Beats':
        return require('../assets/beats-logo.png');
      default:
        return require('../assets/facebook-logo.png');
    }
  };

  return (
    <View style={[styles.card, style]}>
      <Image source={getImage(job.company)} style={styles.companyLogo} />
      <View style={styles.info}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>
        <Text style={styles.location}>{job.location}</Text>
        <Text style={styles.salary}>{job.salary}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  companyLogo: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  company: {
    fontSize: 14,
    color: '#666',
  },
  location: {
    fontSize: 12,
    color: '#999',
  },
  salary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
