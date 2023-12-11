# React Password Validation App

This Application provides a password validation component built with React, TypeScript, and Vite. It ensures robust password policies and matches user entries across two input fields.

## Features

- **Dual Input Validation**: Ensures that both password inputs match.
- **Complexity Requirements**: Enforces a minimum length of 6 characters and requires at least one uppercase character, one lowercase character, one number, and one special character (`!@#$%^&*()_-+={[}]|:;"'<,>.`).

## Installation

To install this library, clone the repository to your local machine:

```bash
git clone [repository-url]
```

Then, navigate to the library directory and install dependencies:

```bash
cd [library-directory]
npm install
```

## Usage

To run this application, execute the following command:

```bash
npm run dev
```


## Validation

The component will validate the password based on the following criteria:

- Minimum length of 6 characters.
- At least one uppercase character.
- At least one lowercase character.
- At least one number.
- At least one special character (`!@#$%^&*()_-+={[}]|:;"'<,>.`).

If the passwords in both input fields do not match or do not meet the complexity requirements, an appropriate error message will be displayed.
