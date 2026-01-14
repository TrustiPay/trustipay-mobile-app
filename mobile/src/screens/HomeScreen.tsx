import React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>TrustiPay</Text>
      <Text style={{ marginTop: 10 }}>
        Next: Offline Tx → Ledger → QR/Bluetooth/Wi-Fi Direct → Sync.
      </Text>
    </View>
  );
}