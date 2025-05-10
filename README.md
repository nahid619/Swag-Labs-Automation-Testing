# 🧪 SauceDemo Automation Test Suite (WebDriverIO)

This repository contains an automated test suite built with **WebDriverIO** to validate functionalities on the [SauceDemo](https://www.saucedemo.com/) website. The suite covers login scenarios, cart management, checkout processes, and application state resets using multiple user roles.

---

## 📋 Assessment Scenarios

### ✅ Q1 – Locked User Login Validation (20 marks)
- Attempt login with `locked_out_user` and Verify the error message:  
  _"Epic sadface: Sorry, this user has been locked out."_

### ✅ Q2 – Standard User Full Purchase Flow (50 marks)
- Login as `standard_user`
- Reset app state
- Add any 3 items to the cart
- Proceed to checkout and verify:
  - Product names
  - Total price
- Complete the purchase
- Confirm success message: _"THANK YOU FOR YOUR ORDER"_
- Reset state again 
- logout

### ✅ Q3 – Performance Glitch User with Sorting (30 marks)
- Login as `performance_glitch_user`
- Reset app state
- Sort products by Name (Z to A)
- Add the first listed product to the cart
- Proceed to checkout and verify:
  - Product Name
  - Product Price
  - Total Price
- Complete the purchase
- Confirm success message: _"THANK YOU FOR YOUR ORDER"_
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
│   ├── locked_out_user.spec.js                # Test for locked_out_user login
│   ├── performance_glitch_user.spec.js        # Test for performance_glitch_user shopping 
│   ├── standard_user.spec.js                  # Test for standard_user shopping
│   ├── test.spec.js                           # testing file
│   
├── test/
│   ├── Q1/
│   │   ├── loginActions.js      # Q1-specific actions
│   │   ├── loginObjects.js      # Q1-specific objects
│   ├── Q2/
│   │   ├── cartActions.js         # Q2-specific actions
│   │   ├── cartObjects.js         # Q2-specific objects
│   │   ├── productActions.js      # Q2-specific actions
│   │   ├── productObjects.js      # Q2-specific objects
│   ├── Q3/
│   │   ├── cartActions.js         # Q3-specific actions
│   │   ├── cartObjects.js         # Q3-specific objects
│   │   ├── filterActions.js       # Q3-specific actions
│   │   ├── filterObjects.js       # Q3-specific objects
│
├── wdio.conf.js             # WebdriverIO configuration file
├── package.json             # NPM dependencies & scripts
└── README.md                # This README file
```

## Prerequisites

Before running the tests, ensure you have the following installed:

1. **Node.js** (>= 16.x)
2. **NPM** (>= 8.x)
3. **Microsoft Edge** (latest stable version)


---

## 🚀 Setup & Execution

### 1. Clone the repository

```bash
git clone https://github.com/nahid619/Swag-Labs-Automation-Testing.git
cd Swag-Labs-Automation-Testing
```
### 2. Install dependencies
```bash
npm install
```