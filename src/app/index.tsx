import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.content}>
        <View style={styles.hero}>
          <View style={styles.brandMark} accessibilityLabel="ScentMirror logo">
            <View style={styles.bottle}>
              <View style={styles.bottleCap} />
              <View style={styles.bottleBody}>
                <View style={styles.bottleDot} />
              </View>
            </View>
            <View style={styles.orbit} />
            <Text style={styles.monogram}>SM</Text>
          </View>
          <Text style={styles.wordmark}>ScentMirror</Text>
          <Text style={styles.tagline}>
            See how others perceive your{"\n"}scent.
          </Text>
        </View>

        <View style={styles.actions}>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push("/signup")}
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.primaryButtonLabel}>Get started</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            onPress={() =>
              router.push({ pathname: "/signup", params: { mode: "login" } })
            }
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.secondaryButtonLabel}>
              I already have an account
            </Text>
          </Pressable>
          <Text style={styles.footer}>
            Bring the perfume you already wear. Nothing new to buy.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1a2b",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 78,
  },
  hero: {
    alignItems: "center",
    paddingTop: 130,
  },
  brandMark: {
    alignItems: "center",
    height: 94,
    justifyContent: "center",
    width: 112,
  },
  bottle: {
    alignItems: "center",
    left: 17,
    position: "absolute",
    top: 0,
    width: 19,
  },
  bottleCap: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    height: 7,
    width: 12,
  },
  bottleBody: {
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 2,
    height: 25,
    justifyContent: "center",
    width: 17,
  },
  bottleDot: {
    borderColor: "#fff",
    borderRadius: 3,
    borderWidth: 1,
    height: 5,
    width: 5,
  },
  orbit: {
    borderColor: "#fff",
    borderRadius: 55,
    borderRightColor: "transparent",
    borderWidth: 5,
    height: 72,
    position: "absolute",
    transform: [{ rotate: "-12deg" }],
    width: 108,
  },
  monogram: {
    color: "#fff",
    fontFamily: "serif",
    fontSize: 42,
    fontStyle: "italic",
    letterSpacing: -12,
    marginLeft: -4,
    marginTop: 14,
  },
  wordmark: {
    color: "#fff",
    fontFamily: "serif",
    fontSize: 28,
    fontStyle: "italic",
    fontWeight: "600",
    marginTop: 30,
  },
  tagline: {
    color: "#eeecf5",
    fontSize: 19,
    lineHeight: 26,
    marginTop: 27,
    textAlign: "center",
  },
  actions: {
    gap: 10,
  },
  primaryButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    height: 52,
    justifyContent: "center",
  },
  primaryButtonLabel: {
    color: "#1b1a2b",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButton: {
    alignItems: "center",
    borderColor: "#fff",
    borderRadius: 14,
    borderWidth: 1.5,
    height: 52,
    justifyContent: "center",
  },
  secondaryButtonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    color: "#d9d4ee",
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
  },
  pressed: { opacity: 0.78 },
});
