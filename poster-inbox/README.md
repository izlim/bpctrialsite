# Poster inbox: adding events to the website

This folder is where you put event posters so Claude can turn them into pages on the church website. Posters you put here are never uploaded to GitHub, and Claude deletes them once it has used them.

## One-time setup

Ask the IT team to help you with these before your first time:

- Install Claude Code and sign in with your own account.
- Get a copy of this project on your computer, with permission to send changes to GitHub.
- Run `npm install` once in the project folder.
- Get the cPanel login (only needed if you upload the final website yourself).

## Adding an event

1. **Drop the poster(s) into this folder** (`poster-inbox`). WhatsApp images are fine. Posters work best in landscape 16:9, the usual WhatsApp poster shape.
2. **Open Claude Code in the project folder** and type something like:
   > Add the posters in poster-inbox as events.
3. Claude writes the event in **English and Chinese**. If it doesn't know the English name of a person or place, it will ask you. Answer it, and it will remember the name for next time.
4. **Check it on your computer.** Type:
   > Let me check on a local sample.

   Claude gives you a link (starting `http://localhost:3000`). Open it in your browser. Ask Claude to change anything that looks wrong. When you're done, type "stop the local server".
5. **Check it on your phone (staging).** Type:
   > Commit and push to staging.

   Wait a few minutes, then open the link Claude gives you on your phone. This is a test copy of the website, not the real one.
6. **Put it on the real website.** When staging looks right, type:
   > Build for production and zip it for upload.

   Claude saves a zip file on your Desktop. Then in cPanel:
   1. Open **File Manager** and go into `public_html`.
   2. Click **Upload** and choose the zip from your Desktop.
   3. Right-click the zip, choose **Extract**, and extract into `/public_html`. Allow it to overwrite files.
   4. **Delete the zip** from `public_html` afterwards, so it can't be downloaded from the website.
7. Open https://bethanypc.org.sg/en/events/ to check the live site.

## Good to know

- An event stays under "Upcoming" until its last day. After that, the Events page moves it to "Past" by itself, but the homepage keeps showing it until the site is next rebuilt and uploaded. Uploading a fresh build from time to time keeps the homepage tidy.
- If you're unsure about anything, ask Claude. It can explain what it's doing in plain words.
