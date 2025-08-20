import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { BettingOption, OddsData, BettingMode } from '../types';
import { OddsButton } from './OddsButton';

interface BettingCardProps {
  option: BettingOption;
  mode: BettingMode;
  onOddsPress: (odds: OddsData) => void;
  selectedOddsId?: string;
}

export const BettingCard: React.FC<BettingCardProps> = ({
  option,
  mode,
  onOddsPress,
  selectedOddsId,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{option.title}</Text>
        <View style={styles.statusIndicator}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Live</Text>
        </View>
      </View>
      
      <View style={styles.oddsContainer}>
        {option.odds.map((odds) => (
          <OddsButton
            key={odds.id}
            odds={odds}
            mode={mode}
            onPress={onOddsPress}
            isSelected={selectedOddsId === odds.id}
          />
        ))}
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Tap to place bet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    flex: 1,
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.success,
  },
  statusText: {
    fontSize: 12,
    color: COLORS.success,
    fontWeight: '500',
  },
  oddsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 12,
  },
  footerText: {
    fontSize: 12,
    color: COLORS.textTertiary,
    textAlign: 'center',
  },
}); 