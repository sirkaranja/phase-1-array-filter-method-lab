// Code your solution here
function findMatching(drivers,string){

 // Convert the string to lowercase
  const lowercaseString = string.toLowerCase();
  
  // Filter the drivers array to only include names that match the lowercase string
  const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === lowercaseString);
  
  return matchingDrivers;

  //This function takes in an array of drivers and a string.
  // It first converts the string to lowercase using the toLowerCase() method, so that the comparison will be case-insensitive. It then uses the filter() method to create a new array matchingDrivers that 
  //contains only the names from drivers that match the lowercase
  // string. Finally, it returns the matchingDrivers array

}

function fuzzyMatch(drivers, query) {

    // This function takes in two arguments: an array of drivers' names (drivers) and a string to query the array (query). It then uses the filter method on the drivers array to return a new array containing only the drivers whose names begin with the letters in the query string.

//The filter method takes a callback function as an argument. 
//This function is called for each element in the drivers array and returns a boolean value indicating whether or not that element should be included in the filtered array. In this case, the callback function checks if the lowercase version of the current driver's name starts with the lowercase version of the query string.
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);


    //This function uses the filter method of the Array object 
    //to iterate through each driver object in the drivers array and return a new array containing only those objects whose name property matches the name argument provided.
  }