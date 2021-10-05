import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";


export default function MovieDetailScreen({ route }) {

  // TODO: Recieve the movieItem by destructuring route params.
  return (
    <SafeAreaView>
      <ScrollView>
        <Image source = {{ uri: route.params.posterurl }} style = {styles.cellImage}/>
        <Text style = {styles.h1}>
          {route.params.title}
        </Text>
        <Text style = {styles.h3}>
          Released: { route.params.releaseDate } 
        </Text>
        <Text style = {styles.h3}>
          { route.params.genres } 
        </Text>
        <Text style = {styles.h3}>
          {route.params.actors}
        </Text>
        <Text style = {styles.h4}>
          {route.params.storyline}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
