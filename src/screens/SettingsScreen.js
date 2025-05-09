import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
  TouchableOpacity,
} from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Ayarlar</Text>
        <View style={styles.profileCard}>
          <View style={styles.avatar}><Text style={styles.avatarText}>FB</Text></View>
          <View>
            <Text style={styles.profileName}>Ferhat Bozkurt</Text>
            <Text style={styles.profileEmail}>ferhat@example.com</Text>
            <Text style={styles.profileGoal}>Hedef: 90+ net</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tema</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Koyu Mod</Text>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              thumbColor={isDarkMode ? '#3498db' : '#ccc'}
              trackColor={{ true: '#a3d3f7', false: '#eee' }}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bildirimler</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Bildirimleri Aç</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              thumbColor={notifications ? '#2ecc71' : '#ccc'}
              trackColor={{ true: '#b7f7d3', false: '#eee' }}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
        </TouchableOpacity>
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
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  profileEmail: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  profileGoal: {
    fontSize: 14,
    color: '#2ecc71',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  label: {
    fontSize: 16,
    color: '#34495e',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen; 