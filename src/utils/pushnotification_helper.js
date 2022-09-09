import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
  let checkToken = await AsyncStorage.getItem('fcmToken');
  console.log('The old Token', checkToken);

  if (!checkToken) {
    try {
      const fcmToken = await messaging().getToken();

      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
        console.log('FCM token generated:', fcmToken);
      }
    } catch (error) {
      console.log('Error FCM Token:', error);
      alert(error?.message);
    }
  }
};
