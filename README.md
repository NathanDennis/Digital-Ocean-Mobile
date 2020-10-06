## A work in progress, mobile companion app for managing your DigitalOcean projects

Currently using Ionic Framework and VueJS 2

### To get started:
- Clone the repo
- Run `npm install`
- Create a `.env` file and add `VUE_APP_DO_API_KEY=your_API_Key`
- Run `npm run serve` to serve the development version on localhost:8080

### To build
- Run `npm run build`
- Run `npx cap add android` - this will build the dist folder into a folder named Android

From there you can run `npx cap open android` to open the project in Android Studio


### For iOS
You can run `npx cap add ios` to build an iOS folder, and then `npx cap open ios` on Mac to open XCode.
I do not own a Mac and have not been able to text the iOS version though.

![gif showing droplet list modal](https://i.imgur.com/AXlZRdl.gif)
![gif showing billing history list](https://i.imgur.com/5G8hksa.gif)
![gif showing pull down refresh feature](https://i.imgur.com/WGQR7yc.gif)
