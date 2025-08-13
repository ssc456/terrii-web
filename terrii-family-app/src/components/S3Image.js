import React, { useEffect, useState, useRef } from 'react';
import { Image, View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { Storage } from 'aws-amplify';

/** Simple in‑memory cache to avoid repeated signed URL requests */
const urlCache = new Map();

export default function S3Image({
  s3Key,
  style,
  resizeMode = 'cover',
  fallback = null,
  showDebug = false,
  fadeIn = true,
  children,
}) {
  const [uri, setUri] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const opacityRef = useRef(0);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (!s3Key) {
        setLoading(false); setError(true); return; }
      try {
        setLoading(true); setError(false);
        if (urlCache.has(s3Key)) {
          const cached = urlCache.get(s3Key);
            if (showDebug) console.log('[S3Image] cache hit', s3Key);
            if (!cancelled) { setUri(cached); setLoading(false); }
            return;
        }
        if (showDebug) console.log('[S3Image] fetching signed URL', s3Key);
        const signed = await Storage.get(s3Key, { expires: 3600 });
        if (!cancelled) {
          urlCache.set(s3Key, signed);
          setUri(signed);
        }
      } catch (e) {
        if (showDebug) console.warn('[S3Image] error', s3Key, e);
        if (!cancelled) { setError(true); }
      } finally { if (!cancelled) setLoading(false); }
    };
    load();
    return () => { cancelled = true; };
  }, [s3Key, showDebug]);

  if (loading) {
    return (
      <View style={[styles.loaderContainer, style]}> 
        <ActivityIndicator color="#999" />
        {showDebug && <Text style={styles.debugText}>Loading {s3Key}</Text>}
      </View>
    );
  }

  if (error || !uri) {
    if (fallback) return fallback;
    return (
      <View style={[styles.fallback, style]}>
        <Text style={styles.fallbackText}>No Image</Text>
      </View>
    );
  }

  return (
    <View style={style}>
      <Image source={{ uri }} style={[StyleSheet.absoluteFill, style]} resizeMode={resizeMode} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer:{ alignItems:'center', justifyContent:'center', backgroundColor:'#eee' },
  fallback:{ alignItems:'center', justifyContent:'center', backgroundColor:'#ddd' },
  fallbackText:{ color:'#666', fontSize:12 },
  debugText:{ marginTop:4, fontSize:10, color:'#666' }
});
