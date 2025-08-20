import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../constants/colors';

type TabType = 'popular' | 'parlay';

interface ContentTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const ContentTabs: React.FC<ContentTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'popular' && styles.activeTab]}
          onPress={() => onTabChange('popular')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'popular' && styles.activeTabText
          ]}>
            Popular
          </Text>
          {activeTab === 'popular' && <View style={styles.underline} />}
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'parlay' && styles.activeTab]}
          onPress={() => onTabChange('parlay')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'parlay' && styles.activeTabText
          ]}>
            Same Game Parlay
          </Text>
          {activeTab === 'parlay' && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    position: 'relative',
  },
  activeTab: {
    // Active tab styling
  },
  tabText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  activeTabText: {
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
  underline: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: COLORS.tabUnderline,
  },
}); 