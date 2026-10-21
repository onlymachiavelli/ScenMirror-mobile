import { router } from "expo-router"
import { useState } from "react"
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function DataChoiceScreen() {
  const [choices, setChoices] = useState({
    report: true,
    matching: false,
    offers: false,
  })

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>Before you start</Text>
        <Text style={styles.title}>Your data, your choice</Text>
        <Text style={styles.intro}>
          Only the first one is needed. You can change{"\n"}the others at any
          time in your profile.
        </Text>

        <View style={styles.options}>
          <Choice
            title="For my report"
            suffix="required"
            detail="Perfume, sprays, timing, weather and the ratings you receive."
            value={choices.report}
            onPress={() => setChoices({ ...choices, report: true })}
            required
          />
          <Choice
            title="Improve our matching"
            suffix="optional"
            detail="Your results, with your name removed, help us suggest better matches to everyone."
            value={choices.matching}
            onPress={() =>
              setChoices({ ...choices, matching: !choices.matching })
            }
          />
          <Choice
            title="Offers and news"
            suffix="optional"
            detail="New partner perfumes and events, by email."
            value={choices.offers}
            onPress={() => setChoices({ ...choices, offers: !choices.offers })}
          />
        </View>

        <View style={styles.notes}>
          <Text style={styles.note}>
            • Evaluators never see your name, your perfume or your guess.
          </Text>
          <Text style={styles.note}>
            • Partner workshops see booking details only.
          </Text>
          <Text style={styles.note}>
            • Raw records are kept for 90 days. You can ask us to delete them
            sooner.
          </Text>
        </View>

        <View style={styles.actions}>
          <Pressable
            onPress={() => router.push("/guess")}
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.primaryLabel}>Agree and continue</Text>
          </Pressable>
          <Text style={styles.policy}>Read the full privacy policy</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

function Choice({
  title,
  suffix,
  detail,
  value,
  onPress,
  required = false,
}: {
  title: string
  suffix: string
  detail: string
  value: boolean
  onPress: () => void
  required?: boolean
}) {
  return (
    <View style={[styles.choice, required && styles.requiredChoice]}>
      <View style={styles.choiceCopy}>
        <Text style={styles.choiceTitle}>
          {title} <Text style={styles.suffix}>· {suffix}</Text>
        </Text>
        <Text style={styles.choiceDetail}>{detail}</Text>
      </View>
      <Pressable
        accessibilityRole="switch"
        accessibilityState={{ checked: value }}
        onPress={onPress}
        style={[styles.switch, value && styles.switchOn]}
      >
        <View style={[styles.knob, value && styles.knobOn]} />
      </Pressable>
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
  content: {
    flexGrow: 1,
    paddingBottom: 24,
    paddingHorizontal: 25,
    paddingTop: 26,
  },
  eyebrow: { color: "#5a586b", fontSize: 13, fontWeight: "700" },
  title: { color: "#1d1c2a", fontSize: 28, fontWeight: "800", marginTop: 16 },
  intro: { color: "#5a586b", fontSize: 16, lineHeight: 23, marginTop: 15 },
  options: { gap: 15, marginTop: 19 },
  choice: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#d9d7df",
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    minHeight: 111,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  requiredChoice: { borderColor: "#1d1c2a", borderWidth: 1.5 },
  choiceCopy: { flex: 1, paddingRight: 12 },
  choiceTitle: { color: "#242231", fontSize: 15, fontWeight: "700" },
  suffix: { color: "#5a586b", fontWeight: "400" },
  choiceDetail: {
    color: "#5a586b",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 3,
  },
  switch: {
    alignItems: "flex-start",
    borderColor: "#77758a",
    borderRadius: 20,
    borderWidth: 1.5,
    height: 30,
    justifyContent: "center",
    paddingHorizontal: 3,
    width: 51,
  },
  switchOn: { backgroundColor: "#77758a", borderColor: "#77758a" },
  knob: { backgroundColor: "#77758a", borderRadius: 20, height: 22, width: 22 },
  knobOn: { backgroundColor: "#fff", alignSelf: "flex-end" },
  notes: { gap: 10, marginTop: 19 },
  note: { color: "#242231", fontSize: 13, lineHeight: 17 },
  actions: { marginTop: 70 },
  primaryButton: {
    alignItems: "center",
    backgroundColor: "#5540bd",
    borderRadius: 14,
    height: 53,
    justifyContent: "center",
  },
  primaryLabel: { color: "#fff", fontSize: 16, fontWeight: "700" },
  policy: {
    color: "#4935a9",
    fontFamily: "serif",
    fontSize: 13,
    marginTop: 17,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  pressed: { opacity: 0.78 },
})
