import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

const ExamAddScreen = ({ navigation }) => {
  const [examName, setExamName] = useState('');
  const [date, setDate] = useState('');
  const [subjects, setSubjects] = useState([
    { name: 'Matematik', correct: '', wrong: '', blank: '' },
    { name: 'Fizik', correct: '', wrong: '', blank: '' },
    { name: 'Kimya', correct: '', wrong: '', blank: '' },
  ]);

  const handleSubjectChange = (index, field, value) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  const handleSave = () => {
    // Burada sınavı kaydetme işlemi yapılacak (ileride eklenecek)
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <View style={styles.flexContent}>
        <Text style={styles.header}>Sınav Ekle</Text>
        <View style={styles.formRow}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Sınav Adı</Text>
            <TextInput
              style={styles.input}
              placeholder="Örn: TYT Deneme 6"
              value={examName}
              onChangeText={setExamName}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Tarih</Text>
            <TextInput
              style={styles.input}
              placeholder="GG.AA.YYYY"
              value={date}
              onChangeText={setDate}
            />
          </View>
        </View>
        <Text style={styles.sectionTitle}>Dersler</Text>
        <View style={styles.subjectsRow}>
          {subjects.map((subject, idx) => (
            <View key={subject.name} style={styles.subjectCard}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <View style={styles.subjectInputsRow}>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Doğru</Text>
                  <TextInput
                    style={[styles.smallInput, { borderColor: '#2ecc71' }]}
                    keyboardType="numeric"
                    value={subject.correct}
                    onChangeText={v => handleSubjectChange(idx, 'correct', v)}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Yanlış</Text>
                  <TextInput
                    style={[styles.smallInput, { borderColor: '#e74c3c' }]}
                    keyboardType="numeric"
                    value={subject.wrong}
                    onChangeText={v => handleSubjectChange(idx, 'wrong', v)}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Boş</Text>
                  <TextInput
                    style={[styles.smallInput, { borderColor: '#f1c40f' }]}
                    keyboardType="numeric"
                    value={subject.blank}
                    onChangeText={v => handleSubjectChange(idx, 'blank', v)}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  flexContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  formGroup: {
    flex: 1,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ecf0f1',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginVertical: 8,
    textAlign: 'center',
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
    padding: 10,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  subjectName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  subjectInputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputGroup: {
    flex: 1,
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  smallInput: {
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    padding: 6,
    fontSize: 14,
    borderWidth: 1.5,
    width: 45,
    textAlign: 'center',
    marginBottom: 2,
  },
  saveButton: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ExamAddScreen; 