import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const SubjectDetailScreen = ({ route, navigation }) => {
  const { subject } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{subject}</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.overviewCard}>
            <Text style={styles.overviewTitle}>Genel Bakış</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>92%</Text>
                <Text style={styles.statLabel}>Ortalama</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>12</Text>
                <Text style={styles.statLabel}>Sınav</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>+8%</Text>
                <Text style={styles.statLabel}>İlerleme</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Konu Bazlı Performans</Text>
            <View style={styles.topicCard}>
              <View style={styles.topicHeader}>
                <Text style={styles.topicTitle}>Türev</Text>
                <Text style={[styles.topicScore, { color: '#2ecc71' }]}>95%</Text>
              </View>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '95%', backgroundColor: '#2ecc71' }]} />
              </View>
            </View>

            <View style={styles.topicCard}>
              <View style={styles.topicHeader}>
                <Text style={styles.topicTitle}>İntegral</Text>
                <Text style={[styles.topicScore, { color: '#e74c3c' }]}>75%</Text>
              </View>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '75%', backgroundColor: '#e74c3c' }]} />
              </View>
            </View>

            <View style={styles.topicCard}>
              <View style={styles.topicHeader}>
                <Text style={styles.topicTitle}>Limit</Text>
                <Text style={[styles.topicScore, { color: '#f1c40f' }]}>88%</Text>
              </View>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '88%', backgroundColor: '#f1c40f' }]} />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Son Sınavlar</Text>
            <View style={styles.examList}>
              <View style={styles.examItem}>
                <View style={styles.examInfo}>
                  <Text style={styles.examTitle}>TYT Deneme 5</Text>
                  <Text style={styles.examDate}>15 Mart 2024</Text>
                </View>
                <View style={styles.examScore}>
                  <Text style={[styles.scoreText, { color: '#2ecc71' }]}>92%</Text>
                  <Text style={styles.scoreDetail}>24/25</Text>
                </View>
              </View>

              <View style={styles.examItem}>
                <View style={styles.examInfo}>
                  <Text style={styles.examTitle}>TYT Deneme 4</Text>
                  <Text style={styles.examDate}>10 Mart 2024</Text>
                </View>
                <View style={styles.examScore}>
                  <Text style={[styles.scoreText, { color: '#e74c3c' }]}>80%</Text>
                  <Text style={styles.scoreDetail}>20/25</Text>
                </View>
              </View>

              <View style={styles.examItem}>
                <View style={styles.examInfo}>
                  <Text style={styles.examTitle}>TYT Deneme 3</Text>
                  <Text style={styles.examDate}>5 Mart 2024</Text>
                </View>
                <View style={styles.examScore}>
                  <Text style={[styles.scoreText, { color: '#f1c40f' }]}>88%</Text>
                  <Text style={styles.scoreDetail}>22/25</Text>
                </View>
              </View>
            </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2c3e50',
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: '#ffffff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  overviewCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#7f8c8d',
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
  topicCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  topicScore: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#ecf0f1',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  examList: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  examItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  examInfo: {
    flex: 1,
  },
  examTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  examDate: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  examScore: {
    alignItems: 'flex-end',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  scoreDetail: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default SubjectDetailScreen; 