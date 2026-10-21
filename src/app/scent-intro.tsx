import { router } from "expo-router"
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ScentIntroScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.wordmark}>ScentMirror</Text>

        <View style={styles.main}>
          <Text style={styles.title}>
            You know how you{"\n"}smell to yourself. Find{"\n"}out how you smell
            to{"\n"}others.
          </Text>
          <Text style={styles.description}>
            Wear the perfume you already own. Real{"\n"}people rate it without
            knowing the brand.{"\n"}You get a clear report.
          </Text>

          <View style={styles.stepsCard}>
            <Step
              number="1"
              title="Guess"
              detail="Say how you think you come across"
            />
            <Step
              number="2"
              title="Get tested"
              detail="Others rate your scent, blind"
            />
            <Step
              number="3"
              title="See the gap"
              detail="Your guess next to what they said"
            />
          </View>
        </View>

        <View style={styles.actions}>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push("/data-choice")}
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.primaryButtonLabel}>
              Start with my own perfume
            </Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push("/data-choice")}
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.secondaryButtonLabel}>
              I don't have a perfume yet
            </Text>
          </Pressable>
          <Text style={styles.footer}>
            No new perfume to buy. Your answers are used only for{"\n"}your
            report.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

function Step({
  number,
  title,
  detail,
}: {
  number: string
  title: string
  detail: string
}) {
  return (
    <View style={styles.step}>
      <View style={styles.stepNumber}>
        <Text style={styles.stepNumberLabel}>{number}</Text>
      </View>
      <View style={styles.stepCopy}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDetail}>{detail}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f5fa",
    borderTopColor: "#1d1c2a",
    borderTopWidth: 3,
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 22,
    paddingHorizontal: 26,
    paddingTop: 28,
  },
  wordmark: {
    color: "#1d1c2a",
    fontFamily: "serif",
    fontSize: 17,
    fontStyle: "italic",
  },
  main: {
    flex: 1,
    paddingTop: 34,
  },
  title: {
    color: "#1d1c2a",
    fontSize: 31,
    fontWeight: "800",
    lineHeight: 34,
  },
  description: {
    color: "#5a586b",
    fontSize: 16,
    lineHeight: 23,
    marginTop: 25,
  },
  stepsCard: {
    backgroundColor: "#fff",
    borderColor: "#d9d7df",
    borderRadius: 17,
    borderWidth: 1,
    marginTop: 21,
    paddingHorizontal: 17,
    paddingVertical: 17,
  },
  step: {
    alignItems: "center",
    flexDirection: "row",
    minHeight: 45,
  },
  stepNumber: {
    alignItems: "center",
    backgroundColor: "#e9e6f8",
    borderRadius: 20,
    height: 32,
    justifyContent: "center",
    width: 32,
  },
  stepNumberLabel: {
    color: "#4f3bb4",
    fontSize: 16,
    fontWeight: "600",
  },
  stepCopy: {
    marginLeft: 14,
  },
  stepTitle: {
    color: "#242231",
    fontSize: 15,
    fontWeight: "700",
  },
  stepDetail: {
    color: "#5a586b",
    fontSize: 13,
    marginTop: 3,
  },
  actions: {
    gap: 10,
    paddingTop: 28,
  },
  primaryButton: {
    alignItems: "center",
    backgroundColor: "#5540bd",
    borderRadius: 14,
    height: 53,
    justifyContent: "center",
  },
  primaryButtonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButton: {
    alignItems: "center",
    borderColor: "#1d1c2a",
    borderRadius: 14,
    borderWidth: 1.5,
    height: 51,
    justifyContent: "center",
  },
  secondaryButtonLabel: {
    color: "#242231",
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    color: "#5a586b",
    fontSize: 12,
    lineHeight: 17,
    marginTop: 11,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.78,
  },
})
