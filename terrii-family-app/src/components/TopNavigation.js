import React, { useRef, useEffect, useState, useMemo } from 'react';
import { View, Text, Pressable, StyleSheet, Animated, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing, Typography } from '../constants/Theme';
import { Ionicons } from '@expo/vector-icons';

// Simple icon mapping using Ionicons (already provided by react-native-vector-icons)
const ICONS = {
  home: 'home-outline',
  moments: 'images-outline',
  community: 'people-outline',
  settings: 'settings-outline'
};

export const NAV_SCREENS = ['home','moments','community','settings'];

export default function TopNavigation({ currentScreen, onNavigate, onShowUpgrade }) {
  const activeIndex = Math.max(0, NAV_SCREENS.indexOf(currentScreen));
  const anim = useRef(new Animated.Value(activeIndex)).current;
  const [navWidth,setNavWidth]=useState(0);
  const [itemWidth,setItemWidth]=useState(0);
  useEffect(()=>{ Animated.spring(anim,{ toValue: activeIndex, useNativeDriver:true, friction:10, tension:140 }).start(); },[activeIndex]);
  useEffect(()=>{ if(navWidth>0){ setItemWidth(navWidth / NAV_SCREENS.length); }},[navWidth]);
  const translateX = useMemo(()=> itemWidth ? anim.interpolate({ inputRange: NAV_SCREENS.map((_,i)=>i), outputRange: NAV_SCREENS.map((_,i)=> i*itemWidth) }) : 0 ,[itemWidth]);
  const handlePress = (screen) => { if(screen!==currentScreen){ onNavigate(screen); } };
  return (
    <SafeAreaView edges={['top']} style={styles.safeWrap}> 
      <View style={styles.wrapper}>      
        <View style={styles.topBar}>        
          <View style={styles.brandRow}>          
            <View style={styles.logoBox}><Text style={styles.logoLetter}>T</Text></View>
            <Text style={styles.brandTitle}>Care Updates</Text>
          </View>
          <View style={styles.actionsRow}>          
            {currentScreen==='settings' ? null : (
              <Pressable style={styles.iconBtn} accessibilityLabel='Notifications'>
                <Ionicons name="notifications-outline" size={20} color={Colors.terriiDarkBlue} />
              </Pressable>
            )}
            <Pressable style={styles.iconBtn} accessibilityLabel='Menu'>
              <Ionicons name="menu" size={22} color={Colors.terriiDarkBlue} />
            </Pressable>
          </View>
        </View>
        <View style={styles.navBar}>        
          <View style={styles.navItemsContainer} onLayout={e=>setNavWidth(e.nativeEvent.layout.width)}>
            {itemWidth>0 && (
              <Animated.View pointerEvents='none' style={[styles.activeIndicator,{ width:itemWidth-8, transform:[{ translateX: Animated.add(translateX, new Animated.Value(4)) }] }]} />
            )}
            {NAV_SCREENS.map((screen,i)=>{
              const isActive = screen===currentScreen;
              return (
                <Pressable key={screen} style={[styles.navItem,{ width:itemWidth }]} onPress={()=>handlePress(screen)} accessibilityRole='tab' accessibilityState={{ selected:isActive }}>
                  <View style={styles.navInner}> 
                    <Ionicons name={ICONS[screen]} size={22} color={isActive? Colors.terriiDarkBlue : '#55606a'} style={styles.navIcon} />
                    <Text style={[styles.navLabel, isActive && styles.navLabelActive]} numberOfLines={1}>{labelFor(screen)}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function labelFor(screen){
  switch(screen){
    case 'home': return 'Home';
    case 'moments': return 'Moments';
    case 'community': return 'Community';
    case 'settings': return 'Settings';
    default: return screen;
  }
}

const styles = StyleSheet.create({
  safeWrap:{ backgroundColor:'rgba(255,255,255,0.96)' },
  wrapper:{ backgroundColor:'transparent', borderBottomWidth:1, borderColor:'rgba(0,0,0,0.06)', shadowColor:'#000', shadowOpacity:0.05, shadowRadius:6, shadowOffset:{width:0,height:2}, elevation:3 },
  topBar:{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:Spacing.lg, paddingTop: Platform.OS==='android'? 4: 0, paddingBottom:Spacing.sm },
  brandRow:{ flexDirection:'row', alignItems:'center' },
  logoBox:{ width:40, height:40, borderRadius:14, backgroundColor: Colors.terriiDarkBlue, alignItems:'center', justifyContent:'center', marginRight:Spacing.sm },
  logoLetter:{ color:'#fff', fontSize:18, fontWeight:'700' },
  brandTitle:{ fontSize:Typography.fontSize.lg, fontWeight:'600', color:Colors.textPrimary },
  actionsRow:{ flexDirection:'row', alignItems:'center' },
  iconBtn:{ width:40, height:40, borderRadius:14, backgroundColor:'rgba(0,0,0,0.04)', alignItems:'center', justifyContent:'center', marginLeft:6 },
  navBar:{ paddingHorizontal:Spacing.lg, paddingBottom:Spacing.sm },
  navItemsContainer:{ flexDirection:'row', alignItems:'center', justifyContent:'flex-start', backgroundColor:'rgba(248,250,252,0.92)', borderWidth:1, borderColor:'rgba(0,0,0,0.06)', borderRadius:36, paddingVertical:4, position:'relative', overflow:'hidden' },
  activeIndicator:{ position:'absolute', top:4, bottom:4, left:0, backgroundColor:'rgba(168,212,242,0.35)', borderRadius:28 },
  navItem:{ height:56, alignItems:'center', justifyContent:'center' },
  navInner:{ alignItems:'center', justifyContent:'center' },
  navIcon:{ marginBottom:2 },
  navLabel:{ fontSize:11, fontWeight:'500', color:'#55606a' },
  navLabelActive:{ color: Colors.terriiDarkBlue, fontWeight:'600' }
});