import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import map from "../../components/map/map";
import { getLocationAsync } from "../../components/mediaUtils";
import Card from "../../components/card";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Map = () => {
  const [coordinates, setCoordinates] = useState("");

  const mapHtml = map({
    center: [coordinates.latitude, coordinates.longitude],
    coordinates: { lat: coordinates.latitude, long: coordinates.longitude },
    target: { lat: 0, long: 0 },
    zoom: 10,
    places: [
      {
        id: "1",
        placeName: "Centurion Mall",
        description: "A popular shopping center in Centurion",
        type: "Shopping",
        coordinates: [-25.8575, 28.1865],
        joinedCount: 10,
      },
      {
        id: "2",
        placeName: "Irene Dairy Farm",
        description: "A scenic dairy farm with a restaurant and farm animals",
        type: "Farm",
        coordinates: [-25.8729, 28.2324],
        joinedCount: 5,
      },
      {
        id: "3",
        placeName: "SuperSport Park",
        description: "Cricket stadium and sports venue",
        type: "Sports",
        coordinates: [-25.8657, 28.1944],
        joinedCount: 8,
      },
    ],
    from: [0, 0],
    to: [0, 0],
  });

  const getCurrentLocation = async () => {
    const coordinatesResults = await getLocationAsync();
    setCoordinates(coordinatesResults);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search for a location"
        onPress={(data, details = null) => {
          if (details) {
            // Extract the coordinates from the selected location
            const { lat, lng } = details.geometry.location;
            const selectedCoordinates = { latitude: lat, longitude: lng };
            setCoordinates(selectedCoordinates);
          }
        }}
        query={{
          key: "AIzaSyCGR9QXUWLhVqKGL58s0EDQMkvCyCMhXIk",
          language: "en",
          components: "country:za",
        }}
        styles={{
          container: styles.autocompleteContainer,
          textInputContainer: styles.textInputContainer,
          textInput: styles.textInput,
        }}
        debounce={200} 
        fetchDetails={true} 
        enablePoweredByContainer={false}
        minLength={2} 
        numberOfLines={3} 
      />
      <WebView source={{ html: mapHtml }} style={styles.mapContainer} />
      <View style={styles.cardContainer}>
        <Card />
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  autocompleteContainer: {
    position: "absolute",
    top: 20,
    left: 55,
    right: 20,
    zIndex: 9999,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  textInputContainer: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    height: 40,
    color: "#5d5d5d",
    fontSize: 16,
  },
  mapContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  cardContainer: {
    position: "absolute",
    bottom: 160,
    left: 0,
    right: 0,
    height: 0,
    backgroundColor: "white",
  },
});
