# Farm Chores App

The Farm Chores App is a web application designed to help manage daily farm chores in a fun and interactive way. With a rustic barn theme, users can add chores to their to-do list, check them off once completed, and enjoy a visually rewarding experience. This application is built with Flask, leveraging HTML, CSS, and JavaScript for a dynamic user interface.

## Features

- **Chore Lists**: Users can create multiple chore lists to organize tasks by category or time of day.
- **Interactive Checklists**: Add chores to each list and check them off upon completion.
- **Rustic Barn Theme**: A beautiful barn-themed background with stylized forms and buttons.
- **Dynamic List Addition**: Seamlessly add new lists with a simple click, dynamically expanding your workspace.
- **Customizable Chore Icons**: Each chore is accompanied by a cute farm animal icon, cycling through a set of predefined images for a personalized touch.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Python 3
- Flask

### Installation

1. **Clone the repository:**
```sh
git clone https://github.com/TristynWS/FarmChoresApp.git
```

2. **Navigate to the project directory:**
```sh
cd farmchoresapp
```

3. **Create and activate a virtual environment:**
- For Windows:
```sh
python -m venv venv
venv\Scripts\activate
```
- For macOS and Linux:
```sh
python3 -m venv venv
source venv/bin/activate
```

4. **Install the requirements:**
```sh
pip install flask
```

5. **Start the application:**
```sh
python app.py
```

6. **View the application:** Open your web browser and navigate to `http://127.0.0.1:5000/`.

## Usage

- **Adding a New Chore**: Enter the chore in the text box and click "Add Chore". The chore will appear below with a checkbox next to it.
- **Marking a Chore as Completed**: Click the checkbox next to a chore to mark it as completed. The chore will be visually crossed out.
- **Adding a New List**: Click the "+" button to add a new chore list. Each list operates independently, allowing for multiple categories of chores.

## Customization

- **Changing Themes**: Modify `static/styles.css` to alter the application's color scheme and background.
- **Adding More Animal Icons**: To add more animal icons for chores, add image files to `static/images` and update the `animalImages` array in `static/script.js`.

## Contributing

We welcome contributions to make this project even better. Feel free to fork the repository, make your changes, and submit a pull request.

## License

TBD

## Acknowledgments

- Inspired by the rustic beauty of farm life.
- Thanks to Flask for making web development accessible and enjoyable.
