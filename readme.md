# Workflow CA - Noroff

# Introduction

I have forked the Noroff Social Media Client project [Noroff Social Media Client](https://github.com/noroffFEU/social-media-client) and prepared the project for formatting and testing using Eslint, husky, prettier, Cypress and Jest.

## Configuration
The project has been configured for Jest and Cypress and we have created several tests to cover the required cases. 

### The required cases are as followed:
#### Unit testing
- The login function stores a token when provided with valid credentials.
- The logout function clears the token from browser storage.

#### E2E Testing 
- The user can log in with the login form with valid credentials.
- The user cannot submit the login form with invalid credentials and is shown a message.
- The user can log out with the logout button.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Barvand/social-media-client-workflow.git

### gitHub workflow status badges 
[![Automated Unit Testing](https://github.com/Barvand/social-media-client-workflow/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Barvand/social-media-client-workflow/actions/workflows/unit-test.yml)
[![Deploy static content to Pages](https://github.com/Barvand/social-media-client-workflow/actions/workflows/pages.yml/badge.svg)](https://github.com/Barvand/social-media-client-workflow/actions/workflows/pages.yml)
[![Automated E2E Testing](https://github.com/Barvand/social-media-client-workflow/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Barvand/social-media-client-workflow/actions/workflows/e2e-test.yml)