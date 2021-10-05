import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { SafeAreaView, FlatList, Button, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import { MovieCell } from "./components/MovieCell";
import { styles } from "./MovieListScreen.styles";

// We can use JSON files by simply requiring them.
const TABLE_DATA = require("../../assets/movies.json");

// Input: navigation & route params, which we recieve through React Navigation
// Output: a screen containing the list of movies
export default function MovieListScreen({ navigation, route }) {
  const [search, setSearch] = useState("");

  const [actors, setActors] = useState([]);

  // TODO: Fill out the methods below.
  const selectedMovie = (movieItem) => {
    navigation.navigate("About This Movie", movieItem);
  };

  const selectedFilterButton = () => {
    navigation.navigate("Filter", {actors: actors});
  }

  useEffect(
    () => {
      // TODO: Add a "Filter" button to the right bar button.
      // It should lead to the MovieFilterScreen, and pass the "actors" state
      // variable as a parameter.
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={selectedFilterButton} title="Filter"/>
        )
      })
    },
    [actors]
  );

  useEffect(
    () => {
      if (route.params?.actors) {
        setActors(route.params.actors)
      }

      /* TODO: Recieve the updated list of actors from the filter screen here. 
          See https://reactnavigation.org/docs/params/#passing-params-to-a-previous-screen
          for an example of how to send data BACKWARDS in the navigation stack.
      */
    },
    [route]
  );

  // Renders a row of the FlatList.
  const renderItem = ({ item }) => {
    const overlapFound = (listA, listB) => {
      let foundActor = false;
      listA.forEach((x) => {
        if (listB.includes(x)) {
          foundActor = true;
        }
      });
      return foundActor;
    };

    // TODO: Set up search & filter criteria.
    let meetsSearchCriteria = item.title.toLowerCase().includes(search.toLowerCase());
    let meetsActorsCriteria = actors.length == 0 || overlapFound(actors, item.actors);

    if (meetsSearchCriteria && meetsActorsCriteria) {
      // TODO: Return a MovieCell, wrapped by a TouchableOpacity so we can handle taps.
      return (<TouchableOpacity onPress = {() => selectedMovie(item)}>
        <MovieCell movieItem = {item}></MovieCell>
      </TouchableOpacity>);
    } else {
      // If the item doesn't meet search/filter criteria, then we can
      // simply return null and it won't be rendered in the list!
      return null;
    }
  };

  // Our final view consists of a search bar and flat list, wrapped in
  // a SafeAreaView to support iOS.
    return (
      <SafeAreaView>
        <SearchBar 
          placeholder = "Search"
          onChangeText = {setSearch}
          value = {search}
        />
        <FlatList
          data = {TABLE_DATA}
          renderItem = {renderItem}
          extraData = {search} />
      </SafeAreaView>
    );
}
