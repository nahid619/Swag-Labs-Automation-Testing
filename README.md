# 🧪 SauceDemo Automation Test Suite (WebDriverIO)

This repository contains an automated test suite built with **WebDriverIO** to validate functionalities on the [SauceDemo](https://www.saucedemo.com/) website. The suite covers login scenarios, cart management, checkout processes, and application state resets using multiple user roles.

---

## 📋 Assessment Scenarios

### ✅ Q1 – Locked User Login Validation 
- Opens the website without any issue.
- Attempt login with `locked_out_user` and Verify the error message:  
  _"Epic sadface: Sorry, this user has been locked out."_

### ✅ Q2 – Standard User Full Purchase Flow
- Login as `standard_user`
- Reset app state
- Add any 3 items to the cart
- Proceed to checkout and verify:
  - Product names
  - Product prices
  - Total price
- Complete the purchase
- Confirm success message: _"Thank you for your order!"_
- Reset state again 
- logout

### ✅ Q3 – Performance Glitch User with Sorting 
- Login as `performance_glitch_user`
- Reset app state
- Sort products by Name (Z to A)
- Add the first listed product to the cart
- Proceed to checkout and verify:
  - Product Name
  - Product Price
  - Total Price
- Complete the purchase
- Confirm success message: _"Thank you for your order!"_
- Reset state again 
- logout

---

## ⚙️ Tech Stack

- **WebDriverIO** (v8+)
- **JavaScript (ES6)**
- **Mocha** Test Framework
- **Allure Reporter and Spec** for reporting
- **Page Object Model (POM)** design pattern

---

## 📂 Project Structure
```bash
├── specs/
│   ├── locked_out_user.spec.js                # Q1 scenario Test for locked_out_user login
│   ├── performance_glitch_user.spec.js        # Q1 scenario Test for performance_glitch_user shopping
│   ├── standard_user.spec.js                  # Q1 scenario Test for standard_user shopping
│   ├── test.spec.js                           # Utility testing file
│   
├── test/                        
│   ├── Q1/                     
│   │   ├── loginActions.js      
│   │   ├── loginObjects.js     
│   ├── Q2/                   
│   │   ├── cartActions.js         
│   │   ├── cartObjects.js         
│   │   ├── productActions.js      
│   │   ├── productObjects.js      
│   ├── Q3/                     
│   │   ├── cartActions.js         
│   │   ├── cartObjects.js        
│   │   ├── filterActions.js       
│   │   ├── filterObjects.js     
│
├── wdio.conf.js         # WebdriverIO configuration file
├── package.json         # NPM dependencies & scripts
└── README.md            # This README file
```

## Prerequisites

Before running the tests, ensure you have the following installed:

1. **Node.js** (>= 16.x)
2. **NPM** (>= 8.x)
3. **Microsoft Edge** (latest stable version)
4. **JAVA JDK** (LTS version latest)

### Check Java installation
```bash
java -version
```
If Java is not installed, download(LTS version) it from: [JAVA_JDK](https://www.oracle.com/apac/java/technologies/downloads/#jdk21-windows)
<br>
Make sure to set the JAVA_HOME environment variable and add it to your system path.

## 🚀 Setup

### 1. Clone the repository
```bash
git clone https://github.com/nahid619/Swag-Labs-Automation-Testing.git
cd Swag-Labs-Automation-Testing
```
### 2. Install dependencies
```bash
npm install
```
### 3. Install Allure CLI
```bash
npm install -g allure-commandline --save-dev
```
---

## 🚀 Execution
### Test Credentials
```bash
Username                         | Password
-------------------------------------------------
locked_out_user -----------------| secret_sauce
standard_user   -----------------| secret_sauce
performance_glitch_user ---------| secret_sauce
```
### Run Test Scenarios
- Run for locked_out_user (Q1)
```bash
npm run Q1
```
- Run for standard_user (Q2)
```bash
npm run Q2
```
- Run for performance_glitch_user (Q3)
```bash
npm run Q3
```
- Run for all 3 user scenarios concurrently (multi-browser)
```bash
npm run wdio
```
- Run for all 3 user scenarios in sequential manner
```bash
npm run run:sequential
```
---
## 📊 Allure Report Generation
- After each test execution, generate and open the Allure report using:
```bash
npm run allure:report
```
If this command fails, ensure you’ve installed Java and Allure CLI properly.

---
### 📌 Notes
- All scenarios include app state reset to maintain test independence
- Test design follows the Page Object Model for clean separation
- Allure and Spec reporters provide detailed and interactive test results
- You may customize the test data or browser settings in wdio.conf.js
---

Let me know if you like the project by giving it a star and following me.

---