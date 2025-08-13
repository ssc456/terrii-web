import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Platform } from 'react-native';
import { Colors, Spacing, Typography } from '../constants/Theme';
import { AppContext } from '../context';
import { Auth } from 'aws-amplify';

export default function SettingsScreen(){
  const { user, signOut } = useContext(AppContext) || {};
  const email = user?.attributes?.email;
  const sub = user?.attributes?.sub;
  const given = user?.attributes?.given_name;
  const family = user?.attributes?.family_name;

  const handleSignOut = async () => {
    try { await signOut(); } catch(e){ Alert.alert('Sign out failed', e.message || ''); }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Account</Text>
      <View style={styles.card}>
        <Row label="Name" value={given || family ? `${given||''} ${family||''}`.trim() : '—'} />
        <Row label="Email" value={email || '—'} />
        <Row label="User ID" value={sub || '—'} mono />
      </View>
      <Text style={styles.header}>Actions</Text>
      <View style={styles.card}>
        <TouchableOpacity style={styles.signOutBtn} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerNote}>Basic settings scaffold. Profile editing & photo upload coming soon.</Text>
    </ScrollView>
  );
}

function Row({ label, value, mono }){
  return (
    <View style={styles.row}> 
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={[styles.rowValue, mono && styles.mono]} numberOfLines={1}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ padding:Spacing.lg, paddingBottom:Spacing.xxl },
  header:{ fontSize:Typography.fontSize.md, fontWeight:'700', color:Colors.textPrimary, marginTop:Spacing.md, marginBottom:Spacing.sm },
  card:{ backgroundColor:Colors.cardBackground || '#fff', borderRadius:16, padding:Spacing.lg, shadowColor:'#000', shadowOpacity:0.05, shadowRadius:8, shadowOffset:{width:0,height:4}, marginBottom:Spacing.lg, borderWidth:1, borderColor:'rgba(0,0,0,0.05)' },
  row:{ flexDirection:'row', alignItems:'center', marginBottom:10 },
  rowLabel:{ flexBasis:90, fontSize:Typography.fontSize.sm, fontWeight:'600', color:Colors.textSecondary },
  rowValue:{ flex:1, fontSize:Typography.fontSize.sm, color:Colors.textPrimary },
  mono:{ fontFamily: Platform.select({ ios:'Menlo', android:'monospace' }), fontSize:12 },
  signOutBtn:{ backgroundColor:Colors.terriiDarkBlue, paddingVertical:14, borderRadius:12, alignItems:'center' },
  signOutText:{ color:'#fff', fontWeight:'700', letterSpacing:0.5 },
  footerNote:{ fontSize:11, color:Colors.textSecondary, textAlign:'center', marginTop:Spacing.lg }
});
