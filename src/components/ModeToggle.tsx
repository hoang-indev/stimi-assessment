import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { BettingMode } from '../types';

interface ModeToggleProps {
  mode: BettingMode;
  onModeChange: (mode: BettingMode) => void;
}

export const ModeToggle: React.FC<ModeToggleProps> = ({
  mode,
  onModeChange,
}) => {
  const translateX = React.useRef(new Animated.Value(mode === 'cash' ? 0 : 1)).current;

  React.useEffect(() => {
    Animated.spring(translateX, {
      toValue: mode === 'cash' ? 0 : 1,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start();
  }, [mode, translateX]);

  const handleToggle = () => {
    const newMode = mode === 'cash' ? 'coin' : 'cash';
    onModeChange(newMode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Betting Mode</Text>
      <TouchableOpacity
        style={styles.toggleContainer}
        onPress={handleToggle}
        activeOpacity={0.8}
      >
        <View style={styles.toggleBackground}>
          <Animated.View
            style={[
              styles.toggleThumb,
              {
                backgroundColor: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode,
                transform: [
                  {
                    translateX: translateX.interpolate({
                      inputRange: [0, 1],
                      outputRange: [4, 36],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
        <View style={styles.labelsContainer}>
          <Text
            style={[
              styles.modeLabel,
              mode === 'cash' && styles.activeModeLabel,
            ]}
          >
            Cash
          </Text>
          <Text
            style={[
              styles.modeLabel,
              mode === 'coin' && styles.activeModeLabel,
            ]}
          >
            Coin
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 16,
  },
  label: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 8,
    fontWeight: '500',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  toggleBackground: {
    width: 60,
    height: 32,
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    padding: 4,
    position: 'relative',
  },
  toggleThumb: {
    width: 24,
    height: 24,
    backgroundColor: COLORS.cashMode,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  labelsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  modeLabel: {
    fontSize: 16,
    color: COLORS.textTertiary,
    fontWeight: '600',
  },
  activeModeLabel: {
    color: COLORS.textPrimary,
  },
}); 