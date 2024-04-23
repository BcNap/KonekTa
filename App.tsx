import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView, SafeAreaView, Animated, Easing } from 'react-native';
import ModalComponent from './components/start';
import CreateMeetingModal from './components/sched';
import JoinMeetingModal from './components/join';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isCreateMeetingModalVisible, setCreateMeetingModalVisible] = useState(false);
  const [joinModalVisible, setJoinModalVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0); // Track the selected sidebar item
  const sidebarAnimation = useRef(new Animated.Value(0)).current; // Animation value for sidebar

  const joinMeeting = (link: any) => {
    console.log('Joining meeting with link:', link);
  };

  const handleSidebarItemClick = (index: number) => {
    setSelectedItem(index);
    // Handle navigation or other actions here
  };

  const toggleSidebar = () => {
    // Toggle sidebar state and animate accordingly
    setSidebarOpen(!isSidebarOpen);
    Animated.timing(sidebarAnimation, {
      toValue: isSidebarOpen ? 0 : 1,
      duration: 300, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const sidebarTranslateX = sidebarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0], // Adjust the sidebar width as needed
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={[styles.header, isSidebarOpen && styles.headerWithSidebar]}>
        <Ionicons name="camera-outline" size={24} color="white" style={[styles.cameraIcon, styles.alignLeft]} />
        <TouchableOpacity onPress={() => setSidebarOpen(!isSidebarOpen)}>
          <Ionicons name="menu-outline" size={24} color="white" style={[styles.burgerIcon, styles.alignfarRight]} />
        </TouchableOpacity>
        <Ionicons name="person-circle-outline" size={24} color="white" style={[styles.personIcon, styles.alignLeft]} />
      </View>
  
      {isSidebarOpen && (
        <View style={styles.sidebar}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setSidebarOpen(false)}>
            <Ionicons name="close-outline" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.sidebarHeader}>KonekTa!</Text> {/* Set header to "KonekTa!" */}
          <TouchableOpacity
            style={[styles.sidebarItem, selectedItem === 0 && styles.selectedItem]} // Apply different style for the selected item
            onPress={() => handleSidebarItemClick(0)}
          >
            <Ionicons name="home" size={24} color="white" />
            <Text style={styles.sidebarText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sidebarItem, selectedItem === 1 && styles.selectedItem]} // Apply different style for the selected item
            onPress={() => handleSidebarItemClick(1)}
          >
            <Ionicons name="settings-outline" size={24} color="white" />
            <Text style={styles.sidebarText}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sidebarItem, selectedItem === 2 && styles.selectedItem]} // Apply different style for the selected item
            onPress={() => handleSidebarItemClick(2)}
          >
            <Ionicons name="notifications-outline" size={24} color="white" />
            <Text style={styles.sidebarText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sidebarItem, selectedItem === 3 && styles.selectedItem]} // Apply different style for the selected item
            onPress={() => handleSidebarItemClick(3)}
          >
            <Ionicons name="videocam-outline" size={24} color="white" />
            <Text style={styles.sidebarText}>Recordings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sidebarItem, selectedItem === 4 && styles.selectedItem]} // Apply different style for the selected item
            onPress={() => handleSidebarItemClick(4)}
          >
            <Ionicons name="add" size={24} color="white" />
            <Text style={styles.sidebarText}>Personal Room</Text>
          </TouchableOpacity>
        </View>
      )}
  
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.upcomingMeetingText}>Upcoming Meeting at: 12:30 PM</Text>
            <Text style={styles.timeText}>11:13 PM</Text>
            <Text style={styles.dateText}>Monday, April 22, 2024</Text>
          </View>
          <ModalComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <CreateMeetingModal
            isModalVisible={isCreateMeetingModalVisible}
            setModalVisible={setCreateMeetingModalVisible}
          />
          <TouchableOpacity
            style={[styles.button, styles.green]}
            onPress={() => setModalVisible(true)}
          >
            <View style={styles.buttonContent}>
              <Ionicons name="add-outline" size={24} color="white" style={styles.icon} />
              <Text style={[styles.buttonText, styles.lowerleft]}>New Meeting</Text>
              <View style={styles.lowerLeftsub}>
                <Text style={styles.buttonSubtext}>Start an instant meeting</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.blue]}
            onPress={() => setCreateMeetingModalVisible(true)}
          >
            <View style={styles.buttonContent}>
              <Ionicons name="calendar-outline" size={24} color="white" style={styles.icon} />
              <Text style={[styles.buttonText, styles.lowerleft]}>Schedule Meeting</Text>
              <View style={styles.lowerLeftsub}>
                <Text style={styles.buttonSubtext}>Plan your meeting</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.red]}
            onPress={() => {}}
          >
            <View style={styles.buttonContent}>
              <Ionicons name="videocam-outline" size={24} color="white" style={styles.icon} />
              <Text style={[styles.buttonText, styles.lowerleft]}>View Recordings</Text>
              <View style={styles.lowerLeftsub}>
                <Text style={styles.buttonSubtext}>Check out your recordings</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.yellow]}
            onPress={() => setJoinModalVisible(true)}
          >
            <View style={styles.buttonContent}>
              <Ionicons name="person-add-outline" size={24} color="white" style={styles.icon} />
              <Text style={[styles.buttonText, styles.lowerleft]}>Join Meeting</Text>
              <View style={styles.lowerLeftsub}>
                <Text style={styles.buttonSubtext}>Via invite link</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
  
      <JoinMeetingModal
        isModalVisible={joinModalVisible}
        setModalVisible={setJoinModalVisible}
        joinMeeting={joinMeeting}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181d27',
  },
  header: {
    width: '100%',
    backgroundColor: '#222937',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  headerWithSidebar: {
    zIndex: 1, // Ensure the header is above the sidebar
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    height: '100%',
    backgroundColor: '#181d27',
    paddingVertical: 20,
    paddingHorizontal: 10,
    zIndex: 2, // Ensure the sidebar is above the content
  },
  sidebarItem: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  selectedItem: {
    backgroundColor: 'dodgerblue', 
    borderRadius: 15,
    height: 45,
    width: 220,
  },
  sidebarText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 18,
  },
  sidebarHeader:{
    color: 'white',
    fontSize: 13,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  burgerIcon: {
    marginBottom: 10,
    marginRight: 10, // Adjust spacing as needed
    fontSize: 40,
  },
  personIcon:{
    marginBottom: 10,
    marginRight: 20, // Adjust spacing as needed
    fontSize: 30,
  },
  cameraIcon:{
    marginBottom: 10,
    fontSize: 30,
  },
  alignLeft: {
    marginRight: 0,
    marginLeft: 10,
  },
  alignRight: {
    marginLeft: 0,
    marginRight: 10,
  },
  alignfarRight: {
    marginLeft: 300,
    marginRight: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    zIndex: 0, // Ensure the content is behind the sidebar
  },
  card: {
    backgroundColor: '#2b3447',
    width: '95%',
    height: 300,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 15,
    minWidth: 300,
    maxWidth: 600,
  },
  timeText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 135,
  },
  upcomingMeetingText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 15,
  },
  dateText: {
    color: 'white',
    fontSize: 19,
    textAlign: 'left',
    marginTop: 10,
  },
  contentWithSidebar: {
    marginLeft: '70%', // Shift the content to the right when the sidebar is open
  },
  button: {
    backgroundColor: '#222',
    width: '95%',
    height: 250,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 15,
    minWidth: 300,
    maxWidth: 600,
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
  buttontext: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    paddingBottom: 160,
    fontSize: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lowerLeft: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  lowerleft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingHorizontal: 10,
    paddingBottom: 50,
    paddingLeft: 10,
  },
  lowerLeftsub: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingLeft: 10,
  },
  buttonSubtext: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
