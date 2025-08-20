import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { 
  CURRENT_SPORT, 
  FEATURED_MATCH, 
  NFL_GAMES 
} from '../constants/mockData';
import { Header } from '../components/Header';
import { SportSelector } from '../components/SportSelector';
import { FeaturedMatch } from '../components/FeaturedMatch';
import { ContentTabs } from '../components/ContentTabs';
import { GameLines } from '../components/GameLines';
import { BottomNavigation } from '../components/BottomNavigation';
import { ModeToggle } from '../components/ModeToggle';


type TabType = 'popular' | 'parlay';
type BottomTabType = 'home' | 'sports' | 'myBets' | 'liveNow' | 'account';

export const BettingScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('popular');
  const [activeBottomTab, setActiveBottomTab] = useState<BottomTabType>('home');
  const [bettingMode, setBettingMode] = useState<'cash' | 'coin'>('cash');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleBottomTabPress = (tab: BottomTabType) => {
    setActiveBottomTab(tab);
  };

  const handleSportSelectorPress = () => {
    // Handle sport selection
    console.log('Sport selector pressed');
  };

  const handleFeaturedMatchPress = () => {
    // Handle featured match press
    console.log('Featured match pressed');
  };

  const handleGamePress = (game: any) => {
    // Handle game press
    console.log('Game pressed:', game);
  };

  const handleMoreWagersPress = (game: any) => {
    // Handle more wagers press
    console.log('More wagers pressed:', game);
  };

  const handleModeChange = (mode: 'cash' | 'coin') => {
    setBettingMode(mode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <Header 
        onSearchPress={() => console.log('Search pressed')}
        onLoginPress={() => console.log('Login pressed')}
        onJoinPress={() => console.log('Join pressed')}
      />
      
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <SportSelector 
          sport={CURRENT_SPORT}
          onPress={handleSportSelectorPress}
        />
        
        <ModeToggle 
          mode={bettingMode}
          onModeChange={handleModeChange}
        />
        
        <FeaturedMatch 
          awayTeam={FEATURED_MATCH.awayTeam}
          homeTeam={FEATURED_MATCH.homeTeam}
          date={FEATURED_MATCH.date}
          peoplePlaced={FEATURED_MATCH.peoplePlaced}
          onPress={handleFeaturedMatchPress}
        />
        
        <ContentTabs 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        
        <GameLines 
          games={NFL_GAMES}
          mode={bettingMode}
          onGamePress={handleGamePress}
          onMoreWagersPress={handleMoreWagersPress}
        />
      </ScrollView>
      
      <BottomNavigation 
        activeTab={activeBottomTab}
        onTabPress={handleBottomTabPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContainer: {
    flex: 1,
  },
}); 