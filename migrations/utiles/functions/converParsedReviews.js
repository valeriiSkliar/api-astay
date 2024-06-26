const { parsedReviewsArray } = require('../../mock/mockReviews');

function convertToReview(selectedObject) {
  // console.log(selectedObject);
  const convertedReview = selectedObject.map(review => {

    return {
      apartment_id: null,
      complex_id: null,
      avatar: review.avatar ?? null,
      reviewDate:
        // getDate(new Date(review.reviewDate).toISOString().split('T')[0]),
        new Date(review.reviewDate).toISOString().split('.')[0],
      review: `${review.positiveText ? `${review.positiveText.replace(/\n/g, '')}` : ''}${review.negativeText ? `${review.negativeText.replace(/\n/g, '')}` : ''}`,
      positive_review: review.positiveText ?? null,
      negative_review: review.negativeText ?? null,
      name: review.clientInfo.clintName || '',
      reiting_score: review.reviewScore || 0,
      createdAt: new Date(Date.now()).toISOString().split('.')[0],
      isArchived: false,
      status: false,
    };
  });

  console.log(convertedReview[0]);
  return convertedReview;
}
function getDate(dateString) {
  // console.log(dateString);
  const parts = dateString.trim();

  // Check if the string has the expected format (4 parts)
  // if (parts.length !== 4 || parts[0] !== "Дата" || parts[2] !== "отзыва:") {
  //   return null;
  // }
  // console.log(parts[2], parts[3], parts[4]);
  // Extract month and year as integers
  let month;
  try {
    month = getMonthNumber(parts[3]);
    if (month === null) {
      return null;
    }
  } catch (error) {
    return null;
  }
  const year = parseInt(parts[4]);
  const day = parseInt(parts[2]);

  // Try creating a date object. If the day is invalid (e.g., 31st of February), a RangeError will be thrown.
  try {
    return new Date(year, month - 1, day).toISOString().split('T')[0]; // Create date object with day set to 1
  } catch (error) {
    return null;
  }
}

function getMonthNumber(monthName) {
  const months = {
    января: 0,
    февраля: 1,
    марта: 2,
    апреля: 3,
    мая: 4,
    июня: 5,
    июля: 6,
    августа: 7,
    сентября: 8,
    октября: 9,
    ноября: 10,
    декабря: 11,
  };
  return months[monthName.toLowerCase()] || null;
}

// Example usage
const dateString = 'Дата отзыва: 7 марта 2024';
const dateObj = getDate(dateString);

if (dateObj) {
  // console.log(dateObj);  // Output: 2024-03-01 (assuming March 7th is a valid date)
} else {
  // console.log("Invalid date format");
}

function parseIntFromString(string) {
  const parsedInt = parseInt(string, 10);
  if (Number.isNaN(parsedInt)) {
    return null;
  }
  return Math.round(parsedInt / 2);
}

// // Example usage
// const stringValue = "8.0";
// const intValue = parseIntFromString(stringValue);

// if (intValue !== null) {
//   // console.log("Parsed integer:", intValue);
// } else {
//   // console.log("Could not parse integer from:", stringValue);
// }

exports.convertToReview = convertToReview;
