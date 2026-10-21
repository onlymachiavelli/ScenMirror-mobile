import { router } from "expo-router"
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function NextStepsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>After your report</Text>
        <Text style={styles.title}>Three ways to act on it</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Keep my perfume, wear it differently
          </Text>
          <Text style={styles.cardText}>
            Tips from your results: where to spray, how much, when to re-apply.
            Nothing to buy.
          </Text>
          <SmallButton label="Show my tips" />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Try a perfume others read as "fresh"
          </Text>
          <View style={styles.line} />
          <Product
            name="Fragrance B"
            detail="Rated fresh, clean by past testers"
            tag="Partner"
          />
          <Product
            name="Fragrance C"
            detail="Rated fresh, elegant by past testers"
            tag="Other brand"
          />
          <Text style={styles.commission}>
            Partner sales earn us a commission. It never changes a rating.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Test again when something changes
          </Text>
          <Text style={styles.cardText}>
            New season, new perfume, big occasion. Your profile keeps every
            result so you can compare.
          </Text>
          <SmallButton label="Remind me in summer" />
        </View>
        <Pressable
          onPress={() => router.replace("/")}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.primaryLabel}>Continue</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

function SmallButton({ label }: { label: string }) {
  return (
    <Pressable style={styles.smallButton}>
      <Text style={styles.smallButtonLabel}>{label}</Text>
    </Pressable>
  )
}
function Product({
  name,
  detail,
  tag,
}: {
  name: string
  detail: string
  tag: string
}) {
  return (
    <View style={styles.product}>
      <View>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productDetail}>{detail}</Text>
      </View>
      <Text style={styles.tag}>{tag}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f5fa",
    borderTopColor: "#1d1c2a",
    borderTopWidth: 3,
  },
  content: { paddingBottom: 24, paddingHorizontal: 23, paddingTop: 26 },
  eyebrow: { color: "#5a586b", fontSize: 13, fontWeight: "700" },
  title: { color: "#1d1c2a", fontSize: 28, fontWeight: "800", marginTop: 16 },
  card: {
    backgroundColor: "#fff",
    borderColor: "#d9d7df",
    borderRadius: 16,
    borderWidth: 1,
    marginTop: 15,
    padding: 15,
  },
  cardTitle: { color: "#242231", fontSize: 15, fontWeight: "700" },
  cardText: { color: "#5a586b", fontSize: 15, lineHeight: 21, marginTop: 8 },
  smallButton: {
    alignItems: "center",
    alignSelf: "flex-start",
    borderColor: "#1d1c2a",
    borderRadius: 11,
    borderWidth: 1.5,
    marginTop: 11,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  smallButtonLabel: { color: "#242231", fontSize: 15, fontWeight: "700" },
  line: { backgroundColor: "#d9d7df", height: 1, marginTop: 15 },
  product: {
    alignItems: "center",
    borderBottomColor: "#d9d7df",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  productName: { color: "#242231", fontSize: 15 },
  productDetail: { color: "#5a586b", fontSize: 13, marginTop: 4 },
  tag: {
    borderColor: "#77758a",
    borderRadius: 6,
    borderWidth: 1,
    color: "#5a586b",
    fontSize: 11,
    paddingHorizontal: 7,
    paddingVertical: 4,
  },
  commission: { color: "#5a586b", fontSize: 12, lineHeight: 17, marginTop: 10 },
  primaryButton: {
    alignItems: "center",
    backgroundColor: "#5540bd",
    borderRadius: 14,
    height: 53,
    justifyContent: "center",
    marginTop: 44,
  },
  primaryLabel: { color: "#fff", fontSize: 16, fontWeight: "700" },
  pressed: { opacity: 0.78 },
})
