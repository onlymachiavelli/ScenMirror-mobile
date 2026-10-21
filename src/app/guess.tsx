import { router } from "expo-router"
import { useState } from "react"
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const words = [
  "Fresh",
  "Clean",
  "Soft",
  "Sweet",
  "Floral",
  "Powdery",
  "Warm",
  "Woody",
  "Spicy",
  "Bold",
  "Elegant",
  "Playful",
]

export default function GuessScreen() {
  const [selected, setSelected] = useState(["Fresh", "Soft", "Elegant"])
  const [strength, setStrength] = useState("Moderate")

  const toggleWord = (word: string) => {
    if (selected.includes(word))
      setSelected(selected.filter((item) => item !== word))
    else if (selected.length < 3) setSelected([...selected, word])
    else setSelected([...selected.slice(1), word])
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>Step 1 of 3 · Your guess</Text>
        <Text style={styles.title}>
          How do you think you{"\n"}smell to others?
        </Text>
        <Text style={styles.label}>Perfume you wear</Text>
        <TextInput
          placeholder="Name of your fragrance"
          placeholderTextColor="#74727d"
          style={styles.input}
        />
        <View style={styles.wordsHeader}>
          <Text style={styles.label}>Pick 3 words</Text>
          <Text style={styles.counter}>{selected.length} of 3 chosen</Text>
        </View>
        <View style={styles.wordList}>
          {words.map((word) => (
            <Pressable
              key={word}
              onPress={() => toggleWord(word)}
              style={[
                styles.word,
                selected.includes(word) && styles.wordSelected,
              ]}
            >
              <Text
                style={[
                  styles.wordLabel,
                  selected.includes(word) && styles.wordSelectedLabel,
                ]}
              >
                {word}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={[styles.label, styles.strengthLabel]}>
          How strong, after an hour?
        </Text>
        <View style={styles.strengths}>
          {["Light", "Moderate", "Strong"].map((item) => (
            <Pressable
              key={item}
              onPress={() => setStrength(item)}
              style={[
                styles.strength,
                strength === item && styles.wordSelected,
              ]}
            >
              <Text
                style={[
                  styles.strengthLabelText,
                  strength === item && styles.wordSelectedLabel,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.bottom}>
          <Text style={styles.note}>
            Your guess is locked before the test. The people rating{"\n"}you
            never see it.
          </Text>
          <Pressable
            onPress={() => router.push("/report")}
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.primaryLabel}>Lock in my guess</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f5fa",
    borderTopColor: "#1d1c2a",
    borderTopWidth: 3,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 24,
    paddingHorizontal: 25,
    paddingTop: 26,
  },
  eyebrow: { color: "#5a586b", fontSize: 13, fontWeight: "700" },
  title: {
    color: "#1d1c2a",
    fontSize: 28,
    fontWeight: "800",
    lineHeight: 31,
    marginTop: 20,
  },
  label: { color: "#242231", fontSize: 13, fontWeight: "700" },
  input: {
    backgroundColor: "#fff",
    borderColor: "#b2afbd",
    borderRadius: 13,
    borderWidth: 1,
    color: "#1d1c2a",
    fontSize: 16,
    height: 47,
    marginTop: 9,
    paddingHorizontal: 14,
  },
  wordsHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  counter: { color: "#5a586b", fontSize: 13 },
  wordList: { flexDirection: "row", flexWrap: "wrap", gap: 9, marginTop: 10 },
  word: {
    alignItems: "center",
    borderColor: "#b2afbd",
    borderRadius: 22,
    borderWidth: 1.5,
    height: 43,
    justifyContent: "center",
    paddingHorizontal: 17,
  },
  wordSelected: { backgroundColor: "#5540bd", borderColor: "#5540bd" },
  wordLabel: { color: "#242231", fontSize: 15 },
  wordSelectedLabel: { color: "#fff", fontWeight: "700" },
  strengthLabel: { marginTop: 20 },
  strengths: { flexDirection: "row", gap: 8, marginTop: 10 },
  strength: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#b2afbd",
    borderRadius: 12,
    borderWidth: 1.5,
    flex: 1,
    height: 47,
    justifyContent: "center",
  },
  strengthLabelText: { color: "#242231", fontSize: 15 },
  bottom: { flex: 1, justifyContent: "flex-end", paddingTop: 100 },
  note: { color: "#5a586b", fontSize: 13, lineHeight: 18, marginBottom: 19 },
  primaryButton: {
    alignItems: "center",
    backgroundColor: "#5540bd",
    borderRadius: 14,
    height: 53,
    justifyContent: "center",
  },
  primaryLabel: { color: "#fff", fontSize: 16, fontWeight: "700" },
  pressed: { opacity: 0.78 },
})
