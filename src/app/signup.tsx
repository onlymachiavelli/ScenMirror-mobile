import { router, useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function SignupScreen() {
  const { mode } = useLocalSearchParams<{ mode?: string }>()
  const [accountMode, setAccountMode] = useState<"create" | "login">("create")

  useEffect(() => {
    setAccountMode(mode === "login" ? "login" : "create")
  }, [mode])

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.wordmark}>ScentMirror</Text>
          <Text style={styles.title}>
            {accountMode === "create" ? "Create your account" : "Welcome back"}
          </Text>

          <View style={styles.segmentedControl}>
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected: accountMode === "create" }}
              onPress={() => setAccountMode("create")}
              style={[
                styles.segment,
                accountMode === "create" && styles.activeSegment,
              ]}
            >
              <Text
                style={[
                  styles.segmentLabel,
                  accountMode === "create" && styles.activeSegmentLabel,
                ]}
              >
                Create account
              </Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected: accountMode === "login" }}
              onPress={() => setAccountMode("login")}
              style={[
                styles.segment,
                accountMode === "login" && styles.activeSegment,
              ]}
            >
              <Text
                style={[
                  styles.segmentLabel,
                  accountMode === "login" && styles.activeSegmentLabel,
                ]}
              >
                Log in
              </Text>
            </Pressable>
          </View>

          <View style={styles.form}>
            {accountMode === "create" && <Field label="First name" />}
            <Field
              label="Email"
              placeholder="you@example.com"
              keyboardType="email-address"
            />
            <Field label="Password" secureTextEntry />
            {accountMode === "create" && (
              <Text style={styles.helperText}>At least 8 characters.</Text>
            )}
          </View>

          <Pressable
            accessibilityRole="button"
            onPress={() => {
              if (accountMode === "login") {
                router.replace("/scent-intro")
              }
            }}
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.primaryButtonLabel}>
              {accountMode === "create" ? "Create account" : "Log in"}
            </Text>
          </Pressable>

          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.orLabel}>or</Text>
            <View style={styles.divider} />
          </View>

          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.phoneButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.phoneButtonLabel}>
              Continue with a phone number
            </Text>
          </Pressable>

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

          <Text style={styles.footer}>
            Next you choose how we may use your data. Nothing is shared before
            we know.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

function Field({
  label,
  placeholder,
  keyboardType,
  secureTextEntry,
}: {
  label: string
  placeholder?: string
  keyboardType?: "default" | "email-address"
  secureTextEntry?: boolean
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        autoCapitalize="none"
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#74727d"
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f5fa" },
  safeArea: { flex: 1, borderTopWidth: 3, borderTopColor: "#1d1c2a" },
  content: { paddingHorizontal: 23, paddingTop: 28, paddingBottom: 21 },
  wordmark: {
    color: "#1d1c2a",
    fontFamily: "serif",
    fontSize: 17,
    fontStyle: "italic",
    marginBottom: 27,
  },
  title: {
    color: "#1d1c2a",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 21,
  },
  segmentedControl: {
    backgroundColor: "#dedced",
    borderRadius: 14,
    flexDirection: "row",
    height: 51,
    padding: 4,
  },
  segment: {
    alignItems: "center",
    borderRadius: 11,
    flex: 1,
    justifyContent: "center",
  },
  activeSegment: { backgroundColor: "#fffefe" },
  segmentLabel: { color: "#4f4d5d", fontSize: 16 },
  activeSegmentLabel: { color: "#1d1c2a", fontWeight: "700" },
  form: { marginTop: 20 },
  field: { marginBottom: 16 },
  fieldLabel: {
    color: "#242231",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fffefe",
    borderColor: "#b2afbd",
    borderRadius: 12,
    borderWidth: 1,
    color: "#1d1c2a",
    fontSize: 16,
    height: 47,
    paddingHorizontal: 14,
  },
  helperText: { color: "#575568", fontSize: 13, marginTop: -8 },
  primaryButton: {
    alignItems: "center",
    backgroundColor: "#5540bd",
    borderRadius: 14,
    height: 52,
    justifyContent: "center",
    marginTop: 10,
  },
  primaryButtonLabel: { color: "#fffefe", fontSize: 16, fontWeight: "700" },
  dividerRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    marginVertical: 25,
  },
  divider: { backgroundColor: "#d4d1dc", flex: 1, height: 1 },
  orLabel: { color: "#656273", fontSize: 13 },
  phoneButton: {
    alignItems: "center",
    borderColor: "#1d1c2a",
    borderRadius: 14,
    borderWidth: 1.5,
    height: 51,
    justifyContent: "center",
  },
  phoneButtonLabel: { color: "#242231", fontSize: 16, fontWeight: "700" },
  brandMark: {
    alignItems: "center",
    alignSelf: "center",
    height: 55,
    justifyContent: "center",
    marginTop: 31,
    width: 68,
  },
  bottle: {
    alignItems: "center",
    left: 28,
    position: "absolute",
    top: 0,
    width: 13,
  },
  bottleCap: {
    backgroundColor: "#1d1c2a",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    height: 4,
    width: 8,
  },
  bottleBody: {
    alignItems: "center",
    borderColor: "#1d1c2a",
    borderWidth: 1.5,
    height: 14,
    justifyContent: "center",
    width: 11,
  },
  bottleDot: {
    backgroundColor: "#f7f5fa",
    borderColor: "#1d1c2a",
    borderRadius: 2,
    borderWidth: 0.5,
    height: 2,
    width: 2,
  },
  orbit: {
    borderColor: "#1d1c2a",
    borderRadius: 30,
    borderRightColor: "transparent",
    borderWidth: 4,
    height: 38,
    position: "absolute",
    transform: [{ rotate: "-10deg" }],
    width: 54,
  },
  monogram: {
    color: "#1d1c2a",
    fontFamily: "serif",
    fontSize: 25,
    fontStyle: "italic",
    letterSpacing: -8,
    marginLeft: -2,
    marginTop: 7,
  },
  footer: {
    color: "#575568",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 26,
    paddingHorizontal: 5,
    textAlign: "center",
  },
  pressed: { opacity: 0.78 },
})
