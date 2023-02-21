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



//  Prompt the user for stock records until they type "done"

let StockRecord = [];

while (true) {
  let stockname = prompt("Enter stock name (or type 'done' to exit):");
  if (name === "done") {
    break;
  }
  
  let stockQuantity = parseFloat(prompt("Enter stock quantity for " + name + ":"));
  let stockunitPrice = parseFloat(prompt("Enter stock unit price for " + name + ":"));

  StockRecords.push({
    name: stockname,
    quantity: stockQuantity,
    unitPrice: stockunitPrice,
    totalCost: stocktotalPrice,
    date: date,
    time: time,
  });
}
let stocktotalPrice = stockQuantity * stockunitPrice;
console.log(stocks);


// STOCKRECORDS

// Define an array to store the stock records
let StockRecords = [];

// Define a function to add a new stock record
function addStockRecord(stockName, stockQuantity, stockunitPrice, date, time) {
  // Calculate the total cost of the stock
  let stocktotalPrice = stockQuantity * stockunitPrice;

  // Create a new stock record object
  let StockRecords = {
    name: stockName,
    quantity: stockQuantity,
    unitPrice: stockunitPrice,
    totalCost: stocktotalPrice,
    date: date,
    time: time,
  };

  // Add the new stock record to the array
  StockRecords.push(StockRecords);
}

// Add some sample stock records
addStockRecord("Tomatoes", 100, 10, "2023-02-19", "12:00 PM");
addStockRecord("Meat", 20, 150, "2023-02-18", "10:00 AM");
addStockRecord("Sugar", 30, 50, "2023-02-17", "3:00 PM");
addStockRecord("Chrome SS", 20, 250, "2023-02-18", "10:00 AM");
addStockRecord("Chrome BS", 30, 750, "2023-02-17", "3:00 PM");

// Define a function to print all the stock records
function printStockRecords() {
  // Loop through all the stock records and print them
  for (let i = 0; i < StockRecords.length; i++) {
    let StockRecords = StockRecords[i];
    console.log(
      `Stock Name: ${StockRecords.stockName} | Cost: ${StockRecords.stockQuantity} | Unit Price: ${StockRecords.stockunitPrice} | Total Price: ${StockRecords.stocktotalPrice} | Date: ${StockRecords.date} | Time: ${StockRecords.time}`
    );
  }
}

// Call the printStockRecords function to print all the stock records
printStockRecords();


// DAILY STOCK RECORDS

// Define an object to store the stock records daily
let DailyStockRecords = {};

// Define a function to add a new stock record for a given date
function addStockRecord(stockName, DailystockQuantity, stockunitPrice, date, time) {

  // Calculate the total cost of the stock
  let DailystocktotalPrice = DailystockQuantity * stockunitPrice;

  // Create a new stock record object
  let DailyStockRecord = {
    name: stockName,
    quantity: DailystockQuantity,
    unitPrice: stockunitPrice,
    totalCost: DailystocktotalPrice,
    date: date,
    time: time,
  };

  // Add the new stock record to the array for the given date
  if (DailyStockRecord[date]) {
    DailyStockRecord[date].push(DailyStockRecord);
  } else {
    DailyStockRecord [date] = [DailyStockRecord];
  }
}

// Add some sample stock records
addStockRecord("Tomatoes", 100, 10, "2023-02-19", "12:00 PM");
addStockRecord("Meat", 20, 150, "2023-02-18", "10:00 AM");
addStockRecord("Sugar", 30, 50, "2023-02-17", "3:00 PM");
addStockRecord("Chrome SS", 20, 250, "2023-02-18", "10:00 AM");
addStockRecord("Chrome BS", 30, 750, "2023-02-17", "3:00 PM");

// Define a function to print all the stock records for a given date
function printStockRecords(date) {
  // Get the array of stock records for the given date
  let DailyStockRecord = DailyStockRecord[date];

  // Check if there are any stock records for the given date
  if (!DailyStockRecords) {
    console.log(`No stock records found for date: ${date}`);
    return;
  }

  // Loop through all the stock records for the given date and print them
  for (let i = 0; i < DailyStockRecord.length; i++) {
    console.log(
      `DailyStockRecords: | name: ${stockName} | quantity: ${DailystockQuantity} | Unit Price: ${stockunitPrice} | Total Price: ${DailystocktotalPrice} | Date: ${date} | Time: ${time}`
    );
  }
}

// Call the printStockRecords function to print all the stock records for a given date
printStockRecords("2023-02-19");
printStockRecords("2023-02-20");



// WEEKLY STOCK RECORD

// Define an object to store the stock records by week
let WeeklyStockRecord = {};

// Define a function to add a new stock record for a given date
function addStockRecord(stockName, weeklystockQuantity, stockunitPrice, date, time) {
  // Calculate the total cost of the stock
  let weeklystocktotalPrice = weeklystockQuantity * stockunitPrice;

  // Create a new stock record object
  let WeeklyStockRecords = {
    name: stockName,
    quantity: weeklystockQuantity,
    unitPrice: stockunitPrice,
    totalCost: weeklystocktotalPrice,
    date: date,
    time: time,
  };

  // Add the new stock record to the array for the given date
  if ( WeeklyStockRecord [date]) {
    WeeklyStockRecords[date].push(WeeklyStockRecords);
  } else {
    WeeklyStockRecord [date] = [WeeklyStockRecords];
  }
}

// Add some sample stock records for a week
addStockRecord("Tomatoes", 100, 10, "2023-02-19", "12:00 PM");
addStockRecord("Meat", 20, 150, "2023-02-18", "10:00 AM");
addStockRecord("Sugar", 30, 50, "2023-02-17", "3:00 PM");
addStockRecord("Chrome SS", 20, 250, "2023-02-18", "10:00 AM");
addStockRecord("Chrome BS", 30, 750, "2023-02-17", "3:00 PM");
addStockRecord("Apple", 50, 30, "2023-02-14", "12:00 PM");
addStockRecord("Water", 200, 5.5, "2023-02-14", "10:00 AM");
addStockRecord("RedCakes", 40, 20, "2023-02-14", "3:00 PM");
addStockRecord("CreamCakes", 55, 35, "2023-02-15", "11:00 AM");
addStockRecord("Rice", 50, 140.5, "2023-02-15", "2:00 PM");


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
      );
        

// MONTHLY STOCK RECORD

// Define an object to store the stock records by date
  let MonthlyStockRecord = {};

    // Define a function to add a new stock record for a given date
    function addStockRecord(stockName, monthlystockQuantity, stockunitPrice, date, time) {
       // Calculate the total cost of the stock
       let monthlystocktotalPrice = monthlystockQuantity * stockunitPrice;
        
       // Create a new stock record object
       let MonthlyStockRecords = {
        name: stockName,
        quantity: monthlystockQuantity,
        unitPrice: stockunitPrice,
        totalCost: monthlystocktotalPrice,
        date: date,
        time: time,
        };
        
       // Add the new stock record to the array for the given date
       if (MonthlyStockRecords[date]) {
        MonthlyStockRecords[date].push(MonthlyStockRecords);
           } else {
            MonthlyStockRecords[date] = [MonthlyStockRecords];
          }
        }
        
        // Add some sample stock records for a month
        addStockRecord("Tomatoes", 100, 10, "2023-02-19", "12:00 PM");
        addStockRecord("Meat", 20, 150, "2023-02-18", "10:00 AM");
        addStockRecord("Sugar", 30, 50, "2023-02-17", "3:00 PM");
        addStockRecord("Chrome SS", 20, 250, "2023-02-18", "10:00 AM");
        addStockRecord("Chrome BS", 30, 750, "2023-02-17", "3:00 PM");
        addStockRecord("Apple", 50, 30, "2023-02-14", "12:00 PM");
        addStockRecord("Water", 200, 5.5, "2023-02-14", "10:00 AM");
        addStockRecord("RedCakes", 40, 20, "2023-02-14", "3:00 PM");
        addStockRecord("CreamCakes", 55, 35, "2023-02-15", "11:00 AM");
        addStockRecord("Rice", 50, 140.5, "2023-02-15", "2:00 PM");
        addStock

  Print(MonthlyStockRecord)



        // YEARLY STOCK RECORD

        // Define an object to store the stock records by month
        let YearlyStockRecord = {};
        
        // Define a function to add a new stock record for a given month
        function addStockRecord(stockName, yearlystockQuantity, stockunitPrice, date, time) {

          // Calculate the total cost of the stock
          let yearlystocktotalPrice = yearlystockQuantity * stockunitPrice;
        
          // Extract the month and year from the date
          let [year, month] = date.split("-");
        
          // Create a new stock record object
          let YearlyStockRecords = {
            name: stockName,
            quantity: yearlystockQuantity,
            unitPrice: stockunitPrice,
            totalCost: yearlystocktotalPrice,
            date: date,
            time: time,
          };
        
          // Add the new stock record to the array for the given month
          let monthKey = `${year}-${month}`;
          if (YearlyStockRecords[monthKey]) {
            YearlyStockRecords[monthKey].push(YearlyStockRecords);
          } else {
            YearlyStockRecords[monthKey] = [YearlyStockRecords];
          }
        }
        
        // Add some sample stock records for a year
        addStockRecord("Tomatoes", 100, 10, "2023-02-19", "12:00 PM");
        addStockRecord("Meat", 20, 150, "2023-02-18", "10:00 AM");
        addStockRecord("Sugar", 30, 50, "2023-02-17", "3:00 PM");
        addStockRecord("Chrome SS", 20, 250, "2023-02-18", "10:00 AM");
        addStockRecord("Chrome BS", 30, 750, "2023-02-17", "3:00 PM");
        addStockRecord("Apple", 50, 30, "2023-02-14", "12:00 PM");
        addStockRecord("Water", 200, 5.5, "2023-02-14", "10:00 AM");
        addStockRecord("RedCakes", 40, 20, "2023-02-14", "3:00 PM");
        addStockRecord("CreamCakes", 55, 35, "2023-02-15", "11:00 AM");
        addStockRecord("Rice", 50, 140.5, "2023-02-15", "2:00 PM");

  Print(YearlyStockRecord)      



// SALES RECORD

// Object to store daily sales records
let dailySalesRecord = [];

// Function to add a new sales record
function addSalesRecord(stockName, salesunitPrice, stockunitPrice, dailysalesquantity, dailydebit, date, time) 

while (true) 
  let name = prompt("Enter stock name (or type 'done' to exit):");
  if (name === "done") {
    break;
  }

  let dailysalesquantity = parseFloat(prompt("Enter daily sales quantity for " + name + ":"));
  let salesunitPrice = parseFloat(prompt("Enter sales unit price for " + name + ":"));
  let stockunitPrice = parseFloat(prompt("Enter stock unit price for " + name + ":"));
  let date = prompt("Enter date for " + name + ":");
  let time = prompt("Enter time for " + name + ":");

  while (true) {
    let dailydebit = parseFloat(prompt("Enter daily debit for " + name + ":"));
    if (dailydebit === "done") {
      break;
    }
  
    while (true) {
      let dailycredit = parseFloat(prompt("Enter daily credit for " + name + ":"));
      if (dailycredit === "done") {
        break;
      }

  let dailyrevenue = ((dailysalesquantity * salesunitPrice) - dailydebit) 
  let dailyprofit = ((dailyrevenue - (dailysalesquantity * stockunitPrice)) )
  let dailypercentageprofit = ((dailyrevenue - (dailysalesquantity * stockunitPrice)) / dailyrevenue) * 100; 

  dailySales.push({
    name: stockName,
    quantity: dailysalesquantity,
    unitPrice: salesunitPrice,
    costPrice: stockunitPrice,
    revenue: dailyrevenue,
    date: date,
    time: time,
    profit: dailyprofit,
    percentageProfit : dailypercentageprofit
  });
}

// Add the record to the salesRecords object
if (!dailySalesRecord[date]) {
  dailySalesRecord[date] = [dailySales];
} else {
  dailySalesRecord[date].push(dailySales);
}
}

console.log(dailySales);

// Function to print daily sales records
function printDailySalesRecords(date) {
  const records = dailySales[date];
  if (!records) {
    console.log(`No sales records for ${date}`);
    return;
  }

  console.log(`Daily sales records for ${date}:`);
  console.log("-----------------------------");
  let totalRevenue = 0;
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    console.log(`Stock name: ${record.stockName}`);
    console.log(`Cost: $${record.cost}`);
    console.log(`Unit price: $${record.unitPrice}`);
    console.log(`Quantity: ${record.quantity}`);
    console.log(`Revenue: $${record.revenue}`);
    console.log(`Time: ${record.time}`);
    console.log(`Profit: ${record.profit.toFixed(2)}%`);
    console.log("-----------------------------");
    totalRevenue += record.revenue;
  }
  console.log(`Total revenue: $${totalRevenue}`);
}

// Example usage:
printDailySalesRecords("2023-02-20");

// Function to calculate highest and lowest daily sales
function calculateHighestAndLowestDailySales() 
  let highestSales = 0;
  let lowestSales = Infinity;
  let highestSalesDate = "";
  let lowestSalesDate = "";

  for (const date in addSalesRecord) 
    let totalRevenue = 0;
    const

// Print results to console    
       
console.log(`The highest daily sales was ${highestSales}.`);
console.log(`The lowest daily sales was ${lowestSales}.`);


























