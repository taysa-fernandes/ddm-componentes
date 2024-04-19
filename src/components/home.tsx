import React from 'react';
import { View, TouchableOpacity, Text,  Image,  SafeAreaView} from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {styles} from './styles'

interface ClassificationProps {
  text: string;
  positive: boolean;
}
interface ClassificationPropsCards {
  name: string;
  text: string;
  positive: boolean;
}

export const  NavBar = () => {
    return (
      <View style={styles.navbar}>
        <Text style={styles.navText}>Growing</Text>
      </View>
    );
  };
export const ProfileSection = () => {
    return (
      <SafeAreaView>
        <View style={styles.profileSection}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../image/image.png' )} 
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Paul Allen</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.viewProfileButton}>
              <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addUserButton}>
              <Text style={styles.buttonText2}>Add User</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

export const Classification = ({ text, positive }: ClassificationProps) => {
    return (
      <SafeAreaView >
        <FontAwesome name="chevron-up" size={18} color="gray"/>
        <Text> {text} </Text>
      </SafeAreaView>
    );
  };

export  const Card = ({ name, text, positive }: ClassificationPropsCards) => {
    return (
      <SafeAreaView style={styles.card}>
        <View style={styles.divAvatar}>
          <Image
            source={require('../image/image.png' )} 
            style={styles.profileImage}
          />
  
          <View style={styles.divText}>
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
  
        <View style={[styles.divButtons, { backgroundColor: positive ? '#E4EDE5' : '#F7EADC' }]}>
          <Classification text={text} positive={positive} />
  
          <TouchableOpacity style={styles.addUser}>
            <Ionicons name="person-add" size={18} color="gray" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  