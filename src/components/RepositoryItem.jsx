import { StyleSheet, Image, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    height: 90,
  },
  headerText: {
    display: "flex",
    justifyContent: "space-around",
    padding: 10,
  },
  badge: {
    backgroundColor: "blue",
    padding: 3,
    borderRadius: 3,
    flexGrow: 0,
    flexShrink: 0,
    width: 90,
  },
  badgeText: {
    textAlign: "center",
    color: "#fff",
  },
  text: {
    width: 300,
    flexGrow: 1,
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
        <View
          style={{
            paddingBottom: 10,
            paddingLeft: 10,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Text fontWeight="bold">{item.fullName}</Text>
          <View style={styles.text}>
            <Text color="textSecondary">{item.description}</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Text fontWeight="bold">{item.stargazersCount}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.footerItem}>
          <Text fontWeight="bold">{item.forksCount}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.footerItem}>
          <Text fontWeight="bold">{item.reviewCount}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.footerItem}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
