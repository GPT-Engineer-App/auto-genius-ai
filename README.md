# Welcome to your GPT Engineer project

## Project info

**Project**: auto-genius-ai 

**URL**: https://run.gptengineer.app/projects/e5d8dc4d-f272-4fa8-aed2-a615e01fcbbe/improve

**Description**: INSTRUCTIONS: \
\
SECTION #1 - OVERVIEW...\
Utilize internet documentation & data in order to create a full, complete GUI based python program called "Auto-AGI" which utilizes a user selected Ollama model that will act as a fully autonomous AI agent which will utilize a series of python tools and will generate & execute a series of tasks to accomplish each user provided request. \
\
SECTION #2 - GUI ELEMENTS...\
Include the following functional GUI elements:\
A. The GUI should have the "AUTO-AGI" title at the top. \
B. Below the title should be a current status indicator panel of the program, including "IDLE/RUNNING (changes when agent is running)", "RUNTIME (hours, minutes, seconds)", "CPU TEMP", "CPU GHz CLOCK SPEED", "GPU TEMP", "GPU GHz CLOCK SPEED".\
C. Below the status indicator panel should be an Ollama model selector, where the user will select from any currently installed ollama model. \
D. Below the Ollama model selector is the ability to add/edit/remove option for all "REQUESTS". \
E. Below the requests section is the "TOOLS" section. This section allows the user to enable/disable ALL available tools, and also allows the user to add/edit/remove tools. The user should be able to add new tools, and the user must specify the tool name, tool python code, and tool variables. \
F. Below the tools is a "WORKSPACE" button that will allow the user to specify a workspace folder/directory where all files will be saved and loaded. The agent will not be permitted to access anything outside this folder.\
G. Below the workspace button is a series of operational buttons, including "START", "PAUSE", "STOP" and "RESET".\
H. Below the operational buttons is the "PREVIOUS ACTION", "CURRENT ACTION", and "NEXT ACTION" of the AI agent. These will all be filled in once the AI agent starts.\
I. Below the set of actions should be the "AGENT OUTPUT" window which shows ALL output from the AI agent. \
J. Below the agent output is the "PROGRAM OUTPUT" showing the live terminal window of the program. \
K. On the right side is the "TASKS" list, which will automatically update once the AI agent starts. \
L. Directly above the operational buttons should be a "Continuous Mode" switch that will enable continuous mode, which ensures the AI agent never stops running. Once the AI agent fulfills all tasks, it will review all past work, and will review the user requests, and will generate another set of tasks to continue working on the user requests & to expand upon, improve upon, and build upon previous iterations. Every time all tasks are fulfilled, they will collapse in the task list & will become minimized to make room for a new set of tasks. \

The GUI shall take on a futuristic-retro, cyberpunk theme with neon glowing cyan text, an illuminated & animated background showing a wall of servers with flickering indicator lights and LCD status displays that change and wires going all over the place (you can use this GIF background here: https://i.postimg.cc/rF9rpk18/servers.gif), all buttons and switches and other GUI elements should be on physical panels, all text entry boxes and output/terminal windows should appear as if they are old-school computer terminal monitors, all buttons should illuminate red when non-active and green when active. \

\
SECTION #3 - CORE FUNCTIONS... \
Integrate all of the following:\
A. Ensure that all GUI elements are fully functional. \
B. Integrate the following base python tools: \
- DuckDuckGo_Search\
- File Save (txt, pdf, csv, py (python), html, css)\
- File Load \
- Execute Python Code (Executes either a python file or python code directly ALWAYS within a virtual environment)\
- Scrape Weebsite URL\
- Create New Tool (Allows the AI agent to create & save new tools)\
C. The AI agent should rely heavily upon its ability to generate, test, and execute python code (and use the execute python code tool) in order to fulfill tasks, and expand upon it's capabilities & functionality. It should utilize this capability to automatically self improve, and save all new functional & tested tools using the "Create New Tool" tool. \
\
SECTION #4 - Expected Output...\
1. You must fully integrate EVERYTHING laid out within this prompt into the program utilizing online documentation & code from example projects on Github to assist you. \
2. You may integrate additional features, GUI elements, capabilities, etc in order to improve upon the capabilities & features of the program, and to expand upon what is laid out in this prompt. \
3. You must continue autonomously & continuously without pausing until you are 100% done with all aspects of the program. \
4. You must export a full, complete, non-truncated code for "autoagi.py" file without ANY placeholders along with a full "requirements.txt" file.  

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/e5d8dc4d-f272-4fa8-aed2-a615e01fcbbe/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/e5d8dc4d-f272-4fa8-aed2-a615e01fcbbe/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/auto-genius-ai.git
cd auto-genius-ai
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/e5d8dc4d-f272-4fa8-aed2-a615e01fcbbe/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)