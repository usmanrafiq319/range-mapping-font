const unicodeRanges = {
    
        font1: [0x1D400, 0x1D419],
        font2: [0x1F170, 0x1F189],
        font3: [0x1D5A0, 0x1D5AA],
        font4: [0x1D420, 0x1D439],
        font5: [0x1D4D0, 0x1D4DA],
        font6: [0x1F130, 0x1F139],
        font7: [0x1D5A0, 0x1D5B9],
        font8: [0x1D4D0, 0x1D503],
        font9: [0x1D4E6, 0x1D519],
        font10: [0x1D56C, 0x1D59F],
        font11: [0x1D538, 0x1D56B],
        font12: [0x1D670, 0x1D6A3],
        font13: [0x1D51E, 0x1D551],
        font14: [0x1D4B6, 0x1D4E9],
        font15: [0x1D48A, 0x1D4BD],
        font16: [0x1D6A8, 0x1D6E1],
        font17: [0x1D58A, 0x1D5C3],
        font18: [0x1D484, 0x1D49D],
        font19: [0x1D670, 0x1D689],
        font20: [0x1D7CE, 0x1D7D7],
        font21: [0x1D4A2, 0x1D4BB],
        font22: [0x1D5D8, 0x1D5F1],
        font23: [0x1D70C, 0x1D71F],
        font24: [0x1D520, 0x1D539],
        font25: [0x1D400, 0x1D419]
    
    
    // Add more fonts with their respective Unicode ranges here
  };
  
  // Function to convert text based on selected font
  function convertText() {
    const textInput = document.getElementById('textInput').value;
    const fontSelect = document.getElementById('fontSelect').value;
    const [start, end] = unicodeRanges[fontSelect];
    let convertedText = '';
  
    for (let char of textInput) {
      const charCode = char.charCodeAt(0);
      // Check if the character is an English alphabet letter
      if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        let convertedChar = charCode;
        // Adjust the character code based on the selected font's Unicode range
        if (char >= 'A' && char <= 'Z') {
          // Convert upper case letter
          convertedChar = start + (charCode - 'A'.charCodeAt(0));
        } else if (char >= 'a' && char <= 'z') {
          // Convert lower case letter
          convertedChar = start + 26 + (charCode - 'a'.charCodeAt(0));
        }
        // Convert the character code to its corresponding Unicode character
        convertedText += String.fromCodePoint(convertedChar);
      } else {
        // Keep non-alphabetic characters unchanged
        convertedText += char;
      }
    }
  
    document.getElementById('output').innerText = convertedText;
  }
  