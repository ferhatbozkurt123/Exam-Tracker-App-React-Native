import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

const mockStats = {
  totalExams: 12,
  average: 85,
  bestExam: { name: 'TYT Deneme 5', score: 92 },
  worstExam: { name: 'AYT Deneme 2', score: 68 },
  subjects: [
    { name: 'Matematik', percent: 92 },
    { name: 'Fizik', percent: 78 },
    { name: 'Kimya', percent: 85 },
  ],
};

const StatisticsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>İstatistikler</Text>
        <View style={styles.summaryRow}>
          <View style={[styles.summaryCard, { backgroundColor: '#3498db' }]}> 
            <Text style={styles.summaryValue}>{mockStats.totalExams}</Text>
            <Text style={styles.summaryLabel}>Toplam Sınav</Text>
          </View>
          <View style={[styles.summaryCard, { backgroundColor: '#2ecc71' }]}> 
            <Text style={styles.summaryValue}>{mockStats.average}%</Text>
            <Text style={styles.summaryLabel}>Ortalama</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ders Bazlı Başarı</Text>
          <View style={styles.barChart}>
            {mockStats.subjects.map(subject => (
              <View key={subject.name} style={styles.barRow}>
                <Text style={styles.barLabel}>{subject.name}</Text>
                <View style={styles.barBg}>
                  <View style={[styles.barFill, { width: `${subject.percent}%`, backgroundColor: subject.percent >= 85 ? '#2ecc71' : subject.percent >= 75 ? '#f1c40f' : '#e74c3c' }]} />
                </View>
                <Text style={styles.barPercent}>{subject.percent}%</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Özet</Text>
          <View style={styles.overviewCard}>
            <Text style={styles.overviewText}>En iyi sınav: <Text style={styles.bold}>{mockStats.bestExam.name}</Text> ({mockStats.bestExam.score}%)</Text>
            <Text style={styles.overviewText}>En düşük sınav: <Text style={styles.bold}>{mockStats.worstExam.name}</Text> ({mockStats.worstExam.score}%)</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 24,
    marginTop: 8,
    textAlign: 'center',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  summaryCard: {
    flex: 1,
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
  },
  barChart: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  barRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  barLabel: {
    width: 80,
    fontSize: 15,
    color: '#34495e',
    fontWeight: 'bold',
  },
  barBg: {
    flex: 1,
    height: 14,
    backgroundColor: '#ecf0f1',
    borderRadius: 7,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 7,
  },
  barPercent: {
    width: 40,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'right',
  },
  overviewCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  overviewText: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
    color: '#3498db',
  },
});

export default StatisticsScreen; 