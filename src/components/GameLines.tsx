import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { GameLine } from '../types';

interface GameLinesProps {
  games: GameLine[];
  mode: 'cash' | 'coin';
  onGamePress?: (game: GameLine) => void;
  onMoreWagersPress?: (game: GameLine) => void;
}

export const GameLines: React.FC<GameLinesProps> = ({
  games,
  mode,
  onGamePress,
  onMoreWagersPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Game Lines</Text>
        <TouchableOpacity>
          <Text style={styles.expandIcon}>▲</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.tableHeader}>
        <View style={styles.teamColumn}>
          <Text style={styles.headerText}>TEAMS</Text>
        </View>
        <View style={styles.oddsColumn}>
          <Text style={styles.headerText}>SPREAD</Text>
        </View>
        <View style={styles.oddsColumn}>
          <Text style={styles.headerText}>MONEY</Text>
        </View>
        <View style={styles.oddsColumn}>
          <Text style={styles.headerText}>TOTAL</Text>
        </View>
      </View>
      
      <View style={styles.gamesList}>
        {games.map((game) => (
          <View key={game.id} style={styles.gameItem}>
            <View style={styles.gameRow}>
              <View style={styles.teamsSection}>
                <View style={styles.teamInfo}>
                  <View style={styles.teamLogoContainer}>
                    <Text style={styles.teamLogo}>⚡</Text>
                  </View>
                  <Text style={styles.teamName}>LA Chargers</Text>
                </View>
                <View style={styles.separator}>
                  <View style={styles.separatorContainer}>
                    <View style={styles.separatorLine} />
                    <Text style={styles.atSymbol}>@</Text>
                    <View style={styles.separatorLine} />
                  </View>
                </View>
                <View style={styles.teamInfo}>
                  <View style={styles.teamLogoContainer}>
                    <Text style={styles.teamLogo}>🦁</Text>
                  </View>
                  <Text style={styles.teamName}>DET Lions</Text>
                </View>
              </View>
              
              <View style={styles.oddsSection}>
                                  <View style={styles.oddsRow}>
                    <TouchableOpacity style={styles.oddsButton}>
                      <Text style={[styles.oddsValue, { color: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode }]}>+1.5</Text>
                      <Text style={[styles.oddsValue, { color: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode }]}>-155</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.oddsButton}>
                      <Text style={[styles.oddsValue, { color: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode }]}>+1.5</Text>
                      <Text style={[styles.oddsValue, { color: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode }]}>-155</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.oddsButton}>
                      <Text style={[styles.oddsValue, { color: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode }]}>+1.5</Text>
                      <Text style={[styles.oddsValue, { color: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode }]}>-155</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.oddsRow}>
                    <TouchableOpacity style={styles.oddsButton}>
                      <Text style={[styles.oddsValue, { color: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode }]}>+1.5</Text>
                      <Text style={[styles.oddsValue, { color: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode }]}>-155</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.oddsButton}>
                      <Text style={[styles.oddsValue, { color: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode }]}>+1.5</Text>
                      <Text style={[styles.oddsValue, { color: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode }]}>-155</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.oddsButton}>
                      <Text style={[styles.oddsValue, { color: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode }]}>+1.5</Text>
                      <Text style={[styles.oddsValue, { color: mode === 'cash' ? COLORS.cashMode : COLORS.coinMode }]}>-155</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
            
            <View style={styles.gameMeta}>
              <Text style={styles.gameDate}>{game.date}</Text>
              <TouchableOpacity
                style={styles.moreWagersButton}
                onPress={() => onMoreWagersPress?.(game)}
              >
                <Text style={styles.moreWagersText}>More Wagers {'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  expandIcon: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  teamColumn: {
    flex: 2,
  },
  oddsColumn: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  gamesList: {
    flex: 1,
  },
  gameItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 8,
  },
  gameInfo: {
    marginBottom: 12,
  },
  teamLogoContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.textPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  teamLogo: {
    fontSize: 14,
  },
  teamName: {
    fontSize: 16,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  gameMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameDate: {
    fontSize: 14,
    color: COLORS.textTertiary,
  },
  moreWagersButton: {
    // No specific styling needed for text link
  },
  moreWagersText: {
    fontSize: 14,
    color: COLORS.accentBlue,
    fontWeight: '500',
  },
  oddsSection: {
    flexDirection: 'column',
  },
  bettingColumn: {
    flex: 1,
    alignItems: 'center',
  },
  oddsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 8,
    gap: 12,
  },
  oddsButton: {
    borderWidth: 1,
    borderColor: COLORS.accentBlue,
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 60,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oddsValue: {
    fontSize: 12,
    color: COLORS.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 16,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  teamInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  atSymbol: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginHorizontal: 8,
  },
  separator: {
    marginVertical: 4,
    alignItems: 'flex-start',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 140,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  gameContent: {
    marginBottom: 12,
  },
  gameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamsSection: {
    justifyContent: 'center',
  },

}); 