import { useSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Blog = () => {
  const searchParams = useSearchParams();
  return (
    <View>
      <Text>Blog 2</Text>
      <Text>{searchParams.id}</Text>
    </View>
  );
};

export default Blog;
