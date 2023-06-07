import { Link, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function Login() {
  const router = useRouter();
  const handlePress = () => {
    router.replace('account');
  };
  return (
    <View>
      <Pressable onPress={handlePress}>
        <Text>Login</Text>
      </Pressable>
      <Pressable>
        <Link href={'/settings'}>
          <Text>Go to Settings</Text>
        </Link>
      </Pressable>
    </View>
  );
}
