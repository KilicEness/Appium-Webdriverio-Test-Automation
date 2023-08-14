# Appium-Webdriverio-Test-Automation Installations
# NodeJS Setup
- First of all we need to download and setup node.js https://nodejs.org/en/download
- And you can check your nodejs version with 'node -v' from your command prompt.
- Node also installs npm. You can check your npm version with 'npm -v'.

# Java JDK Setup
- First thing make sure is open up your command prompt and type in 'java --version'.
- If you take "'java' is not recognized as an internal or external command" error you need to setup java in your machine. For me I'm using java 11.0.19. Go to
https://www.oracle.com/tr/java/technologies/javase/jdk11-archive-downloads.html and download for your machine.
Then open up your environment variables and set JAVA_HOME variables to where you downloaded java path.
If you are download the java from https://adoptium.net/temurin/releases/?version=11 you can automatically add environment variables to your machine but then open up your environment variables and verify your environment variables. 

# Android Studio Setup
- Go to Android Studio page and download and setup Android Studio https://developer.android.com/studio
- Then open up your environment variables and set ANDROID_HOME variables to where you downloaded android path.
- Setup a Android Emulator from Android Studio. By the way my devices android version 11.0 .

# Appium Inspector Setup
- The best way to setup appium inspector go to https://github.com/appium/appium-inspector and follow the instructions then setup and install your machine appium inspector.

# Appium installation
- For Appium installation go to appium documentation and follow instructions. http://appium.io/docs/en/2.0/
Then install appium doctor 'npm i -g appium-doctor
- Run 'appium-doctor -- android' and  make sure all necessary dependcies are checked

# Appium drivers Installation
- We are testing android apps so we need to install android test driver. So to install driver run the command 'appium driver install uiautomator2'. Then verify if its been installed, you can run 'appium driver list'.

# WebdriverIO v8 Setup
- Open your project folder to what yo want install webdriverio. The run command in the folders path terminal 'npm init wdio 'your project name''
- Then configuration your wdio to answering questions. My answers is down the below:
? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
? Where is your automation backend located? On my local machine  
? Which environment you would like to automate? Mobile - native, hybrid and mobile web apps, on Android or iOS
? Which mobile environment you'ld like to automate? Android - native, hybrid and mobile web apps, tested on emulators and real devices
    > using UiAutomator2 (https://www.npmjs.com/package/appium-uiautomator2-driver)
? Which framework do you want to use? Mocha (https://mochajs.org/)
? Do you want to use a compiler? No!
? Do you want WebdriverIO to autogenerate some test files? No
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup?
? Do you want to add a service to your test setup? appium
? Do you want me to run `npm install` Yes

- After the finished this installation I choosed
? Continue with Appium setup using appium-installer (https://github.com/AppiumTestDistribution/appium-installer)? No
I said No because this is not required to me

Thats all now configure yours wdio.conf.js file and run yours test!!