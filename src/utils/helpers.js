export const extendArrayToTwenty = (arr) => {
    // Copy the original array to avoid modifying it
    const originalArr = [...arr];
    const resultArr = [];
    const minLength = 20;
  
    // Ensure the original array has at least one item
    if (originalArr.length === 0) {
      throw new Error("Input array must have at least one item.");
    }
  
    // Add each object from the original array to the result array at least once
    while (resultArr.length < minLength && originalArr.length > 0) {
      resultArr.push(originalArr.shift());
    }
  
    // Randomly copy objects from the original array to the result array
    // until the result array has 20 items
    while (resultArr.length < minLength) {
      // Get a random index within the bounds of the original array
      const randomIndex = Math.floor(Math.random() * arr.length);
      // Copy the object at the random index and add it to the result array
      resultArr.push(arr[randomIndex]);
    }
  
    return resultArr;
  }

  export const removeUnavailableItems = (arr) => {
    // let filteredArr = arr.filter((item) => item.probability.value > 0)
    let output = arr.map((item) => {
      if ((item.type == "NFT") && (item.balance <=0)){
        let missIndex = arr.findIndex((x) => x.name == "MISS")
        let missItem = arr[missIndex]
        missItem.image = "/MISS.png"
        return missItem
      } else {
        return item
      }
    })
    return output;
  }