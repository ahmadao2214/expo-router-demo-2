import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const HomeLayout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Login',
          headerShown: false,
          contentStyle: styles.container,
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerTitle: 'Settings',
          headerRight: () => (
            <Pressable
              style={styles.button}
              onPress={() => {
                router.push('modal');
              }}>
              <Text>Modal</Text>
            </Pressable>
          ),
          contentStyle: styles.container,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{ presentation: 'modal', contentStyle: styles.container }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default HomeLayout;

export const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  back: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#00FFFF',
    padding: 10,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
