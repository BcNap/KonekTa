import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const JoinMeetingModal = ({ isModalVisible, setModalVisible, joinMeeting }) => {
  const [meetingLink, setMeetingLink] = useState('');

  const handleJoinMeeting = () => {
    joinMeeting(meetingLink); // Function to handle the actual joining process
    setModalVisible(false); // Close the modal after joining
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
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textStyle}>×</Text>
          </TouchableOpacity>
          <Text style={styles.modalText}>Type the link here</Text>
          <TextInput
            style={styles.input}
            onChangeText={setMeetingLink}
            value={meetingLink}
            placeholder="Meeting link"
            placeholderTextColor="#999999"
            autoCapitalize="none"
            keyboardType="url"
          />
          <TouchableOpacity style={styles.joinButton} onPress={handleJoinMeeting}>
            <Text style={styles.joinButtonText}>Join Meeting</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
    top: 10
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 18
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#1A1A1A',
    fontSize: 16,
  },
  joinButton: {
    backgroundColor: '#0066CC',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2
  },
  joinButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  // ... other styles you may need
});

export default JoinMeetingModal;
