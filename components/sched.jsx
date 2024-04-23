import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateMeetingModal = ({ isModalVisible, setModalVisible }) => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(new Date(selectedDate));
      setShowTimePicker(Platform.OS !== 'ios'); // Show time picker next on Android
    }
  };

  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(Platform.OS === 'ios');
    if (selectedTime) {
      const updatedDate = new Date(date);
      updatedDate.setHours(selectedTime.getHours());
      updatedDate.setMinutes(selectedTime.getMinutes());
      setDate(updatedDate);
    }
  };

  const handleScheduleMeeting = () => {
    console.log(description);
    console.log(date);
    setModalVisible(false);
  };

  const formatDate = (date) => {
    return `${date.toDateString()} ${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.textCloseButton}>×</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Create Meeting</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDescription}
            value={description}
            placeholder="Add a description"
            placeholderTextColor="#999"
            multiline
          />
          <TouchableOpacity style={styles.dateTimeButton} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dateTimeText}>{formatDate(date)}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onDateChange}
            />
          )}
          {showTimePicker && (
            <DateTimePicker
              value={date}
              mode="time"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onTimeChange}
            />
          )}
          <TouchableOpacity style={styles.scheduleButton} onPress={handleScheduleMeeting}>
            <Text style={styles.scheduleText}>Schedule Meeting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
  },
  modalView: {
    width: '80%',
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  textCloseButton: {
    color: '#CCCCCC',
    fontSize: 18,
  },
  modalTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#1A1A1A',
    borderRadius: 5,
    padding: 10,
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  dateTimeButton: {
    width: '100%',
    padding: 12,
    backgroundColor: '#1A1A1A',
    borderRadius: 5,
    marginBottom: 20,
  },
  dateTimeText: {
    color: '#BBBBBB',
    fontSize: 16,
    textAlign: 'center',
  },
  scheduleButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007AFF', // iOS blue color
    borderRadius: 5,
  },
  scheduleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  // Add any additional styles you might need
});

export default CreateMeetingModal;
