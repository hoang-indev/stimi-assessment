import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { COLORS } from '../constants/colors';

interface HeaderProps {
  onBackPress?: () => void;
  onSearchPress?: () => void;
  onLoginPress?: () => void;
  onJoinPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onBackPress,
  onSearchPress,
  onLoginPress,
  onJoinPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Main Header */}
      <View style={styles.mainHeader}>
        <View style={styles.logoContainer}>
          <Text style={styles.crownIcon}>👑</Text>
          <Text style={styles.logoText}>STIMI</Text>
        </View>
        
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.searchButton} onPress={onSearchPress}>
            <Text style={styles.searchIcon}>🔍</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.joinButton} onPress={onJoinPress}>
            <Text style={styles.joinText}>Join</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Back Navigation */}
      {onBackPress && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  crownIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    marginRight: 16,
  },
  searchIcon: {
    fontSize: 20,
    color: COLORS.textPrimary,
  },
  loginButton: {
    backgroundColor: COLORS.buttonBlue,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: 8,
  },
  loginText: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  joinButton: {
    backgroundColor: COLORS.buttonLightBlue,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  joinText: {
    color: COLORS.buttonBlue,
    fontSize: 14,
    fontWeight: '600',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  backIcon: {
    fontSize: 24,
    color: COLORS.textPrimary,
  },
}); 