import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/AutomatedSalesRecord.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;



//STOCKRECORDS
const STOCKRECORDS = [];

// Receive and store the stocks data for each day of the year
for (let i = 0; i < 366; i++)
while (true) {
const stockname = parseInt(prompt(`Enter "Enter stock name (or type 'done' to exit) ${i}:`));
if (name === "done") {
  break;
}
  else 
  let stockQuantity = parseFloat(prompt("Enter stock Quantity for " + name + ":"));
  let stockunitPrice = parseFloat(prompt("Enter stock unit price for " + name + ":")); 
  let date = prompt("Enter date for " + name + ":");
  let time = prompt("Enter time for " + name + ":");
  let totalCost = stockQuantity * stockunitPrice;
  STOCKRECORDS.push(StockRecords);
}
console.log(StockRecords);

//DAILY STOCK RECORDS
//Define an object to store the stock records daily
const DailyStockRecords = {};
//Receive and store the sales data for each day of the year
for (let i = 0; i < 366; i++) 
while (true) 
  const stockname = parseInt(prompt(`Enter "Enter stock name (or type 'done' to exit) ${i}:`));
  if (name === "done") {
    break;
  }
  else
//Define a function to add a new stock record for a given date
function addStockRecord(stockName, DailystockQuantity, stockunitPrice, date, time) {
    let dailystockQuantity = parseFloat(prompt("Enter stock Quantity for " + name + ":"));
    let stockunitPrice = parseFloat(prompt("Enter stock unit price for " + name + ":"));
    let date = prompt("Enter date for " + name + ":");
    let time = prompt("Enter time for " + name + ":");
    let dailycost = dailystockQuantity * stockunitPrice;
    STOCKRECORDS.push(DailyStockRecords);
  }
console.log(DailyStockRecords);
  
//Define a function to print all the stock records for a given date
function printDailyStockRecords(date) {
//Get the array of stock records for the given date
let DailyStockRecord = DailyStockRecords[date];
//Check if there are any stock records for the given date
  if (!DailyStockRecords) {
    console.log(`No stock records found for date: ${date}`);
    return;
  }
//Loop through all the stock records for the given date and print them
  for (let i = 0; i < DailyStockRecord.length; i++) {
    console.log(
      `DailyStockRecords: | name: ${stockName} | quantity: ${DailystockQuantity} | Unit Price: ${stockunitPrice} | Total Price: ${dailycost} | Date: ${date} | Time: ${time}`
    );
  }
}
//Call the printStockRecords function to print all the stock records for a given date
PrintStockRecords("2023-02-19");

//WEEKLY STOCK RECORD
// Define an object to store the stock records by week
const WeeklyStockRecord = {};
//Receive and store the sales data for each week of the year
for (let i = 1; i <= 52; i++) {
  const stockname = parseInt(prompt(`Enter the stock name ${i}:`));
  let weeklystockQuantity = parseFloat(prompt("Enter weekly stock quantity for " + name + ":"));
  let stockunitPrice = parseFloat(prompt("Enter stock unit price for " + name + ":"));
  let date = prompt("Enter date for " + name + ":");
  let time = prompt("Enter time for " + name + ":");
  let weeklycost = weeklystockQuantity * stockunitPrice;
  STOCKRECORDS.push(Weeklystockrecords);
}
// Define a function to add a new stock record for a given date
function addStockRecord(stockName, weeklystockQuantity, stockunitPrice, date, time) 

// Define a function to print all the stock records for a given week
function printStockRecordsForWeek(startDate) 
  // Define the number of days in a week
  const daysInWeek = 7;

  // Loop through all the days in the week starting from the given start date
  for (let i = 0; i < daysInWeek; i++) 
    // Get the date for the current day
    date.setDate(date.getDate() + i);
    let dateString = date.toString().substring(0, 10);

    // Get the array of stock records for the current day
    let WeeklyStockRecords = WeeklyStockRecords[dateString];

    // Check if there are any stock records for the current day
    if (! WeeklyStockRecord) {
      console.log(`No stock records found for date: ${dateString}`);
      continue;
    }
    // Loop through all the stock records for the current day and print them
    for (let j = 0; j < WeeklyStockRecord.length; j++) 
      let WeeklyStockRecord = WeeklyStockRecord [j];
      console.log(
        WeeklyStockRecord = {name} | {quantity} | {unitPrice} | {totalCost} |  {dateString} | {time} |
)
Print(WeeklyStockRecord)

// MONTHLY STOCK RECORD
// Define an object to store the stock records by week
const MonthlyStockRecord = {};

//Receive and store the sales data for each month of the year
for (let i = 1; i <= 12; i++) {
  const stockname = parseInt(prompt(`Enter the stock name ${i}:`));
  let monthlystockQuantity = parseFloat(prompt("Enter monthly stock quantity for " + name + ":"));
  let stockunitPrice = parseFloat(prompt("Enter stock unit price for " + name + ":"));
  let date = prompt("Enter date for " + name + ":");
  let time = prompt("Enter time for " + name + ":");
  let monthlycost = monthlystockQuantity * stockunitPrice;
  STOCKRECORDS.push(monthlystockrecords);
}
// Define a function to add a new stock record for a given date
function addStockRecord(stockName, monthlystockQuantity, stockunitPrice, date, time) 
   
// Define a function to print all the stock records for a given month
function printStockRecordsForMonth(startDate) 
// Define the number of days in a month
const daysInMonth = 31;      

// Loop through all the days in the month starting from the given start date
for (let i = 0; i < daysInMonth; i++) 
// Get the date for the current day
date.setDate(date.getDate() + i);
let dateString = date.toString().substring(0, 10);

// Get the array of stock records for the current day
let MonthlyStockRecords = MonthlyStockRecords[dateString];

// Check if there are any stock records for the current day
if (! MonthlyStockRecord) {
  console.log(`No stock records found for date: ${dateString}`);
  continue;
}
// Loop through all the stock records for the current day and print them
for (let j = 0; j < MonthlyStockRecord.length; j++) 
  let MonthlyStockRecord = MonthlyStockRecord [j];
  console.log(
    MonthlyStockRecord = {name} | {quantity} | {unitPrice} | {totalCost} |  {dateString} | {time} |
) 
Print(MonthlyStockRecord)

// YEARLY STOCK RECORD
// Define an object to store the stock records by month
const YearlyStockRecord = {};

//Receive and store the sales data for each month of the year
for (let i = 1; i++;) {
  const stockname = parseInt(prompt(`Enter the stock name ${i}:`));
  let yearlystockQuantity = parseFloat(prompt("Enter yearly stock quantity for " + name + ":"));
  let stockunitPrice = parseFloat(prompt("Enter stock unit price for " + name + ":"));
  let date = prompt("Enter date for " + name + ":");
  let time = prompt("Enter time for " + name + ":");
  let yearlycost = yearlystockQuantity * stockunitPrice;
  STOCKRECORDS.push(yearlystockrecords);
}
// Define a function to add a new stock record for a given month
function addStockRecord(stockName, yearlystockQuantity, stockunitPrice, date, time) {

// Define a function to print all the stock records for a given month
function printStockRecordsForYear(startDate) 
// Define the number of months in a year
const monthsInYear = 12;      

// Loop through all the months in the year starting from the given start date
for (let i = 0; i < monthsInYear; i++) 
// Get the date for the current day
date.setDate(date.getDate() + i);
let dateString = date.toString().substring(0, 10);

// Get the array of stock records for the current day
let YearlyStockRecords = YearlyStockRecords[dateString];

// Check if there are any stock records for the current day
if (! YearlyStockRecord) {
  console.log(`No stock records found for date: ${dateString}`);
  continue;
}
// Loop through all the stock records for the current day and print them
for (let j = 0; j < YearlyStockRecord.length; j++) 
  let YearlyStockRecord = YearlyStockRecord [j];
  console.log( 
    YearlyStockRecord = {name} | {quantity} | {unitPrice} | {totalCost} |  {dateString} | {time} |
)      
Print(YearlyStockRecord)   

// SALES RECORD  
// Object to store daily sales records
const dailySalesRecord = [];

// receive and store the sales data for each day of the year
for (let i = 0; i < 366; i++) {
  const stockname = parseInt(prompt(`Enter the stockname ${i+1}:`));
  let dailysalesquantity = parseFloat(prompt("Enter daily sales quantity for " + name + ":"));
  let salesunitPrice = parseFloat(prompt("Enter sales unit price for " + name + ":"));
  let stockunitPrice = parseFloat(prompt("Enter stock unit price for " + name + ":"));
  let dailydebit = parseFloat(prompt("Enter daily debit for " + name + ":"));
  let dailycredit = parseFloat(prompt("Enter daily credit for " + name + ":"));
  let date = prompt("Enter date for " + name + ":");
  let time = prompt("Enter time for " + name + ":");
  let dailyrevenue = ((dailysalesquantity * salesunitPrice) - dailydebit) 
  let dailyprofit = ((dailyrevenue - (dailysalesquantity * stockunitPrice)) )
  let dailypercentageprofit = ((dailyrevenue - (dailysalesquantity * stockunitPrice)) / dailyrevenue) * 100; 
dailySalesRecord.push(dailysales);
}
console.log(dailySales);

// calculate the total sales for the week
const WeeklySales = dailySales.reduce((acc, cur) => acc + cur, 0);

// find the index of the highest sales day
const highestSalesIndex = dailySales.indexOf(Math.max(...dailySales));

// find the index of the lowest sales day
const lowestSalesIndex = dailySales.indexOf(Math.min(...dailySales));

// print the results
console.log(`The highest sales day is day ${highestSalesIndex+1} with ${dailySales[highestSalesIndex]} sales.`);
console.log(`The lowest sales day is day ${lowestSalesIndex+1} with ${dailySales[lowestSalesIndex]} sales.`);

// print the weekly sales data
console.log(`Weekly sales: ${WeeklySales}`);

// WEEKLY SALES RECORD
// initialize an empty array to store the sales records
const WeeklySalesRecord = [];

// receive and store the weekly sales data for the year
for (let i = 1; i <= 52; i++) {
  const stockname = parseInt(prompt(`Enter the stock name ${i}:`));
  let weeklysalesquantity = parseFloat(prompt("Enter weekly sales quantity for " + name + ":"));
  let salesunitPrice = parseFloat(prompt("Enter sales unit price for " + name + ":"));
  let stockunitPrice = parseFloat(prompt("Enter stock unit price for " + name + ":"));
  let weeklydebit = parseFloat(prompt("Enter weekly debit for " + name + ":"));
  let weeklycredit = parseFloat(prompt("Enter weekly credit for " + name + ":"));
  let date = prompt("Enter date for " + name + ":");
  let time = prompt("Enter time for " + name + ":");
  let weeklyrevenue = ((weeklysalesquantity * salesunitPrice) - weeklydebit) 
  let weeklyprofit = ((weeklyrevenue - (weeklysalesquantity * stockunitPrice)) )
  let weeklypercentageprofit = ((weeklyrevenue - (weeklysalesquantity * stockunitPrice)) / weeklyrevenue) * 100; 
WeeklySalesRecord.push(weeklysales);
}
console.log(weeklySales);

// find the index of the highest sales week
const highestSalesIndex = weeklySales.indexOf(Math.max(...weeklySales));

// find the index of the lowest sales day
const lowestSalesIndex = weeklylySales.indexOf(Math.min(...weeklySales));

// print the results
console.log(`The highest sales week is week ${highestSalesIndex+1} with ${weeklySales[highestSalesIndex]} sales.`);
console.log(`The lowest sales week is week ${lowestSalesIndex+1} with ${weeklySales[lowestSalesIndex]} sales.`);

// calculate the total sales for the month
const monthlySales = weeklySales.reduce((acc, cur) => acc + cur, 0);

// print the monthly sales data
console.log(`Monthly sales: ${monthlySales}`);

// MONTHLY SALES RECORD

// initialize an empty array to store the sales records
const MonthlySalesRecord = [];

// receive and store the monthly sales data for the year
for (let i = 1; i <= 12; i++) {
  const stockname = parseInt(prompt(`Enter the stock name ${i}:`));
  let monthlysalesquantity = parseFloat(prompt("Enter monthly sales quantity for " + name + ":"));
  let salesunitPrice = parseFloat(prompt("Enter sales unit price for " + name + ":"));
  let stockunitPrice = parseFloat(prompt("Enter stock unit price for " + name + ":"));
  let monthlydebit = parseFloat(prompt("Enter monthly debit for " + name + ":"));
  let monthlycredit = parseFloat(prompt("Enter monthly credit for " + name + ":"));
  let date = prompt("Enter date for " + name + ":");
  let time = prompt("Enter time for " + name + ":");
  let monthlyrevenue = ((monthlysalesquantity * salesunitPrice) - monthlydebit) 
  let monthlyprofit = ((monthlyrevenue - (monthlysalesquantity * stockunitPrice)) )
  let monthlypercentageprofit = ((monthlyrevenue - (monthlysalesquantity * stockunitPrice)) / monthlyrevenue) * 100; 
monthlySalesRecord.push(monthlysales);
}
console.log(monthlySales);

// find the index of the highest sales month
const highestSalesIndex = monthlySales.indexOf(Math.max(...monthlySales));

// find the index of the lowest sales month
const lowestSalesIndex = monthlySales.indexOf(Math.min(...monthlySales));

// print the results
console.log(`The highest sales month is month ${highestSalesIndex+1} with ${monthlySales[highestSalesIndex]} sales.`);
console.log(`The lowest sales month is month ${lowestSalesIndex+1} with ${monthlySales[lowestSalesIndex]} sales.`);

// calculate the total sales for the year
const yearlySales = monthlySales.reduce((acc, cur) => acc + cur, 0);

// print the yearly sales data
console.log(`Yearly sales: ${yearlySales}`);

// YEARLY SALES RECORD
// initialize an empty array to store the sales records
const YearlySalesRecord = [];

// receive and store the yearly sales data 
for (let i = 1; i <= 12; i++) {
  const stockname = parseInt(prompt(`Enter the stock name ${i}:`));
  let yearlysalesquantity = parseFloat(prompt("Enter yearly sales quantity for " + name + ":"));
  let salesunitPrice = parseFloat(prompt("Enter sales unit price for " + name + ":"));
  let stockunitPrice = parseFloat(prompt("Enter stock unit price for " + name + ":"));
  let yearlydebit = parseFloat(prompt("Enter yearly debit for " + name + ":"));
  let yearlycredit = parseFloat(prompt("Enter yearly credit for " + name + ":"));
  let date = prompt("Enter date for " + name + ":");
  let time = prompt("Enter time for " + name + ":");
  let yearlyrevenue = ((yearlysalesquantity * salesunitPrice) - yearlydebit) 
  let yearlyprofit = ((yearlyrevenue - (yearlysalesquantity * stockunitPrice)) )
  let yearlypercentageprofit = ((yearlyrevenue - (yearlysalesquantity * stockunitPrice)) / yearlyrevenue) * 100; 
yearlySalesRecord.push(yearlysales);
}
console.log(yearlySales);

// find the index of the highest sales month
const highestSalesIndex = yearlySales.indexOf(Math.max(...yearlySales));

// find the index of the lowest sales month
const lowestSalesIndex = yearlySales.indexOf(Math.min(...yearlySales));

// print the results
console.log(`The highest sales year is year ${highestSalesIndex+1} with ${yearlySales[highestSalesIndex]} sales.`);
console.log(`The lowest sales year is year ${lowestSalesIndex+1} with ${yearlySales[lowestSalesIndex]} sales.`);

// calculate the total sales for the year
const yearlySales = yearlySales.reduce((acc, cur) => acc + cur, 0);

// print the yearly sales data
console.log(`Yearly sales: ${yearlySales}`);


























