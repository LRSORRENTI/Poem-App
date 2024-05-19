# HTMX + Poetry API Haiku App

**This is a simple web application that fetches and displays random poems formatted as haikus from the PoetryDB API. Users can save their favorite haikus and toggle the display of their favorite haiku list.**

## Features

- **Fetch a random haiku (formatted from three-line poems) with a single button click.**
- **Save favorite haikus to local storage.**
- **Show or hide the list of favorite haikus.**
- **Remove haikus from the favorites list.**

### Technologies Used
- **HTML**
- **CSS**
- **JavaScript**
- **HTMX (for enhanced DOM interactions)**
- **PoetryDB API (for fetching poems)**

### How It Works

**Fetching a Random Haiku**

1. The user clicks the "Get Random Haiku" button.

2. A fetch request is sent to the PoetryDB API to retrieve poems with three lines.

3. A random poem is selected from the fetched data and formatted to appear as a haiku.

4. The formatted haiku is displayed in the #haiku div.

5. The "Save to Favorites" button appears, allowing the user to save the displayed haiku.

**Saving to Favorites**

1. The user clicks the "Save to Favorites" button.

2. The displayed haiku is saved to the browser's local storage.

3. The favorites list is updated to include the new haiku.

**Toggling Favorites List**

1. The user clicks the "Show Favorites" button to display the list of saved haikus.

2. The user clicks the "Hide Favorites" button to hide the list of saved haikus.

3. The button text changes based on the current state (show or hide).

**Removing from Favorites**

1. Each favorite haiku in the list has a "Remove" button.

2. The user clicks the "Remove" button to delete the haiku from the favorites list.

3. The favorites list and local storage are updated accordingly.

### Prerequisites

**A web browser with JavaScript enabled.**

### Steps

1. Clone or download the repository.
```
git clone 
```
2. Open the index.html file in a web browser.

3. Click the "Get Random Haiku" button to fetch and display a random haiku.

4. Click the "Save to Favorites" button to save the displayed haiku.

5. Click the "Show Favorites" button to toggle the display of the favorite haikus list.

6. Click the "Remove" button next to any favorite haiku to delete it from the list.

### Code Overview
- HTML
**The HTML structure includes buttons for fetching haikus, saving favorites, and toggling the favorites list. It also contains a div for displaying the haiku and an unordered list for showing favorite haikus.**

- CSS
**Basic styling is applied to make the app visually appealing. Styles include padding, margins, background colors, and shadow effects for a clean look.**

3. JavaScript
**JavaScript handles the following functionalities:**

- **Fetching random three-line poems from the PoetryDB API.**

- **Formatting and displaying the fetched poem as a haiku.**

- **Saving and retrieving favorite haikus from local storage.** 

- **Updating the DOM with favorite haikus.**

- **Toggling the display of the favorite haikus list.**

- **Removing haikus from the favorites list.**

4. HTMX

- **HTMX is used to enhance DOM interactions and handle client-side requests seamlessly.**

### Contributing

**Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements or new features.**

### License
**This project is open-source and available under the MIT License.**