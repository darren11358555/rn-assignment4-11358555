// screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import JobCard from '../components/JobCard';

export default function HomeScreen({ route }) {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', location: 'Accra, Ghana', salary: '$180,00' },
    { id: '2', title: 'Product Manager', company: 'Google', location: 'California, US', salary: '$160,000/y' },
  ];

  const popularJobs = [
    { id: '1', title: 'Jr Executive', company: 'Burger King', location: 'Los Angeles, US', salary: '$96,000/y' },
    { id: '2', title: 'Product Manager', company: 'Beats', location: 'Florida, US', salary: '$84,000/y' },
    { id: '3', title: 'Product Manager', company: 'Facebook', location: 'Florida, US', salary: '$86,000/y' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={require('../assets/profile-picture.png')} style={styles.avatar} />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search a job or position"
      />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        horizontal
        data={featuredJobs}
        renderItem={({ item }) => <JobCard job={item} style={styles.featuredJobCard} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.featuredList}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
      </View>
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => <JobCard job={item} style={styles.popularJobCard} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  searchInput: {
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  seeAll: {
    fontSize: 14,
    color: '#2E5BFF',
    fontWeight: '600',
  },
  featuredList: {
    marginBottom: 16,
  },
  featuredJobCard: {
    marginRight: 16,
  },
  list: {
    paddingBottom: 16,
  },
  popularJobCard: {
    marginBottom: 12,
  },
});
