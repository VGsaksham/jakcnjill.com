# 🚀 Jack & Jill Toys Website - GitHub Deployment System

This deployment system automatically saves and updates your Jack & Jill Toys website to your GitHub repository at [https://github.com/VGsaksham/jakcnjill.com.git](https://github.com/VGsaksham/jakcnjill.com.git).

## 📁 Files Overview

- `deploy_to_github.py` - Main Python deployment script
- `deploy_config.json` - Configuration file for deployment settings
- `deploy.bat` - Windows batch file for easy execution
- `deploy.sh` - Linux/Mac shell script for easy execution
- `DEPLOYMENT_README.md` - This documentation file

## 🔧 Prerequisites

1. **Python** - Install from [python.org](https://python.org)
2. **Git** - Install from [git-scm.com](https://git-scm.com/downloads)
3. **GitHub Account** - With access to the repository

## 🚀 Quick Start

### Windows Users
1. Double-click `deploy.bat`
2. Follow the prompts
3. Your website will be automatically deployed!

### Linux/Mac Users
1. Open terminal in this directory
2. Run: `./deploy.sh`
3. Follow the prompts
4. Your website will be automatically deployed!

### Manual Execution
```bash
python deploy_to_github.py
```

## ✨ Features

### 🔄 Automatic Detection
- **Smart Change Detection** - Automatically detects what files have changed
- **Intelligent Commit Messages** - Generates descriptive commit messages with timestamps
- **File Status Reporting** - Shows exactly what files were added, modified, or deleted

### 🛡️ Safety Features
- **Pre-deployment Checks** - Verifies Git installation and directory structure
- **Confirmation Prompts** - Asks for confirmation before deploying
- **Error Handling** - Comprehensive error reporting and recovery

### 📝 Git Management
- **Auto-initialization** - Sets up Git repository if it doesn't exist
- **Remote Configuration** - Automatically configures GitHub remote
- **Gitignore Creation** - Creates appropriate .gitignore for React projects
- **Branch Handling** - Works with both main and master branches

## 📊 What Gets Deployed

### ✅ Included Files
- All React source code (`src/`)
- Public assets (`public/`)
- Configuration files (`package.json`, `tsconfig.json`, etc.)
- Documentation files

### ❌ Excluded Files (via .gitignore)
- `node_modules/` - Dependencies
- `.env*` - Environment variables
- `build/` - Production builds
- Log files
- IDE settings
- OS-specific files

## 🔧 Configuration

Edit `deploy_config.json` to customize:

```json
{
  "repository": {
    "url": "https://github.com/VGsaksham/jakcnjill.com.git",
    "branch": "main"
  },
  "website": {
    "directory": "jakcnjill.in",
    "name": "Jack & Jill Toys Website"
  },
  "deployment": {
    "auto_commit": true,
    "auto_push": true,
    "include_timestamp": true
  }
}
```

## 📋 Step-by-Step Process

When you run the deployment script, it:

1. **🔍 Checks Prerequisites**
   - Verifies Git installation
   - Confirms website directory exists

2. **🔧 Initializes Repository**
   - Sets up Git repository if needed
   - Configures GitHub remote
   - Creates .gitignore file

3. **📝 Processes Changes**
   - Detects modified, added, and deleted files
   - Generates descriptive commit message
   - Stages all changes

4. **🚀 Deploys to GitHub**
   - Commits changes with timestamp
   - Pushes to GitHub repository
   - Provides success confirmation

## 💡 Usage Examples

### Regular Updates
```bash
# After making changes to your website
python deploy_to_github.py
```

### Quick Deploy (Windows)
```cmd
deploy.bat
```

### Quick Deploy (Linux/Mac)
```bash
./deploy.sh
```

## 🐛 Troubleshooting

### Common Issues

#### Git Not Found
```
❌ Git is not installed or not in PATH
```
**Solution:** Install Git from [git-scm.com](https://git-scm.com/downloads)

#### Permission Denied
```
❌ Permission denied (publickey)
```
**Solution:** Configure GitHub SSH keys or use HTTPS with credentials

#### Directory Not Found
```
❌ Website directory not found
```
**Solution:** Ensure you're running the script from the correct location

#### No Changes Detected
```
ℹ️ No changes to commit
```
**Solution:** This is normal - no deployment needed

### Authentication Setup

#### Option 1: Personal Access Token (Recommended)
1. Go to GitHub Settings → Developer Settings → Personal Access Tokens
2. Generate new token with `repo` permissions
3. Use token as password when prompted

#### Option 2: SSH Keys
1. Generate SSH key: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
2. Add to GitHub: Settings → SSH and GPG keys
3. Update repository URL to SSH format

## 📈 Monitoring

### Successful Deployment Output
```
🚀 Jack & Jill Toys Website Deployment Script
==================================================
✅ Website directory found: /path/to/jakcnjill.in
✅ Git repository initialized
✅ Remote origin added
✅ .gitignore file created
📝 Changes detected:
 M src/pages/Home.tsx
 M src/pages/Home.css
💾 Committing changes: Update Jack & Jill Toys website - 2 files modified (2024-01-15 14:30:22)
🚀 Pushing to GitHub...
✅ Successfully pushed to GitHub!

📊 Repository Information:
Repository URL: https://github.com/VGsaksham/jakcnjill.com.git
Local Path: /path/to/jakcnjill.in
Current Branch: main
Last Commit: a1b2c3d Update Jack & Jill Toys website - 2 files modified (2024-01-15 14:30:22)
Remote URL: https://github.com/VGsaksham/jakcnjill.com.git

🎉 Deployment completed successfully!
🌐 Your website is now updated at: https://github.com/VGsaksham/jakcnjill.com.git
```

## 🔒 Security Notes

- Never commit sensitive information (API keys, passwords)
- The script automatically creates .gitignore to prevent common issues
- Environment variables are excluded by default
- Use Personal Access Tokens instead of passwords

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Ensure all prerequisites are installed
3. Verify your GitHub repository permissions
4. Check your internet connection

## 🎯 Quick Commands Reference

| Action | Windows | Linux/Mac | Manual |
|--------|---------|-----------|--------|
| Deploy | `deploy.bat` | `./deploy.sh` | `python deploy_to_github.py` |
| Check Git | `git --version` | `git --version` | `git --version` |
| Check Python | `python --version` | `python3 --version` | `python --version` |

---

**Happy Deploying! 🚀**

Your Jack & Jill Toys website will be automatically updated on GitHub every time you run this script! 