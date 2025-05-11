# Roman Numeral Converter

This is a simple web-based application that converts numbers into Roman numerals. The application supports numbers between 1 and 3999.

## Features

- Converts numbers to Roman numerals.
- Provides user-friendly error messages for invalid inputs.
- Responsive and visually appealing interface.

## Project Structure
RomanNumeral-Converter/ ├── index.html # Main HTML file for the application ├── styles.css # CSS file for styling the application ├── script.js # JavaScript file containing the conversion logic ├── test.js # JavaScript file for testing the conversion logic ├── README.md # Project documentation └── .vscode/ └── settings.json # VS Code settings for the project



## How to Use

1. Open the `index.html` file in your browser.
2. Enter a number between 1 and 3999 in the input field.
3. Click the "Convert to Roman Numeral" button.
4. The Roman numeral equivalent of the number will be displayed below the button.

## Error Handling

- If the input is less than 1, the application will display:  
  `"Please enter a number greater than or equal to 1"`
- If the input is greater than 3999, the application will display:  
  `"Please enter a number less than or equal to 3999"`
- If the input is invalid or empty, the application will display:  
  `"Please enter a valid number"`

## Testing

The conversion logic is tested in the `test.js` file. You can run this file in a Node.js environment to verify the functionality of the converter.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the application.
- **JavaScript**: For implementing the Roman numeral conversion logic.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- Background image sourced from [Dreamstime](https://thumbs.dreamstime.com).
