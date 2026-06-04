# Test Cases – Login Functionality

## Project: Film Crowdfunding Platform
## Module: Authentication (Login)  
---

## Project Context
The Film Crowdfunding Platform is a web-based application that allows users to browse, create, and support film-related crowdfunding projects. The login feature controls access to user accounts and platform functionalities.

This section focuses on validating the login behavior under common user scenarios, ensuring proper authentication, input handling, and basic usability.

---

## Test Cases
| Test Case ID | Scenario | Steps to Reproduce | Expected Result | Actual Result | Status | Notes |
|--------------|----------|------------------------|-----------------|---------------|--------|-------|
| TCL-001 | Successful login with valid credentials | 1. Open login page<br>2. Enter valid email/username<br>3. Enter valid password<br>4. Click login | User is authenticated and redirected to dashboard | Not executed | Not Executed | No execution data yet |
| TCL-002 | Incorrect password login | 1. Open login page<br>2. Enter valid email/username<br>3. Enter wrong password<br>4. Click login | System shows invalid credentials error | Not executed | Not Executed | Verify error message consistency |
| TCL-003 | Empty login fields | 1. Open login page<br>2. Leave email/username empty<br>3. Leave password empty<br>4. Click login | System shows validation messages and blocks submission | Not executed | Not Executed | Check required field validation |
| TCL-004 | Password visibility toggle | 1. Open login page<br>2. Enter password<br>3. Click show/hide password icon | Password toggles visibility without changing value | Not executed | Not Executed | Usability feature validation |

---

## Notes
- Covers basic functional validation of login module
