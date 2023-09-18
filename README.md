# Angular Design System Boilerplate

This project is seemed to help with the starting point of any Angular design
system using sass and Material components.

## How to develop

`npm run build --watch`

`cd dist/ui`

`npm link`

In the desired app use:

`npm link @brunochirelli/angular-design-system-boilerplate` # or whatever name
you gave to the project

## How to publish

`npm run build`

`cd dist/ui`

`npm publish --access public`

## How to lint

Check lint scripts in package.json

## How to use

Import the main stylesheet from:

`"node_modules/@brunochirelli/angular-design-system-boilerplate/lib/styles/main.css"`

Be aware of the lib name you gave to the project.
