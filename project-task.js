/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?

  SEE BOTTOM FOR ERRORS CAUGHT
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
  I read through the code line by line and marked where things looked off and where I'd need to make fixes. It took 2 read throughs to catch every error.
2️⃣ How did you confirm that your corrected JSON file was valid?
  I copied and pasted the code into json linter and it validated it green!
3️⃣ Which errors were the most difficult to spot? Why?
  Most difficult errors to spot were probably the trailing commas at the end, because I was looking more for missing commas intentionally. 
4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
  I think with practice I will get better at writing error free code, but it will be easier to write faster and make mistakes too, so I will always read through my code and run it through error catchers as needed. 
*/

//------Comments from edits made, won't let me add them inline JSON//
/*
Line 50: missing end comma, JSON files require commas between items, I added a comma
Line 54: name not in quotes, all keys much be surrounded by double quotes, I added quotes
Line 60: cannot used undefined in JSON, I changed to null
Line 61: not a syntax error, but email was missing .com at the end so I added it
Line 67: extra trailing comma at end, I removed comma
*/