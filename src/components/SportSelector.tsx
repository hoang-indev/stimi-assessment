import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../constants/colors';

interface SportSelectorProps {
  sport: {
    name: string;
    logo: string;
    gamesAvailable: number;
  };
  onPress?: () => void;
}

export const SportSelector: React.FC<SportSelectorProps> = ({
  sport,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selector} onPress={onPress}>
        <View style={styles.sportInfo}>
          <Text style={styles.sportLogo}>{sport.logo}</Text>
          <Text style={styles.sportName}>{sport.name}</Text>
          <Text style={styles.dropdownIcon}>▼</Text>
        </View>
        <Text style={styles.gamesCount}>{sport.gamesAvailable} Games Available</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  selector: {
    alignItems: 'center',
  },
  sportInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  sportLogo: {
    fontSize: 24,
    marginRight: 8,
  },
  sportName: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginRight: 8,
  },
  dropdownIcon: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  gamesCount: {
    fontSize: 14,
    color: COLORS.textTertiary,
  },
}); 