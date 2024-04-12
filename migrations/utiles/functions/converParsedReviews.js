const { parsedReviewsArray } = require("../../mock/mockReviews");

function convertToReview(selectedObject) {
  // console.log(selectedObject);
  const convertedReview = selectedObject.map((review) => {
    return {
      apartment_id: null,
      complex_id: null,
      avatar: review.avatar,
      roomType: review.roomName,
      reviewDate: getDate(review.reviewDate),
      review: `<p>Positive: ${review.positiveText}</p><p>Negative: ${review.negativeText}</p>`,
      name: review.clientInfo.clintName,
      reiting_score: Math.ceil((parseIntFromString(review.reviewScore)/ 10) * 5), // converting rating from 10 to 5
      createdAt: new Date().toISOString().split('T')[0],
    }
  });

  return convertedReview;
}
function getDate(dateString) {
  // console.log(dateString);
  const parts = dateString.trim().split(' ');

  // Check if the string has the expected format (4 parts)
  if (parts.length !== 4 || parts[0] !== "Дата" || parts[2] !== "отзыва:") {
    return null;
  }

  // Extract month and year as integers
  let month;
  try {
    month = getMonthNumber(parts[1]);
    if (month === null) {
      return null;
    }
  } catch (error) {
    return null;
  }
  const year = parseInt(parts[3]);

  // Try creating a date object. If the day is invalid (e.g., 31st of February), a RangeError will be thrown.
  try {
    return new Date(year, month - 1, 1);  // Create date object with day set to 1
  } catch (error) {
    return null;
  }
}

function getMonthNumber(monthName) {

  const months = {
    "января": 1,
    "февраля": 2,
    "марта": 3,
    "апреля": 4,
    "мая": 5,
    "июня": 6,
    "июля": 7,
    "августа": 8,
    "сентября": 9,
    "октября": 10,
    "ноября": 11,
    "декабря": 12
  };
  return months[monthName.toLowerCase()] || null;
}

// Example usage
const dateString = "Дата отзыва: 7 марта 2024";
const dateObj = getDate(dateString);

if (dateObj) {
  console.log(dateObj);  // Output: 2024-03-01 (assuming March 7th is a valid date)
} else {
  console.log("Invalid date format");
}




function parseIntFromString(string) {

  const parsedFloat = parseFloat(string);
  return parsedFloat % 1 === 0 ? parseInt(string) : null;
}

// Example usage
const stringValue = "8.0";
const intValue = parseIntFromString(stringValue);

if (intValue !== null) {
  console.log("Parsed integer:", intValue);
} else {
  console.log("Could not parse integer from:", stringValue);
}

exports.convertToReview = convertToReview;
