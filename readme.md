# UI library

Component library to make frontend development easier within myBrand for React.

## Development

Created components are stored in the components' folder.
To view your changed, change the name of the index.ts temporarily (otherwise the changes won't be visible).
Add changed code to the `App.tsx`

## Deployment
- Make sure the `index.ts` is present
- Make sure all the exportable components are present in this file.

## How to import
- Generate a token in GitHub with at least read:package property
- Create a file named `.npmrc`
- Add the following lines in the file:
    - @mybrand-products:registry=https://npm.pkg.github.com
    - //npm.pkg.github.com/:_authToken=YOUR_TOKEN_FROM_STEP_1
- run `npm install`

## Links
- [Documentation](https://sap.github.io/ui5-webcomponents-react/?path=/docs/getting-started--docs)
