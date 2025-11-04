#!/usr/bin/env node
import { execSync } from "child_process";
import path from "path";
import fs from "fs";

const repoUrl = "https://github.com/shivam-yadav2/my-react-project.git"; // your repo link

const folderName = process.argv[2] || "my-project";
const targetPath = path.join(process.cwd(), folderName);

if (fs.existsSync(targetPath)) {
  console.log(`❌ Folder "${folderName}" already exists.`);
  process.exit(1);
}

console.log("🚀 Cloning project...");
execSync(`git clone ${repoUrl} ${folderName}`, { stdio: "inherit" });

console.log("✅ Repository cloned successfully!");
console.log(`\nNext steps:`);
console.log(`  cd ${folderName}`);
console.log(`  npm install`);
console.log(`  npm start`);
