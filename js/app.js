const countAction = (impactSection) => {
  const counters = document.querySelectorAll("p.counter");
  for (const counter of counters) {
    let count = 0;
    const number = counter.dataset.count;
    const countingInterval = setInterval(() => {
      if (count == number) {
        stopCounting(countingInterval);
      } else {
        count++;
        counter.textContent = count;
      }
    }, timeInterval(number));
  }
  
};

const stopCounting = (countingInterval) => {
  clearInterval(countingInterval);
  
};

const timeInterval = (number) => {
  if (number >= 5000) {
    return 0;
  } else if (number >= 500 && number < 5000) {
    return 1.5;
  } else {
    return 15;
  }
};

detectIntersection = () => {
  const impactSection = document.querySelector(".impact-section");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countAction(impactSection);
            entry.target.classList.add("done-counting");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -300px 0px" }
    );

    observer.observe(impactSection);
  }
};

const initApp = () => {
  detectIntersection();
};

window.addEventListener("load", initApp);
