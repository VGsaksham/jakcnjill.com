#!/bin/bash

echo "========================================"
echo "Jack & Jill Toys - GitHub Deployment"
echo "========================================"
echo

# Check if Python is installed
if ! command -v python3 &> /dev/null && ! command -v python &> /dev/null; then
    echo "❌ ERROR: Python is not installed or not in PATH"
    echo "Please install Python from https://python.org"
    exit 1
fi

# Determine Python command
PYTHON_CMD="python3"
if ! command -v python3 &> /dev/null; then
    PYTHON_CMD="python"
fi

echo "Using Python: $PYTHON_CMD"
echo

# Run the deployment script
echo "Running deployment script..."
echo

$PYTHON_CMD deploy_to_github.py

echo
echo "Deployment script completed."
read -p "Press Enter to continue..." 