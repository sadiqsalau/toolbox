import type { IconTypes } from "solid-icons";
import {
  TbOutlineBolt,
  TbOutlineBrandChrome,
  TbOutlineBrandCodepen,
  TbOutlineBrandPython,
  TbOutlineBrandVscode,
  TbOutlineBroadcast,
  TbOutlineCode,
  TbOutlineDownload,
  TbOutlineExternalLink,
  TbOutlineEye,
  TbOutlineSchool,
} from "solid-icons/tb";

/** The categories a link belongs to. */
export const LinkCategory = {
  Install: "install",
  Extensions: "extensions",
  Online: "online",
} as const;

export type LinkCategory = (typeof LinkCategory)[keyof typeof LinkCategory];

/** A button on a link card. */
export interface LinkAction {
  label: string;
  href: string;
}

/** A program, extension or website the students use. */
export interface ResourceLink {
  id: string;
  name: string;
  description: string;
  note?: string;
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
}

/** The sections of the page, in display order. */
export const sections: LinkSection[] = [
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
    description: "Offline installers for Windows 10 and 11.",
    actionIcon: TbOutlineDownload,
    external: false,
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
    description: "The web browser for testing our HTML pages.",
    icon: TbOutlineBrandChrome,
    category: LinkCategory.Install,
    actions: [
      {
        label: "64-bit",
        href: "https://dl.google.com/chrome/install/ChromeStandaloneSetup64.exe",
      },
      {
        label: "32-bit",
        href: "https://dl.google.com/chrome/install/ChromeStandaloneSetup.exe",
      },
    ],
  },
  {
    id: "python",
    name: "Python 3.15.2",
    description: "The Python language itself.",
    note: 'Tick "Add python.exe to PATH", choose "Customize installation", then tick "Install for all users".',
    icon: TbOutlineBrandPython,
    category: LinkCategory.Install,
    actions: [
      {
        label: "64-bit",
        href: "https://www.python.org/ftp/python/3.15.2/python-3.15.2-amd64.exe",
      },
      {
        label: "32-bit",
        href: "https://www.python.org/ftp/python/3.15.2/python-3.15.2.exe",
      },
    ],
  },
  {
    id: "thonny",
    name: "Thonny 5.0.0",
    description: "A simple Python editor for beginners.",
    note: 'Comes with Python built in. Choose "Install for all users".',
    icon: TbOutlineSchool,
    category: LinkCategory.Install,
    actions: [
      {
        label: "64-bit",
        href: "https://github.com/thonny/thonny/releases/download/v5.0.0/thonny-5.0.0-x64.exe",
      },
    ],
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    description: "A code editor for Python and HTML.",
    icon: TbOutlineBrandVscode,
    category: LinkCategory.Install,
    actions: [
      {
        label: "64-bit",
        href: "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64",
      },
    ],
  },
  {
    id: "sublime",
    name: "Sublime Text 4",
    description: "A light, fast code editor.",
    note: "Build 4215. Free to use; it may ask you to buy a licence.",
    icon: TbOutlineCode,
    category: LinkCategory.Install,
    actions: [
      {
        label: "64-bit",
        href: "https://download.sublimetext.com/sublime_text_build_4215_x64_setup.exe",
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
    id: "bolt",
    name: "Bolt.new",
    description: "Build web apps by describing them in plain English.",
    icon: TbOutlineBolt,
    category: LinkCategory.Online,
    actions: [{ label: "Open", href: "https://bolt.new/" }],
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
];
