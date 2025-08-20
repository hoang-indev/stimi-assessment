import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { OddsData, BettingMode } from '../types';

interface OddsButtonProps {
  odds: OddsData;
  mode: BettingMode;
  onPress: (odds: OddsData) => void;
  isSelected?: boolean;
}

export const OddsButton: React.FC<OddsButtonProps> = ({
  odds,
  mode,
  onPress,
  isSelected = false,
}) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start();
  };

  const getOddsColor = () => {
    return mode === 'cash' ? COLORS.cashMode : COLORS.coinMode;
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        style={[
          styles.button,
          isSelected && styles.selectedButton,
          { borderColor: getOddsColor() },
        ]}
        onPress={() => onPress(odds)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.oddsText,
            { color: getOddsColor() },
            isSelected && styles.selectedText,
          ]}
        >
          {odds.value}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.border,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  selectedButton: {
    backgroundColor: COLORS.cardBackground,
  },
  oddsText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  selectedText: {
    color: COLORS.textPrimary,
  },
}); 