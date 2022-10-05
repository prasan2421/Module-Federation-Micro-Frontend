
# React application Module federation example with micro frontend architecture

This is an example project to show multiple micro application developed in different frameworks (React,Angular,Vue,Svelte) can be included in the same application through module federation brought by webpack 5.

## components

### App - 
React application developed using create react app and acting as shell(Container) application which renders small micro application.

### Header -
Its a React application developed using create react app and acting as micro application which renders header of the application

### Left sidebar -
Its an Angular application developed using angular cli and acting as micro application which renders left sidebar of the application

### Right sidebar -
Its a Vue application developed using vue cli and acting as micro application which renders right sidebar of the application

### Footer -
Its a Svelte application developed using svelte webpack template and acting as micro application which renders footer of the application

### How to run the application

- Go to each folder(app,header,left-sidebar,right-sidebar,footer) and run `npm start`
- Open browser and type `http://localhost:3000`


# Module-Federation-Micro-Frontend

