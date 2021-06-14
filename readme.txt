npx react-native init cmAuthenTS --template react-native-template-typescript
npx react-native run-android

------------
tsrnfi - generate react component (functional)

Variables (3 types)
1. no-side-effect Variables
2. side effect state
3. side effect props



#react-native npm    
    
    ชุดที่หนึ่ง
    yarn add react-native-elements react-native-vector-icons
    npx react-native link react-native-vector-icons

    yarn add react-native-safe-area-context
    npx react-native link react-native-safe-area-context


    yarn add @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
    yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
    yarn add @react-native-community/async-storage axios react-native-iphone-x-helper react-native-permissions   
    
    npx react-native link react-native-gesture-handler
    npx react-native link react-native-reanimated
    npx react-native link react-native-screens
    npx react-native link react-native-safe-area-context
    npx react-native link @react-native-community/masked-view      
    npx react-native link @react-native-community/async-storage    
    npx react-native link react-native-permissions

    ยังเพิ่งลงชุดนี้
    yarn add react-native-youtube react-native-image-crop-picker 
    npx react-native link react-native-youtube
    npx react-native link react-native-image-crop-picker 

    add
    pod 'XCDYouTubeKit', '~> 2.8'



<uses-permission android:name="android.permission.CAMERA"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.RECORD_AUDIO" />

iOS
- fix duplicate font.ttf


Remove Flipper (to run on iOS) by # use_flipper!
# Enables Flipper.
  #
  # Note that if you have use_frameworks! enabled, Flipper will not work and
  # you should disable these next few lines.
  use_flipper!
  post_install do |installer|
    flipper_post_install(installer)
  end


extended display android display manager & react-native
https://github.com/microsoft/react-native-dualscreen


yarn add express formidable fs-extra body-parser
/Users/chaiyasit/Library/Developer/Xcode/DerivedData/


<key>NSPhotoLibraryUsageDescription</key>
	<string>YOUR TEXT</string>
	<key>NSCameraUsageDescription</key>
	<string>YOUR TEXT</string>

  #Fix cannot upload image
https://www.youtube.com/watch?v=SAI9HMWtExg
Just comment this line
// initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
in MainApplication.java of android folder


#Fix No Permission Handler Detect
1. https://github.com/react-native-community/react-native-permissions#ios
npm install --save react-native-permissions
# --- or ---
yarn add react-native-permissions
npx react-native link react-native-permissions

2. Add this code into Podfile
  permissions_path = '../node_modules/react-native-permissions/ios'
  pod 'Permission-Contacts', :path => "#{permissions_path}/Contacts"
  pod 'Permission-Microphone', :path => "#{permissions_path}/Microphone"
  pod 'Permission-Notifications', :path => "#{permissions_path}/Notifications"
  pod 'Permission-PhotoLibrary', :path => "#{permissions_path}/PhotoLibrary"
  pod 'Permission-Camera', :path => "#{permissions_path}/Camera"

3. Remove DerivedData Folder
/Users/chaiyasit/Library/Developer/Xcode/DerivedData/xxx