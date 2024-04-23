import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import ModalComponent from './components/start'; 

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.timeText}>11:48 PM</Text>
        <Text style={styles.dateText}>Wednesday, April 17, 2024</Text>
      </View>
      <ModalComponent 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
      />
      <TouchableOpacity 
        style={[styles.button, styles.green]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>New Meeting</Text>
        <Text style={styles.buttonSubtext}>Start an instant meeting</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.blue]}>
        <Text style={styles.buttonText}>Schedule Meeting</Text>
        <Text style={styles.buttonSubtext}>Plan your meeting</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.red]}>
        <Text style={styles.buttonText}>View Recordings</Text>
        <Text style={styles.buttonSubtext}>Check out your recordings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.yellow]}>
        <Text style={styles.buttonText}>Join Meeting</Text>
        <Text style={styles.buttonSubtext}>Via invite link</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 40,
  },
  timeText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  green: {
    backgroundColor: '#4CAF50',
  },
  blue: {
    backgroundColor: '#2196F3',
  },
  red: {
    backgroundColor: '#F44336',
  },
  yellow: {
    backgroundColor: '#F9A90E', 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSubtext: {
    color: 'white',
    fontSize: 14,
  },
});

export default App;
