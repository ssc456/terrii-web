import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Typography, Spacing } from '../constants/Theme';
export default function LoadingScreen(){
  return (
    <LinearGradient colors={[Colors.terriiBlue, Colors.terriiGreen]} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>TERRii Family</Text>
        <Text style={styles.subtitle}>Connecting families with care</Text>
        <ActivityIndicator size="large" color={Colors.terriiDarkBlue} style={styles.loader} />
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({ container:{flex:1,justifyContent:'center',alignItems:'center'}, content:{alignItems:'center',paddingHorizontal:Spacing.xl}, title:{fontSize:Typography.fontSize.xxxl,fontWeight:'bold',color:Colors.textPrimary,marginBottom:Spacing.sm,textAlign:'center'}, subtitle:{fontSize:Typography.fontSize.lg,color:Colors.textSecondary,marginBottom:Spacing.xl,textAlign:'center'}, loader:{marginTop:Spacing.lg} });
