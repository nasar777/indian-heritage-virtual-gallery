# Indian Heritage Virtual Gallery

## NPTEL Internship Project

This project is a web-based virtual gallery for showcasing Indian handicrafts and living heritage.

The project uses React for the website and Unity WebGL for the 3D virtual museum.

---

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

---

# 2. Install Node.js

Download and install Node.js LTS.

After installation, open the VS Code terminal and check:

```bash
node -v
or
npm -v

3. Get the Project

Using GitHub
Clone the repository:
git clone YOUR_GITHUB_REPOSITORY_LINK

Go inside the project folder:
cd VirtualWalkthrough

Open the project folder in VS Code.
Open:
Terminal → New Terminal
Make sure the terminal is inside the project folder.
Run:
npm install

This installs all the packages required by the project.
The node_modules folder will be created automatically.

5. Run the Website
After npm install finishes, run:
npm run dev

Vite will show a local address such as:
http://localhost:5173/

Open that address in Chrome or Edge.

6. Unity WebGL
The Unity virtual museum is already included in the project.
Location:
public/unity-build/

The structure is:
public/
└── unity-build/
    ├── Build/
    ├── TemplateData/
    └── index.html

The Build folder contains the Unity WebGL files.
Do not delete the unity-build folder.

7. Unity WebGL Files
The Unity build contains files such as:
Build/
├── finalll.data.unityweb
├── finalll.framework.js.unityweb
├── finalll.loader.js
└── finalll.wasm.unityweb

The names of these files must match the names used in:
public/unity-build/index.html

If the Unity build is replaced with a new build and the file names change, update index.html accordingly.

8. Unity URL
The React website loads Unity using:
/unity-build/index.html


 The project should use a .env file, the value should be:
VITE_UNITY_BUILD_URL=/unity-build/index.html

After changing .env, restart the development server.


Run the complete React website using command:
npm run dev


9. Project Structure
The main structure of the project is:
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

10. How to Make Changes
Open the project in Visual Studio Code.
Start the website:
npm run dev

Make changes inside the src folder.
For example:
src/pages/

contains the website pages.
src/components/

contains reusable components.
src/styles/

contains CSS files.
Save the changes and check the browser.

11. How to Change the Virtual Museum Page
The React page that displays the Unity museum is inside:
src/pages/

Find the Virtual Museum page there.
Changes to the website interface, buttons, fullscreen option, loading screen, and layout can be made in the React/CSS files.

12. How to Change the Unity Museum
The files inside:
public/unity-build/

are generated from Unity.
If the actual 3D museum needs to be changed:
1. Open the original Unity project.
2. Make the changes in Unity.
3. Build the project for WebGL.
4. Replace the old WebGL build inside:
public/unity-build/

5. Make sure index.html points to the correct build file names.
6. Run the React website again.
7. Test the Unity museum.

13. Test the Website
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
