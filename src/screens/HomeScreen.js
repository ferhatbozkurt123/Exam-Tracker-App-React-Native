import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const handleSubjectPress = (subject) => {
    navigation.navigate('SubjectDetail', { subject });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sınav Takip</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileButtonText}>👤</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flexContent}>
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: '#3498db' }]}> 
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Toplam Sınav</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: '#2ecc71' }]}> 
            <Text style={styles.statNumber}>85%</Text>
            <Text style={styles.statLabel}>Ortalama</Text>
          </View>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Ders Bazlı Performans</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subjectsRow}>
          <TouchableOpacity style={[styles.subjectCard, { borderColor: '#2ecc71' }]} onPress={() => handleSubjectPress('Matematik')}>
            <Text style={styles.subjectTitle}>Matematik</Text>
            <Text style={[styles.subjectScore, { color: '#2ecc71' }]}>92%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subjectCard, { borderColor: '#e74c3c' }]} onPress={() => handleSubjectPress('Fizik')}>
            <Text style={styles.subjectTitle}>Fizik</Text>
            <Text style={[styles.subjectScore, { color: '#e74c3c' }]}>78%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subjectCard, { borderColor: '#f1c40f' }]} onPress={() => handleSubjectPress('Kimya')}>
            <Text style={styles.subjectTitle}>Kimya</Text>
            <Text style={[styles.subjectScore, { color: '#f1c40f' }]}>85%</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Son Sınav</Text>
        </View>
        <View style={styles.examCard}>
          <View style={styles.examHeader}>
            <Text style={styles.examTitle}>TYT Deneme 5</Text>
            <Text style={[styles.examScore, { color: '#2ecc71' }]}>85/120</Text>
          </View>
          <Text style={styles.examDate}>15 Mart 2024</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#34495e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButtonText: {
    fontSize: 20,
  },
  flexContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  seeAllButton: {
    fontSize: 14,
    color: '#3498db',
    fontWeight: '500',
  },
  subjectsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  subjectCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  subjectTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 2,
  },
  subjectScore: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  examCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 8,
  },
  examHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  examTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  examDate: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  examScore: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen; 