import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: { flex:1, backgroundColor:'#fff', paddingTop:20 },
  loadingContainer: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#f0f0f0' },
  logo: { width:100, height:100, resizeMode:'contain', alignSelf:'center', marginBottom:20 },
  authContainer: { flex:1, backgroundColor:'#fff' },
  scrollContainer: { flexGrow:1, justifyContent:'center', padding:20 },
  authInput: { height:50, borderColor:'rgba(0,181,226,1)', borderWidth:1, borderRadius:8, marginBottom:15, paddingHorizontal:10 },
  authTitle: { fontSize:24, marginBottom:20, textAlign:'center' },
  authError: { color:'red', marginBottom:10, textAlign:'center' },
  authInfo: { color:'green', marginBottom:10, textAlign:'center' },
  authLinks: { marginTop:20, alignItems:'center' },
  authLinkText: { color:'rgba(0,181,226,1)', marginVertical:5, alignSelf:'center' },
  authLink: { color:'rgba(0,181,226,1)', textDecorationLine:'underline' },
  button: { backgroundColor:'rgba(0,181,226,1)', paddingVertical:15, paddingHorizontal:20, borderRadius:8, alignItems:'center', marginBottom:15 },
  buttonText: { color:'#fff', fontSize:16 },
  passwordRequirements: { fontSize:12, color:'gray', marginBottom:10, textAlign:'left' }
});
