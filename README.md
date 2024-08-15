# To-do App

### Description
This app allows the user to create and manage to-do tasks across three different stages and supports applying tags to them

### Technical details
This app was designed using react, javascript and css files. 

Components list:
- TaskColumn: component for each of the status columns (i.e. To-do, Doing, Done)
- Tag: component that handles the tags on both the cards and in the header
- TaskForm: Component for the header that contains the selectable tags, the title input and the status dropdown selector
- TaskCard: Cards that are added and deleted containing the task information

The application saves the tasks locally in the browser to keep the data even after the page has been reloaded. If the tasks can not be found in local data, the app defaults to an empty tasks array.
