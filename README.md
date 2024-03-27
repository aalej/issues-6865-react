# Repro for issue 6865

# Versions

firebase-tools: v13.6.0<br>
node: v20.10.0<br>
platform: macOS Sonoma 14.4

## Steps to reproduce

1. Run `yarn` to install dependencies
1. Run `firebase emulators:start --project demo-project`
1. On a separate terminal, run `yarn dev` to start the app
1. Open "http://localhost:5173/#/firebase/create"
1. Select files to upload. Select all images from "images" folder
   - Click the "Drop some pictures to upload, or click to select one." area
1. Click the “UPLOAD” button
1. Open "http://localhost:4000/storage/demo-project.appspot.com/temp/testTemp"
1. Not all images are uploaded. Only some images are uploaded (4/6 images)
   - In some cases, the image upload suceeds without any issues. If so, do the additional steps

## Additional steps to reproduce

1. Delete all images in Storage emulator using the "Delete all files" button
1. Re-upload the same images by openning "http://localhost:5173/#/firebase/create"
1. Select files to upload. Select all images from "images" folder
   - Click the "Drop some pictures to upload, or click to select one." area
1. Click the “UPLOAD” button
1. Open "http://localhost:4000/storage/demo-project.appspot.com/temp/testTemp"
1. Not all images are uploaded. Only some images are uploaded (4/6 images)

## Notes

Firebase Emulator

- Using the `demo-project` id
- Using fake Firebase configs

```json
  apiKey: "fake-api-key",
  projectId: "demo-project",
  storageBucket: "demo-project.appspot.com",
  appId: "1:012345678911:web:e0d5f4a8391e9475378d82",
```

Couldn't repro the issue with images with size of ~1.5mb

- Increased size to ~2mb
