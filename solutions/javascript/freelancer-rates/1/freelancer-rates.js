export function dayRate(ratePerHour) {
  // The freelancer works 8 hours a day
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  // The total hours the freelancer can work with the budget
  let totalHours = Math.floor(budget / ratePerHour);
  // Convert the total hours to days and round down to the nearest whole number
  return Math.floor(totalHours / 8);
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  // Calculate the number of full months and remaining days
  let fullMonths = Math.floor(numDays / 22);
  let remainingDays = numDays % 22;

  // Calculate the cost for full months with discount
  let fullMonthCost = fullMonths * dayRate(ratePerHour) * 22 * (1 - discount);

  // Calculate the cost for remaining days without discount
  let remainingDaysCost = remainingDays * dayRate(ratePerHour);

  // The total cost is the sum of full month cost and remaining days cost
  // Round up to the nearest whole number
  return Math.ceil(fullMonthCost + remainingDaysCost);
}
