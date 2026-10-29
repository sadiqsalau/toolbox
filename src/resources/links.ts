import type { IconTypes } from "solid-icons";
import {
  TbOutlineAlertTriangle,
  TbOutlineBolt,
  TbOutlineBrandChrome,
  TbOutlineBrandCodepen,
  TbOutlineBrandCpp,
  TbOutlineBrandNodejs,
  TbOutlineBrandPython,
  TbOutlineBrandVscode,
  TbOutlineBrackets,
  TbOutlineBroadcast,
  TbOutlineCode,
  TbOutlineDownload,
  TbOutlineExternalLink,
  TbOutlineEye,
  TbOutlineHeart,
  TbOutlineSchool,
  TbOutlineTags,
  TbOutlineTerminal2,
  TbOutlineWand,
} from "solid-icons/tb";

import { Platform } from "../lib/platform";

/** The categories a link belongs to. */
export const LinkCategory = {
  Install: "install",
  Extensions: "extensions",
  Online: "online",
  AI: "ai",
} as const;

export type LinkCategory = (typeof LinkCategory)[keyof typeof LinkCategory];

/** A button on a link card. */
export interface LinkAction {
  label: string;
  href: string;
  platform?: Platform;
}

/** A program, extension or website the students use. */
export interface ResourceLink {
  id: string;
  name: string;
  description: string;
  note?: string;
  website?: string;
  icon: IconTypes;
  category: LinkCategory;
  actions: LinkAction[];
}

/** A group of links shown under one heading. */
export interface LinkSection {
  category: LinkCategory;
  title: string;
  description: string;
  actionIcon: IconTypes;
  external: boolean;
  showPlatform?: boolean;
}

/** The sections of the page, in display order. */
export const sections: LinkSection[] = [
  {
    category: LinkCategory.AI,
    title: "AI",
    description: "Build apps by describing them to AI, in the browser.",
    actionIcon: TbOutlineExternalLink,
    external: true,
  },
  {
    category: LinkCategory.Online,
    title: "Online",
    description: "Nothing to install. Use these in the browser.",
    actionIcon: TbOutlineExternalLink,
    external: true,
  },
  {
    category: LinkCategory.Install,
    title: "Install",
    description: "Offline installers for Windows 10 and 11, and macOS.",
    actionIcon: TbOutlineDownload,
    external: false,
    showPlatform: true,
  },
  {
    category: LinkCategory.Extensions,
    title: "VS Code Extensions",
    description: "Open in the browser, then press Install.",
    actionIcon: TbOutlineExternalLink,
    external: true,
  },
];

/** Every link on the page. */
export const links: ResourceLink[] = [
  {
    id: "chrome",
    name: "Google Chrome",
    description: "A fast web browser, also for testing web pages.",
    website: "https://www.google.com/chrome/",
    icon: TbOutlineBrandChrome,
    category: LinkCategory.Install,
    actions: [
      {
        label: "Windows",
        href: "https://dl.google.com/chrome/install/ChromeStandaloneSetup64.exe",
        platform: Platform.Windows,
      },
      {
        label: "Windows 32-bit",
        href: "https://dl.google.com/chrome/install/ChromeStandaloneSetup.exe",
        platform: Platform.Windows,
      },
      {
        label: "macOS",
        href: "https://dl.google.com/chrome/mac/universal/stable/GGRO/googlechrome.dmg",
        platform: Platform.MacOS,
      },
    ],
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    description: "A code editor for almost any language.",
    website: "https://code.visualstudio.com/",
    icon: TbOutlineBrandVscode,
    category: LinkCategory.Install,
    actions: [
      {
        label: "Windows",
        href: "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64",
        platform: Platform.Windows,
      },
      {
        label: "macOS",
        href: "https://update.code.visualstudio.com/latest/darwin-universal/stable",
        platform: Platform.MacOS,
      },
    ],
  },
  {
    id: "sublime",
    name: "Sublime Text 4",
    description: "A light, fast code editor.",
    note: "Build 4215. Free to use; it may ask you to buy a licence.",
    website: "https://www.sublimetext.com/",
    icon: TbOutlineCode,
    category: LinkCategory.Install,
    actions: [
      {
        label: "Windows",
        href: "https://download.sublimetext.com/sublime_text_build_4215_x64_setup.exe",
        platform: Platform.Windows,
      },
      {
        label: "macOS",
        href: "https://download.sublimetext.com/sublime_text_build_4215_mac.zip",
        platform: Platform.MacOS,
      },
    ],
  },
  {
    id: "node",
    name: "Node.js 26.13.0 LTS",
    description: "Run JavaScript outside the browser. Comes with npm.",
    website: "https://nodejs.org/",
    icon: TbOutlineBrandNodejs,
    category: LinkCategory.Install,
    actions: [
      {
        label: "Windows",
        href: "https://nodejs.org/dist/v26.13.0/node-v26.13.0-x64.msi",
        platform: Platform.Windows,
      },
      {
        label: "macOS",
        href: "https://nodejs.org/dist/v26.13.0/node-v26.13.0.pkg",
        platform: Platform.MacOS,
      },
    ],
  },
  {
    id: "python",
    name: "Python 3.15.2",
    description: "The Python language itself.",
    note: 'On Windows, tick "Add python.exe to PATH", choose "Customize installation", then tick "Install for all users".',
    website: "https://www.python.org/",
    icon: TbOutlineBrandPython,
    category: LinkCategory.Install,
    actions: [
      {
        label: "Windows",
        href: "https://www.python.org/ftp/python/3.15.2/python-3.15.2-amd64.exe",
        platform: Platform.Windows,
      },
      {
        label: "Windows 32-bit",
        href: "https://www.python.org/ftp/python/3.15.2/python-3.15.2.exe",
        platform: Platform.Windows,
      },
      {
        label: "macOS",
        href: "https://www.python.org/ftp/python/3.15.2/python-3.15.2-macos11.pkg",
        platform: Platform.MacOS,
      },
    ],
  },
  {
    id: "thonny",
    name: "Thonny 5.0.0",
    description: "A simple Python editor for beginners.",
    note: 'Comes with Python built in. On Windows, choose "Install for all users". On a Mac, check your chip under Apple menu > About This Mac.',
    website: "https://thonny.org/",
    icon: TbOutlineSchool,
    category: LinkCategory.Install,
    actions: [
      {
        label: "Windows",
        href: "https://github.com/thonny/thonny/releases/download/v5.0.0/thonny-5.0.0-x64.exe",
        platform: Platform.Windows,
      },
      {
        label: "macOS Apple chip",
        href: "https://github.com/thonny/thonny/releases/download/v5.0.0/thonny-5.0.0-arm64.pkg",
        platform: Platform.MacOS,
      },
      {
        label: "macOS Intel",
        href: "https://github.com/thonny/thonny/releases/download/v5.0.0/thonny-5.0.0-x64.pkg",
        platform: Platform.MacOS,
      },
    ],
  },
  {
    id: "codeblocks",
    name: "Code::Blocks 25.03",
    description: "A C and C++ editor that comes with a compiler.",
    note: "Large download, about 420 MB.",
    website: "https://www.codeblocks.org/",
    icon: TbOutlineBrackets,
    category: LinkCategory.Install,
    actions: [
      {
        label: "Windows",
        href: "https://sourceforge.net/projects/codeblocks/files/Binaries/25.03/Windows/codeblocks-25.03mingw-setup.exe/download",
        platform: Platform.Windows,
      },
      {
        label: "Windows 32-bit",
        href: "https://sourceforge.net/projects/codeblocks/files/Binaries/25.03/Windows/32bit/codeblocks-25.03mingw-32bit-setup.exe/download",
        platform: Platform.Windows,
      },
    ],
  },
  {
    id: "vscode-live-server",
    name: "Live Server",
    description: "Reload the browser every time you save an HTML file.",
    icon: TbOutlineBroadcast,
    category: LinkCategory.Extensions,
    actions: [
      {
        label: "Open",
        href: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
      },
    ],
  },
  {
    id: "vscode-auto-rename-tag",
    name: "Auto Rename Tag",
    description: "Rename an HTML closing tag when you rename its opening tag.",
    icon: TbOutlineTags,
    category: LinkCategory.Extensions,
    actions: [
      {
        label: "Open",
        href: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",
      },
    ],
  },
  {
    id: "vscode-python",
    name: "Python",
    description: "Run and debug Python files in VS Code.",
    icon: TbOutlineBrandPython,
    category: LinkCategory.Extensions,
    actions: [
      {
        label: "Open",
        href: "https://marketplace.visualstudio.com/items?itemName=ms-python.python",
      },
    ],
  },
  {
    id: "vscode-cpp",
    name: "C/C++",
    description: "Write and debug C and C++ in VS Code.",
    icon: TbOutlineBrandCpp,
    category: LinkCategory.Extensions,
    actions: [
      {
        label: "Open",
        href: "https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools",
      },
    ],
  },
  {
    id: "vscode-prettier",
    name: "Prettier",
    description: "Tidy up the layout of your code with one command.",
    icon: TbOutlineWand,
    category: LinkCategory.Extensions,
    actions: [
      {
        label: "Open",
        href: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
      },
    ],
  },
  {
    id: "vscode-error-lens",
    name: "Error Lens",
    description: "Show errors right on the line where they happen.",
    icon: TbOutlineAlertTriangle,
    category: LinkCategory.Extensions,
    actions: [
      {
        label: "Open",
        href: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
      },
    ],
  },
  {
    id: "bolt",
    name: "Bolt.new",
    description: "Build web apps by describing them in plain English.",
    icon: TbOutlineBolt,
    category: LinkCategory.AI,
    actions: [{ label: "Open", href: "https://bolt.new/" }],
  },
  {
    id: "lovable",
    name: "Lovable",
    description: "Build web apps by chatting with AI.",
    icon: TbOutlineHeart,
    category: LinkCategory.AI,
    actions: [{ label: "Open", href: "https://lovable.dev/" }],
  },
  {
    id: "python-tutor",
    name: "Python Tutor",
    description: "Watch your Python code run, one step at a time.",
    icon: TbOutlineEye,
    category: LinkCategory.Online,
    actions: [
      { label: "Open", href: "https://pythontutor.com/visualize.html" },
    ],
  },
  {
    id: "codepen",
    name: "CodePen",
    description: "Write HTML and CSS and see the result as you type.",
    icon: TbOutlineBrandCodepen,
    category: LinkCategory.Online,
    actions: [{ label: "Open", href: "https://codepen.io/pen/" }],
  },
  {
    id: "onlinegdb",
    name: "OnlineGDB",
    description: "Write, run and debug Python, C and C++ in the browser.",
    icon: TbOutlineTerminal2,
    category: LinkCategory.Online,
    actions: [
      {
        label: "Python",
        href: "https://www.onlinegdb.com/online_python_compiler",
      },
      { label: "C", href: "https://www.onlinegdb.com/online_c_compiler" },
      { label: "C++", href: "https://www.onlinegdb.com/online_c++_compiler" },
    ],
  },
];
