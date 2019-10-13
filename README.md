
# Mystery Lunch SPA

Mystery Lunch SPA is the frontend counterpart to the **Mystery Lunch bot** exercise, and it is designed as a scaffold to be extended by others.
It already includes all CSS, HTML and config files needed to communicate with the Mystery Lunch Bot API.

## Exercise:

Welcome to our little coding exercise.
You already achieved creating the Mystery Lunch bot, now let's make a nice little SPA to render the data!

The Mystery Lunch SPA has 2 main objectives:
	1. Communicate with the Mystery Lunch bot API, to get the lunch groups data from it.
	2. Assign a "Manager" to each lunch group. This person will be in charged of making sure the lunch is a success and that everybody enjoys it, so a "newbie" cannot be assigned as manager!

### Sections
The SPA includes 3 sections:

- Home Section:
  Just a simple "Welcome" page, with a welcome sign.

- Create Groups Section:
  From this section we will call the API and get the lunch groups.

- Show Groups Section:
  From this section we will show all groups and we will assign the managers, provided that the groups exist.

### Tasks
Here is what we want to achieve:

  **General:**
  1. Make the SPA navigable. Adding routes to all sections included in the <navigation> component.

  **Create Groups Section:**
  2. Call the Mystery Lunch bot API and get the Lunch Groups payload.
  3. Once the lunch groups are defined the "Create Groups" button should not be visible anymore.

  **Show Groups Section:**
  4. Check if the groups exist. If they don't exist, the page should re-route to the "createGroup" section.
  5. Render the groups on the page, following these conditions:
  5-1. Each group will need a "manager", which should be one of the people taken from response payload. The manager should not be a "newbie".
  5-2. The manager should be rendered separately from the rest of the people in the group.
  5-3. We want to render the groups and people using the components already included in the file.  

## Clarifications:

- Newbies are those employees with "joined_date" that matches the current year and month.
- You can use **any** libraries you see fit.
- Communication with the Mystery Lunch bot API should be handled using Vuex.
- Extra points for writing tests, but not necessary.

## Installation

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
