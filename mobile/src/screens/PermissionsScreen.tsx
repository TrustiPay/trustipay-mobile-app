import React, {useState} from "react";
import {View, Text, Button, Platform, PermissionsAndroid, Permission} from "react-native";

async function requestAll() {
  if (Platform.OS !== "android") return true;

  const perms = [
    PermissionsAndroid.PERMISSIONS.CAMERA,
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
    PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
  ] as Permission[];

  const results = await PermissionsAndroid.requestMultiple(perms);

  return Object.values(results).every(
    v => v === PermissionsAndroid.RESULTS.GRANTED
  );
}

export default function PermissionsScreen({onDone}:{onDone:()=>void}) {
  const [status,setStatus] = useState("Not granted");

  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:22,fontWeight:"bold"}}>TrustiPay Permissions</Text>
      <Text style={{marginTop:10}}>Camera + Bluetooth + Location needed</Text>

      <Text style={{marginTop:10}}>Status: {status}</Text>

      <Button
        title="Grant Permissions"
        onPress={async()=>{
          const ok = await requestAll();
          setStatus(ok ? "Granted ✅" : "Missing permissions ❌");
          if(ok) onDone();
        }}
      />
    </View>
  );
}