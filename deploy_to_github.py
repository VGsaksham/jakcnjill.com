#!/usr/bin/env python3
"""
GitHub Deployment Script for Jack & Jill Toys Website
This script automatically commits and pushes website changes to GitHub repository
"""

import os
import subprocess
import sys
from datetime import datetime
import json

class GitHubDeployer:
    def __init__(self, repo_url="https://github.com/VGsaksham/jakcnjill.com.git", website_dir="."):
        self.repo_url = repo_url
        self.website_dir = website_dir
        self.current_dir = os.getcwd()
        self.website_path = self.current_dir
        
    def run_command(self, command, cwd=None):
        """Execute a shell command and return the result"""
        try:
            result = subprocess.run(
                command, 
                shell=True, 
                cwd=cwd or self.website_path,
                capture_output=True, 
                text=True, 
                check=True
            )
            return result.stdout.strip(), True
        except subprocess.CalledProcessError as e:
            print(f"❌ Command failed: {command}")
            print(f"Error: {e.stderr}")
            return e.stderr, False
    
    def check_git_installed(self):
        """Check if Git is installed"""
        try:
            subprocess.run(["git", "--version"], capture_output=True, check=True)
            return True
        except (subprocess.CalledProcessError, FileNotFoundError):
            print("❌ Git is not installed or not in PATH")
            print("Please install Git: https://git-scm.com/downloads")
            return False
    
    def check_website_directory(self):
        """Check if website directory exists"""
        if not os.path.exists(self.website_path):
            print(f"❌ Website directory not found: {self.website_path}")
            print("Please make sure you're running this script from the correct location")
            return False
        print(f"✅ Website directory found: {self.website_path}")
        return True
    
    def initialize_git_repo(self):
        """Initialize Git repository if not exists"""
        git_dir = os.path.join(self.website_path, '.git')
        
        if not os.path.exists(git_dir):
            print("🔧 Initializing Git repository...")
            output, success = self.run_command("git init")
            if not success:
                return False
            print("✅ Git repository initialized")
        
        # Check if remote origin exists
        output, success = self.run_command("git remote -v")
        if success and "origin" not in output:
            print("🔧 Adding remote origin...")
            output, success = self.run_command(f"git remote add origin {self.repo_url}")
            if not success:
                return False
            print("✅ Remote origin added")
        elif success and "origin" in output:
            print("✅ Remote origin already configured")
        
        # Ensure we're on main branch
        print("🔧 Setting up main branch...")
        output, success = self.run_command("git branch -M main")
        if success:
            print("✅ Main branch configured")
        
        return True
    
    def create_gitignore(self):
        """Create .gitignore file for React project"""
        gitignore_path = os.path.join(self.website_path, '.gitignore')
        
        gitignore_content = """# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production
/build
/dist

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Temporary files
*.tmp
*.temp
"""
        
        if not os.path.exists(gitignore_path):
            with open(gitignore_path, 'w') as f:
                f.write(gitignore_content)
            print("✅ .gitignore file created")
        else:
            print("✅ .gitignore file already exists")
    
    def get_commit_message(self):
        """Generate commit message with timestamp"""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Try to detect what changed
        output, success = self.run_command("git status --porcelain")
        if success and output:
            changes = output.split('\n')
            modified_files = len([line for line in changes if line.startswith(' M')])
            added_files = len([line for line in changes if line.startswith('A')])
            deleted_files = len([line for line in changes if line.startswith(' D')])
            
            change_summary = []
            if added_files > 0:
                change_summary.append(f"{added_files} files added")
            if modified_files > 0:
                change_summary.append(f"{modified_files} files modified")
            if deleted_files > 0:
                change_summary.append(f"{deleted_files} files deleted")
            
            if change_summary:
                return f"Update Jack & Jill Toys website - {', '.join(change_summary)} ({timestamp})"
        
        return f"Update Jack & Jill Toys website ({timestamp})"
    
    def commit_and_push(self):
        """Commit changes and push to GitHub"""
        print("🔍 Checking for changes...")
        
        # Check if there are any changes
        output, success = self.run_command("git status --porcelain")
        if not success:
            return False
        
        if not output.strip():
            print("ℹ️  No changes to commit")
            return True
        
        print("📝 Changes detected:")
        status_output, _ = self.run_command("git status --short")
        print(status_output)
        
        # Add all changes
        print("➕ Adding all changes...")
        output, success = self.run_command("git add .")
        if not success:
            return False
        
        # Commit changes
        commit_message = self.get_commit_message()
        print(f"💾 Committing changes: {commit_message}")
        output, success = self.run_command(f'git commit -m "{commit_message}"')
        if not success:
            return False
        
        # Pull any remote changes first
        print("🔄 Pulling remote changes...")
        output, success = self.run_command("git pull origin main --allow-unrelated-histories --no-edit")
        if not success:
            print("ℹ️  No remote changes to pull or first push")
        
        # Push to GitHub main branch
        print("🚀 Pushing to GitHub main branch...")
        output, success = self.run_command("git push -u origin main")
        if not success:
            return False
        
        print("✅ Successfully pushed to GitHub main branch!")
        return True
    
    def get_repo_info(self):
        """Get repository information"""
        print("\n📊 Repository Information:")
        print(f"Repository URL: {self.repo_url}")
        print(f"Local Path: {self.website_path}")
        
        # Get current branch
        output, success = self.run_command("git branch --show-current")
        if success:
            print(f"Current Branch: {output}")
        
        # Get last commit
        output, success = self.run_command("git log -1 --oneline")
        if success:
            print(f"Last Commit: {output}")
        
        # Get remote URL
        output, success = self.run_command("git remote get-url origin")
        if success:
            print(f"Remote URL: {output}")
    
    def deploy(self):
        """Main deployment function"""
        print("🚀 Jack & Jill Toys Website Deployment Script")
        print("=" * 50)
        
        # Pre-deployment checks
        if not self.check_git_installed():
            return False
        
        if not self.check_website_directory():
            return False
        
        # Initialize Git repository
        if not self.initialize_git_repo():
            return False
        
        # Create .gitignore
        self.create_gitignore()
        
        # Commit and push changes
        if not self.commit_and_push():
            return False
        
        # Show repository info
        self.get_repo_info()
        
        print("\n🎉 Deployment completed successfully!")
        print(f"🌐 Your website is now updated at: {self.repo_url}")
        return True

def main():
    """Main function"""
    print("Jack & Jill Toys - GitHub Deployment Tool")
    print("=========================================\n")
    
    # Create deployer instance
    deployer = GitHubDeployer()
    
    # Ask for confirmation
    print(f"This will deploy the website from: {deployer.website_path}")
    print(f"To GitHub repository: {deployer.repo_url}")
    
    confirm = input("\nDo you want to proceed? (y/N): ").lower().strip()
    
    if confirm in ['y', 'yes']:
        success = deployer.deploy()
        if success:
            print("\n✅ All done! Your website has been updated on GitHub.")
        else:
            print("\n❌ Deployment failed. Please check the errors above.")
            sys.exit(1)
    else:
        print("❌ Deployment cancelled.")
        sys.exit(0)

if __name__ == "__main__":
    main() 