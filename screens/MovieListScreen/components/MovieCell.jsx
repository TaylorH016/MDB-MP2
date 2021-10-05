import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../MovieListScreen.styles";

export const MovieCell = ({ movieItem }) => {
  // TODO: Create and return the MovieCell component.
  // HINT: Take a look at the movieCell styles, as well as the video
  // demo in the spec, to figure out what this should look like.

  //change image to url if doesn't work

  return (
    <View>
      <View style = {styles.movieCell}>
        <Image source={{ uri: movieItem.posterurl }} style = {styles.movieCellImage}/>
        <View style = {styles.movieCellRight}>
          <Text style = {styles.movieCellTitle}>
            {movieItem.title}
          </Text>
          <Text style = {styles.movieCellSubtitle}>
            {movieItem.actors}
          </Text>
        </View>
      </View>
    </View>
  );
};
