const countAction = () => {
  const counters = document.querySelectorAll("p.counter");
  
  for (const counter of counters) {
    let count = 0;
      const number = counter.dataset.count;
      const countingInterval = setInterval(() => {
        
        if (count == number) {
          stopCounting(countingInterval);
        } else {
            count++;
            counter.textContent = count
        }
      }, timeInterval(number));
  }
};

const stopCounting = (countingInterval) => {
  clearInterval(countingInterval);
};

const timeInterval = (number) => {
    if (number >= 500) {
        return 1
    } else {
        return 15
    }
}

const initApp = () => {
  console.log("started");
  countAction();
};

window.addEventListener("load", initApp);
