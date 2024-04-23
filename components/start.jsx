import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ModalComponent = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Start an Instant Meeting</Text>
          <TouchableOpacity
            style={styles.hideButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textStyle}>Start Meeting</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim the background
  },
  modalView: {
    margin: 20,
    backgroundColor: '#2A2A2A',
    borderRadius: 20,
    padding: 35,
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
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  hideButton: {
    marginTop: 15,
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 15,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // Add more styles if needed
});

export default ModalComponent;
