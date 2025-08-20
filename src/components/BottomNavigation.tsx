import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../constants/colors';

type TabType = 'home' | 'sports' | 'myBets' | 'liveNow' | 'account';

interface BottomNavigationProps {
  activeTab: TabType;
  onTabPress: (tab: TabType) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabPress,
}) => {
  const tabs = [
    { id: 'home' as TabType, icon: '🏠', label: 'Home' },
    { id: 'sports' as TabType, icon: '🏀', label: 'Sports' },
    { id: 'myBets' as TabType, icon: '💰', label: 'My Bets' },
    { id: 'liveNow' as TabType, icon: '▶️', label: 'Live Now' },
    { id: 'account' as TabType, icon: '👤', label: 'Account' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.tab}
            onPress={() => onTabPress(tab.id)}
          >
            <Text style={[
              styles.tabIcon,
              isActive ? styles.activeTabIcon : styles.inactiveTabIcon
            ]}>
              {tab.icon}
            </Text>
            <Text style={[
              styles.tabLabel,
              isActive ? styles.activeTabLabel : styles.inactiveTabLabel
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  activeTabIcon: {
    color: COLORS.bottomNavActive,
  },
  inactiveTabIcon: {
    color: COLORS.bottomNavInactive,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  activeTabLabel: {
    color: COLORS.bottomNavActive,
  },
  inactiveTabLabel: {
    color: COLORS.bottomNavInactive,
  },
}); 