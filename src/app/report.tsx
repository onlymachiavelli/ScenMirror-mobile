import { router } from "expo-router"
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ReportScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.eyebrow}>Step 3 of 3 · Your mirror</Text>
          <Text style={styles.sample}>Sample report</Text>
        </View>
        <Text style={styles.title}>1 of your 3 words{"\n"}matched.</Text>
        <View style={styles.guessCards}>
          <Score
            title="YOU GUESSED"
            words={["Fresh", "Soft", "Elegant"]}
            detail="Moderate strength"
          />
          <Score
            title="OTHERS SAID"
            words={["Soft", "Powdery", "Sweet"]}
            detail="Light strength"
            warm
          />
        </View>
        <View style={styles.chartCard}>
          <Text style={styles.cardTitle}>
            How many of the 5 evaluators chose each word?
          </Text>
          <Bar label="Soft" value="4 of 5" width="85%" />
          <Bar label="Powdery" value="4 of 5" width="85%" />
          <Bar label="Sweet" value="3 of 5" width="63%" />
          <Bar label="Fresh" value="1 of 5" width="25%" />
          <Text style={styles.chartNote}>
            Strength: noticeable at 30 min, faint at 2 hours.
          </Text>
        </View>
        <View style={styles.meaning}>
          <Text style={styles.meaningTitle}>WHAT THIS MEANS FOR YOU</Text>
          <Text style={styles.meaningText}>
            People read you as gentle and sweet, not fresh. Good for the office
            as it is. For evenings it fades: re-apply after 2 hours or try a
            stronger match.
          </Text>
        </View>
        <Text style={styles.footnote}>
          Tested on wrist, 2 sprays, 21°C, 55% humidity. Two evaluators also
          noted "soapy". Blind human ratings, not AI.
        </Text>
        <Pressable
          onPress={() => router.push("/next-steps")}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.primaryLabel}>What should I do next?</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

function Score({
  title,
  words,
  detail,
  warm = false,
}: {
  title: string
  words: string[]
  detail: string
  warm?: boolean
}) {
  return (
    <View style={[styles.score, warm && styles.scoreWarm]}>
      <Text style={[styles.scoreTitle, warm && styles.scoreTitleWarm]}>
        {title}
      </Text>
      {words.map((word) => (
        <Text key={word} style={styles.scoreWord}>
          {word}
        </Text>
      ))}
      <Text style={styles.scoreDetail}>{detail}</Text>
    </View>
  )
}

function Bar({
  label,
  value,
  width,
}: {
  label: string
  value: string
  width: string
}) {
  return (
    <View style={styles.barRow}>
      <Text style={styles.barLabel}>{label}</Text>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, { width }]} />
      </View>
      <Text style={styles.barValue}>{value}</Text>
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
  content: { paddingBottom: 23, paddingHorizontal: 26, paddingTop: 26 },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eyebrow: { color: "#5a586b", fontSize: 13, fontWeight: "700" },
  sample: {
    borderColor: "#77758a",
    borderRadius: 6,
    borderWidth: 1,
    color: "#5a586b",
    fontSize: 11,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  title: {
    color: "#1d1c2a",
    fontSize: 28,
    fontWeight: "800",
    lineHeight: 30,
    marginTop: 17,
  },
  guessCards: { flexDirection: "row", gap: 10, marginTop: 16 },
  score: {
    backgroundColor: "#fff",
    borderColor: "#5540bd",
    borderRadius: 16,
    borderWidth: 1.5,
    flex: 1,
    minHeight: 157,
    padding: 14,
  },
  scoreWarm: { borderColor: "#b45606" },
  scoreTitle: {
    color: "#5540bd",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 9,
  },
  scoreTitleWarm: { color: "#a64c03" },
  scoreWord: {
    color: "#242231",
    fontSize: 19,
    fontWeight: "700",
    lineHeight: 25,
  },
  scoreDetail: { color: "#5a586b", fontSize: 13, marginTop: 9 },
  chartCard: {
    backgroundColor: "#fff",
    borderColor: "#d9d7df",
    borderRadius: 16,
    borderWidth: 1,
    marginTop: 13,
    padding: 15,
  },
  cardTitle: {
    color: "#242231",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 12,
  },
  barRow: { alignItems: "center", flexDirection: "row", height: 22 },
  barLabel: { color: "#242231", fontSize: 13, width: 84 },
  barTrack: {
    backgroundColor: "#eee3d9",
    borderRadius: 6,
    flex: 1,
    height: 9,
    overflow: "hidden",
  },
  barFill: { backgroundColor: "#b45606", borderRadius: 6, height: 9 },
  barValue: { color: "#242231", fontSize: 12, marginLeft: 16, width: 35 },
  chartNote: { color: "#5a586b", fontSize: 13, marginTop: 7 },
  meaning: {
    backgroundColor: "#1d1c2a",
    borderRadius: 16,
    marginTop: 13,
    padding: 15,
  },
  meaningTitle: { color: "#d8d0f5", fontSize: 12, fontWeight: "700" },
  meaningText: { color: "#fff", fontSize: 16, lineHeight: 22, marginTop: 8 },
  footnote: { color: "#5a586b", fontSize: 12, lineHeight: 17, marginTop: 14 },
  primaryButton: {
    alignItems: "center",
    backgroundColor: "#5540bd",
    borderRadius: 14,
    height: 53,
    justifyContent: "center",
    marginTop: 47,
  },
  primaryLabel: { color: "#fff", fontSize: 16, fontWeight: "700" },
  pressed: { opacity: 0.78 },
})
