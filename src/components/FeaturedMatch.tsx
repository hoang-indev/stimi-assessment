import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/colors';

interface FeaturedMatchProps {
  awayTeam: {
    name: string;
    logo: string;
  };
  homeTeam: {
    name: string;
    logo: string;
  };
  date: string;
  peoplePlaced: number;
  onPress?: () => void;
}

export const FeaturedMatch: React.FC<FeaturedMatchProps> = ({
  awayTeam,
  homeTeam,
  date,
  peoplePlaced,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={[COLORS.gradientStart, COLORS.gradientEnd]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.content}>
          <View style={styles.topSection}>
            <View style={styles.peoplePlaced}>
              <Text style={styles.thumbIcon}>👍</Text>
              <Text style={styles.peopleText}>{peoplePlaced} People Placed</Text>
            </View>
          </View>
          
          <View style={styles.teamsSection}>
            <View style={styles.team}>
              <Text style={styles.teamLogo}>{awayTeam.logo}</Text>
              <Text style={styles.teamName}>{awayTeam.name}</Text>
            </View>
            
            <View style={styles.vsSection}>
              <Text style={styles.vsText}>VS</Text>
            </View>
            
            <View style={styles.team}>
              <Text style={styles.teamLogo}>{homeTeam.logo}</Text>
              <Text style={styles.teamName}>{homeTeam.name}</Text>
            </View>
          </View>
          
          <View style={styles.bottomSection}>
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  gradient: {
    padding: 16,
  },
  content: {
    flex: 1,
  },
  topSection: {
    marginBottom: 16,
  },
  peoplePlaced: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  peopleText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  teamsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  team: {
    alignItems: 'center',
    flex: 1,
  },
  teamLogo: {
    fontSize: 32,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 16,
    color: COLORS.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  vsSection: {
    paddingHorizontal: 16,
  },
  vsText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  bottomSection: {
    alignItems: 'flex-end',
  },
  dateText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
}); 