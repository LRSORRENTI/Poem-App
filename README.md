# PoetryDB API App

**This is a simple web application that fetches and displays random poems formatted as poems from the PoetryDB API. Users can save their favorite poems and toggle the display of their favorite poem list.**

## Features

- **Fetch a random poem (formatted from three-line poems) with a single button click.**
- **Save favorite poems to local storage.**
- **Show or hide the list of favorite poems.**
- **Remove poems from the favorites list.**

### Technologies Used
- **HTML**
- **CSS**
- **JavaScript**
- **PoetryDB API (for fetching poems)**

### How It Works

**Fetching a Random poem**

1. The user clicks the "Get Random poem" button.

2. A fetch request is sent to the PoetryDB API to retrieve poems with three lines.

3. A random poem is selected from the fetched data and formatted to appear as a poem.

4. The formatted poem is displayed in the #poem div.

5. The "Save to Favorites" button appears, allowing the user to save the displayed poem.

**Saving to Favorites**

1. The user clicks the "Save to Favorites" button.

2. The displayed poem is saved to the browser's local storage.

3. The favorites list is updated to include the new poem.

**Toggling Favorites List**

1. The user clicks the "Show Favorites" button to display the list of saved poems.

2. The user clicks the "Hide Favorites" button to hide the list of saved poems.

3. The button text changes based on the current state (show or hide).

**Removing from Favorites**

1. Each favorite poem in the list has a "Remove" button.

2. The user clicks the "Remove" button to delete the poem from the favorites list.

3. The favorites list and local storage are updated accordingly.

### Prerequisites

**A web browser with JavaScript enabled.**

### Steps

1. Clone or download the repository.
```
git clone 
```
2. Open the index.html file in a web browser.

3. Click the "Get Random poem" button to fetch and display a random poem.

4. Click the "Save to Favorites" button to save the displayed poem.

5. Click the "Show Favorites" button to toggle the display of the favorite poems list.

6. Click the "Remove" button next to any favorite poem to delete it from the list.

### Code Overview

- **The HTML structure includes buttons for fetching poems, saving favorites, and toggling the favorites list. It also contains a div for displaying the poem and an unordered list for showing favorite poems.**

- **Basic CSS styling is applied to make the app visually appealing. Styles include padding, margins, background colors, and shadow effects for a clean look.**

- **JavaScript handles the following functionalities:**

- **Fetching random three-line poems from the PoetryDB API.**

- **Formatting and displaying the fetched poem as a poem.**

- **Saving and retrieving favorite poems from local storage.** 

- **Updating the DOM with favorite poems.**

- **Toggling the display of the favorite poems list.**

- **Removing poems from the favorites list.**

### Contributing

**Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements or new features.**

### License
**This project is open-source and available under the MIT License.**