# Indian Heritage Virtual Gallery


## How the Virtual Gallery Works

The website provides a simple flow for users to enter and explore the virtual museum.

### Step 1 - Open the Website

Open the Indian Heritage Virtual Gallery website.

The home page displays information about Indian handicrafts, textiles, traditional crafts, and the virtual gallery.

### Step 2 - Enter the Virtual Gallery

Click the:

**"Enter the Virtual Gallery"**

button on the home page.

This takes the user to the Virtual Gallery page.

### Step 3 - Unity WebGL Loading

When the Virtual Gallery page opens, the Unity WebGL virtual museum starts loading.

A loading screen and progress indicator are displayed while the Unity 3D environment and its required assets are being loaded.

The loading process may take some time depending on:

- Internet connection
- Device performance
- Browser
- Size of the Unity WebGL build

The user should wait until the loading process is completed.

### Step 4 - Explore the Virtual Museum

After Unity finishes loading, the 3D virtual museum becomes available.

The user can then interact with the virtual environment and explore the museum.

Users can:

- Move around the virtual environment
- Explore the 3D museum
- View the heritage environment and exhibits
- Interact with the virtual experience

### Step 5 - Fullscreen Mode

The Virtual Gallery page provides a **Fullscreen** option.

Users can click **Fullscreen** to get a larger view of the virtual museum.

To return to the normal view, click **Exit Fullscreen**.

### Step 6 - Exit the Gallery

When the user finishes exploring the virtual museum, they can click:

**"Exit Gallery"**

to return to the main website.

### User Flow

```text
Home Page
    ↓
Click "Enter the Virtual Gallery"
    ↓
Virtual Gallery Page
    ↓
Unity WebGL Loading Screen
    ↓
Unity 3D Virtual Museum
    ↓
Explore / Interact with Museum
    ↓
Fullscreen (Optional)
    ↓
Exit Gallery
    ↓
Return to Website


## Technologies Used

- React
- Vite
- JavaScript
- HTML
- CSS
- React Router DOM
- Unity
- Unity WebGL
- Node.js
- npm
- Git
- GitHub

---

# 1. Requirements

Install the following software before running the project:

1. Node.js
2. Visual Studio Code
3. Google Chrome / Microsoft Edge
4. Git (if using GitHub)

---

# 2. Install Node.js

Download and install Node.js LTS.

After installation, open the VS Code terminal and check:

```bash
node -v
```

```bash
npm -v
```

Both commands should display a version number.

---

# 3. Get the Project

## Using GitHub

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

Go inside the project folder:

```bash
cd VirtualWalkthrough
```

Open the project folder in Visual Studio Code.

---

# 4. Install Dependencies

Open the project folder in Visual Studio Code.

Open:

**Terminal → New Terminal**

Make sure the terminal is inside the project folder.

Run:

```bash
npm install
```

This installs all the packages required by the project.

The `node_modules` folder will be created automatically.

---

# 5. Run the Website

After `npm install` finishes, run:

```bash
npm run dev
```

Vite will show a local address such as:

```text
http://localhost:5173/
```

Open that address in Google Chrome or Microsoft Edge.

---

# 6. Unity WebGL

The Unity virtual gallery is already included in the project.

Location:

```text
public/unity-build/
```

The structure is:

```text
public/
└── unity-build/
    ├── Build/
    ├── TemplateData/
    └── index.html
```

The `Build` folder contains the Unity WebGL files.

**Do not delete the `unity-build` folder.**

---

# 7. Unity WebGL Files

The Unity build contains files such as:

```text
Build/
├── finalll.data.unityweb
├── finalll.framework.js.unityweb
├── finalll.loader.js
└── finalll.wasm.unityweb
```

The names of these files must match the names used in:

```text
public/unity-build/index.html
```

If the Unity build is replaced with a new build and the file names change, update `index.html` accordingly.

---

# 8. Unity URL

The React website loads Unity using:

```text
/unity-build/index.html
```

If a `.env` file is not already present, create one in the project root.

Add:

```env
VITE_UNITY_BUILD_URL=/unity-build/index.html
```

After changing `.env`, restart the development server.

Run the complete React website using:

```bash
npm run dev
```

---

# 9. Project Structure

The main structure of the project is:

```text
VirtualWalkthrough/
│
├── public/
│   └── unity-build/
│       ├── Build/
│       ├── TemplateData/
│       └── index.html
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
├── .gitignore
└── README.md
```

---

# 10. How to Make Changes

Open the project in Visual Studio Code.

Start the website:

```bash
npm run dev
```

Make changes inside the `src` folder.

For example:

```text
src/pages/
```

contains the website pages.

```text
src/components/
```

contains reusable components.

```text
src/styles/
```

contains CSS files.

Save the changes and check the browser.

---

# 11. How to Change the Virtual Museum Page

The React page that displays the Unity museum is inside:

```text
src/pages/
```

Find the Virtual Museum page there.

Changes to the following can be made in the React/CSS files:

- Website interface
- Buttons
- Fullscreen option
- Loading screen
- Layout

---

# 12. How to Change the Unity Museum

The files inside:

```text
public/unity-build/
```

are generated from Unity.

If the actual 3D museum needs to be changed:

1. Open the original Unity project.
2. Make the changes in Unity.
3. Build the project for WebGL.
4. Replace the old WebGL build inside:

```text
public/unity-build/
```

5. Make sure `index.html` points to the correct build file names.
6. Run the React website again.
7. Test the Unity museum.

---

# 13. Test the Website

Before deployment, check:

- Home page
- Navigation
- All website pages
- Images
- Buttons
- Virtual Museum
- Unity loading
- Fullscreen
- Exit Gallery
- Desktop view
- Mobile view

---

# 14. Create Production Build

After testing the website, create the production build:

```bash
npm run build
```

This creates the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

---

# 15. Deploy to Vercel

The project can be deployed using Vercel.

### Step 1

Push the project to GitHub.

### Step 2

Open Vercel and import the GitHub repository.

### Step 3

Vercel should detect the Vite project.

Use:

```text
Build Command:
npm run build
```

```text
Output Directory:
dist
```

### Step 4

If required, add the following environment variable:

```text
VITE_UNITY_BUILD_URL=/unity-build/index.html
```

### Step 5

Deploy the project.

After deployment, open the generated Vercel URL and check that the website and Unity virtual museum are working.

---

# 16. GitHub - Making Changes

After making changes, check the files:

```bash
git status
```

Add the changes:

```bash
git add .
```

Commit the changes:

```bash
git commit -m "Describe the changes"
```

Push the changes:

```bash
git push
```

Example:

```bash
git add .
git commit -m "Update website"
git push
```

---

# 17. Get Latest Changes

Before starting new work, get the latest code:

```bash
git pull
```

If new packages were added:

```bash
npm install
```

Then run:

```bash
npm run dev
```

---

# 18. If Vite Is Not Recognized

If you get:

```text
'vite' is not recognized as an internal or external command
```

run:

```bash
npm install
```

Then:

```bash
npm run dev
```

---

# 19. If Unity Is Not Loading

Check that this folder exists:

```text
public/unity-build/
```

Check that it contains:

```text
Build/
TemplateData/
index.html
```

Also check that the file names inside `Build` match the file names mentioned in:

```text
public/unity-build/index.html
```

---

# 20. Files That Should Not Be Uploaded

The following folders/files should normally not be uploaded to GitHub:

```text
node_modules/
dist/
.vercel/
.env
```

The `node_modules` folder can be recreated using:

```bash
npm install
```

The `dist` folder can be recreated using:

```bash
npm run build
```

Do not upload `.env` if it contains passwords, API keys, or other private information.

---

# 21. Live Website

Current website:

https://indian-heritage-virtual-gallery.vercel.app/

---

# 22. GitHub Repository

GitHub Repository:

YOUR_GITHUB_REPOSITORY_LINK

---

# 23. Quick Start

Anyone who receives this source code can run it using:

```bash
npm install
```

Then:

```bash
npm run dev
```

Open the URL shown in the terminal.

---

# 24. Complete Setup in Short

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK

cd VirtualWalkthrough

npm install

npm run dev
```

Then open the Vite URL in the browser.

---

# Project Handover

The repository contains:

- React website source code
- Website assets
- Unity WebGL virtual museum
- Unity WebGL build files
- Configuration files
- Project documentation
- Deployment information

The complete Unity WebGL build is located inside:

```text
public/unity-build/
```

**Do not remove this folder.**
