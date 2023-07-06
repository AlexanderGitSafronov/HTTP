// Первая каруселька
// const carousel = document.querySelector('.carousel');
// let isMouseDown = false;
// let startX;
// let scrollLeft;

// carousel.addEventListener('mousedown', (e) => {
//   isMouseDown = true;
//   startX = e.pageX - carousel.offsetLeft;
//   scrollLeft = carousel.scrollLeft;
// });

// carousel.addEventListener('mouseleave', () => {
//   isMouseDown = false;
// });

// carousel.addEventListener('mouseup', () => {
//   isMouseDown = false;
// });

// carousel.addEventListener('mousemove', (e) => {
//   if (!isMouseDown) return;
//   e.preventDefault();
//   const x = e.pageX - carousel.offsetLeft;
//   const walk = (x - startX) * 2; // Множитель для более плавного свайпа

//   carousel.scrollLeft = scrollLeft - walk;
// });




// СТРЕЛОЧКИ НА КНОПКЕ СУЖАЮТСЯ

const blackBtn = document.querySelector(
  ".black__block .black__block_btn button"
);
const blackImg = document.querySelectorAll(".black__block_btn img");

blackBtn.addEventListener("mouseover", () => {
  blackImg.forEach((item, idx) => {
    switch (idx) {
      case 0:
        item.style.left = "10px";
        item.style.top = "10px";
        break;
      case 1:
        item.style.left = "10px";
        item.style.bottom = "10px";
        break;
      case 2:
        item.style.right = "10px";
        item.style.top = "10px";
        break;
      case 3:
        item.style.right = "10px";
        item.style.bottom = "10px";
        break;
      default:
        break;
    }
  });
});
blackBtn.addEventListener("mouseout", () => {
  blackImg.forEach((item, idx) => {
    switch (idx) {
      case 0:
        item.style.left = "0px";
        item.style.top = "0px";
        break;
      case 1:
        item.style.left = "0px";
        item.style.bottom = "0px";
        break;
      case 2:
        item.style.right = "0px";
        item.style.top = "0px";
        break;
      case 3:
        item.style.right = "0px";
        item.style.bottom = "0px";
        break;
      default:
        break;
    }
  });
});

// ПЕРВЫЙ СЛАЙДЕР

const sliderLeftBtn = document.querySelector(".slider__btn .left");
const sliderRightBtn = document.querySelector(".slider__btn .right");
const sliderContainer = document.querySelector(".slider__container");
const slideItem = document.querySelectorAll(".slider__item");

const rightActivImg = document.querySelector(".slider__btn .right img");
const leftActivImg = document.querySelector(".slider__btn .left img");

const progresBar = document.querySelector(".progress .progress_active");

sliderContainer.addEventListener("touchstart", handleTouchStart, false);
sliderContainer.addEventListener("touchmove", handleTouchMove, false);



let x1 = null;
let y1 = null;
let offset = 0;


sliderRightBtn.addEventListener("click", () => {
  rightSwipe();
});
sliderLeftBtn.addEventListener("click", () => {
  leftSwipe();
});

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}
function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }

  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;

  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      console.log("right");
      leftSwipe();
    } else {
      console.log("left");
      rightSwipe();
    }
  } else {
    if (yDiff > 0) {
      console.log("down");
    } else {
      console.log("top");
    }
  }
  x1 = null;
  y1 = null;
}

function firstPCswipe(){
  // Работающий слайдер

let isDragging = false;
let startPos = null;
let sensitivity = 10; // Чувствительность свайпа

sliderContainer.addEventListener("mousedown", (event) => {
  isDragging = true;
  startPos = event.clientX;
});

sliderContainer.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const currentPos = event.clientX;
    const difference = currentPos - startPos;
    
    if (Math.abs(difference) >= sensitivity) {
      if (difference > 0) {
        console.log("right");
        leftSwipe();
      } else {
        console.log("left");
        rightSwipe();
      }
      
      isDragging = false;
      startPos = null;
    }
  }
});

sliderContainer.addEventListener("mouseup", () => {
  isDragging = false;
  startPos = null;
});
}
firstPCswipe()















function rightSwipe() {
  if (window.innerWidth > 1400) {
    if (offset === 0) {
      offset += -664;
    
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 1) {
          item.classList.add("active__slide");
        }
      });
      leftActivImg.src = "./images/arrow_right.svg";
      leftActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "50%";
    } else if (offset === -664) {
      offset += -664;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 2) {
          item.classList.add("active__slide");
        }
      });
      progresBar.style.width = "75%";
      leftActivImg.src = "./images/arrow_right.svg";
      leftActivImg.style.transform = "rotate(" + 180 + "deg)";
    } else if (offset === -1328) {
      offset += -664;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 3) {
          item.classList.add("active__slide");
        }
      });
      rightActivImg.src = "./images/arrow_left.svg";
      rightActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "100%";
    }
  } else if (window.innerWidth <= 1400 && window.innerWidth > 1200) {
    if (offset === 0) {
      offset += -664;
     
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 1) {
          item.classList.add("active__slide");
        }
      });
      leftActivImg.src = "./images/arrow_right.svg";
      leftActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "50%";
    } else if (offset === -664) {
      offset += -664;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 2) {
          item.classList.add("active__slide");
        }
      });
      progresBar.style.width = "75%";
      leftActivImg.src = "./images/arrow_right.svg";
      leftActivImg.style.transform = "rotate(" + 180 + "deg)";
    } else if (offset === -1328) {
      offset += -664;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 3) {
          item.classList.add("active__slide");
        }
      });
      rightActivImg.src = "./images/arrow_left.svg";
      rightActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "100%";
    }
  }else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
    if (offset === 0) {
      offset += -664;

      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 1) {
          item.classList.add("active__slide");
        }
      });
      leftActivImg.src = "./images/arrow_right.svg";
      leftActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "50%";
    } else if (offset === -664) {
      offset += -664;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 2) {
          item.classList.add("active__slide");
        }
      });
      progresBar.style.width = "75%";
      leftActivImg.src = "./images/arrow_right.svg";
      leftActivImg.style.transform = "rotate(" + 180 + "deg)";
    } else if (offset === -1328) {
      offset += -664;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 3) {
          item.classList.add("active__slide");
        }
      });
      rightActivImg.src = "./images/arrow_left.svg";
      rightActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "100%";
    }
  } else if (window.innerWidth <= 992 && window.innerWidth > 576) {
    if (offset === 0) {
      offset += -664;

      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 1) {
          item.classList.add("active__slide");
        }
      });
      leftActivImg.src = "./images/arrow_right.svg";
      leftActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "50%";
    } else if (offset === -664) {
      offset += -664;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 2) {
          item.classList.add("active__slide");
        }
      });
      progresBar.style.width = "75%";
      leftActivImg.src = "./images/arrow_right.svg";
      leftActivImg.style.transform = "rotate(" + 180 + "deg)";
    } else if (offset === -1328) {
      offset += -664;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 3) {
          item.classList.add("active__slide");
        }
      });
      rightActivImg.src = "./images/arrow_left.svg";
      rightActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "100%";
    }
  }else if (window.innerWidth <= 576 && window.innerWidth > 380) {
    if (offset === 0) {
      offset += -335;

      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 1) {
          item.classList.add("active__slide");
        }
      });
      leftActivImg.src = "./images/arrow_right.svg";
      leftActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "50%";
    } else if (offset === -335) {
      offset += -335;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 2) {
          item.classList.add("active__slide");
        }
      });
      progresBar.style.width = "75%";
      leftActivImg.src = "./images/arrow_right.svg";
      leftActivImg.style.transform = "rotate(" + 180 + "deg)";
    } else if (offset === -670) {
      offset += -335;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 3) {
          item.classList.add("active__slide");
        }
      });
      rightActivImg.src = "./images/arrow_left.svg";
      rightActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "100%";
    } else if (offset === -1005) {
      offset += -335;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 3) {
          item.classList.add("active__slide");
        }
      });
      rightActivImg.src = "./images/arrow_left.svg";
      rightActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "100%";
    }
  }else if (window.innerWidth <= 380) {
    if (offset === 0) {
      offset += -300;

      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 1) {
          item.classList.add("active__slide");
        }
      });
      leftActivImg.src = "./images/arrow_right.svg";
      leftActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "50%";
    } else if (offset === -300) {
      offset += -300;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 2) {
          item.classList.add("active__slide");
        }
      });
      progresBar.style.width = "75%";
      leftActivImg.src = "./images/arrow_right.svg";
      leftActivImg.style.transform = "rotate(" + 180 + "deg)";
    } else if (offset === -600) {
      offset += -300;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 3) {
          item.classList.add("active__slide");
        }
      });
      rightActivImg.src = "./images/arrow_left.svg";
      rightActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "100%";
    } else if (offset === -900) {
      offset += -300;
      sliderContainer.style.marginLeft = offset + "px";
      slideItem.forEach((item, idx) => {
        item.classList.remove("active__slide");
        if (idx === 3) {
          item.classList.add("active__slide");
        }
      });
      rightActivImg.src = "./images/arrow_left.svg";
      rightActivImg.style.transform = "rotate(" + 180 + "deg)";
      progresBar.style.width = "100%";
    }
  }
}

function leftSwipe() {
  if (window.innerWidth > 1400) {
    if (offset !== 0) {
      offset += 664;
    
      if (offset === 0) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 0) {
            item.classList.add("active__slide");
          }
        });
        leftActivImg.src = "./images/arrow_left.svg";
        leftActivImg.style.transform = "rotate(" + 360 + "deg)";
        progresBar.style.width = "25%";
      }
      if (offset === -664) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 1) {
            item.classList.add("active__slide");
          }
        });
        progresBar.style.width = "50%";
      }
      if (offset === -1328) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 2) {
            item.classList.add("active__slide");
          }
        });
        rightActivImg.src = "./images/arrow_right.svg";
        rightActivImg.style.transform = "rotate(" + 360 + "deg)";
        progresBar.style.width = "75%";
      }
      if (offset === -1972) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 3) {
            item.classList.add("active__slide");
          }
        });
        progresBar.style.width = "100%";
      }
      sliderContainer.style.marginLeft = offset + "px";
    }
  } else if (window.innerWidth <= 1400 && window.innerWidth > 1200) {
    if (offset !== 0) {
      offset += 664;
   
      if (offset === 0) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 0) {
            item.classList.add("active__slide");
          }
        });
        leftActivImg.src = "./images/arrow_left.svg";
        leftActivImg.style.transform = "rotate(" + 360 + "deg)";
        progresBar.style.width = "25%";
      }
      if (offset === -664) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 1) {
            item.classList.add("active__slide");
          }
        });
        progresBar.style.width = "50%";
      }
      if (offset === -1328) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 2) {
            item.classList.add("active__slide");
          }
        });
        rightActivImg.src = "./images/arrow_right.svg";
        rightActivImg.style.transform = "rotate(" + 360 + "deg)";
        progresBar.style.width = "75%";
      }
      if (offset === -1972) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 3) {
            item.classList.add("active__slide");
          }
        });
        progresBar.style.width = "100%";
      }
      sliderContainer.style.marginLeft = offset + "px";
    }
  }else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
    if (offset !== 0) {
      offset += 664;
    
      if (offset === 0) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 0) {
            item.classList.add("active__slide");
          }
        });
        leftActivImg.src = "./images/arrow_left.svg";
        leftActivImg.style.transform = "rotate(" + 360 + "deg)";
        progresBar.style.width = "25%";
      }
      if (offset === -664) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 1) {
            item.classList.add("active__slide");
          }
        });
        progresBar.style.width = "50%";
      }
      if (offset === -1328) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 2) {
            item.classList.add("active__slide");
          }
        });
        rightActivImg.src = "./images/arrow_right.svg";
        rightActivImg.style.transform = "rotate(" + 360 + "deg)";
        progresBar.style.width = "75%";
      }
      if (offset === -1972) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 3) {
            item.classList.add("active__slide");
          }
        });
        progresBar.style.width = "100%";
      }
      sliderContainer.style.marginLeft = offset + "px";
    }
  }else if (window.innerWidth <= 992 && window.innerWidth > 576) {
    if (offset !== 0) {
      offset += 664;
    
      if (offset === 0) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 0) {
            item.classList.add("active__slide");
          }
        });
        leftActivImg.src = "./images/arrow_left.svg";
        leftActivImg.style.transform = "rotate(" + 360 + "deg)";
        progresBar.style.width = "25%";
      }
      if (offset === -664) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 1) {
            item.classList.add("active__slide");
          }
        });
        progresBar.style.width = "50%";
      }
      if (offset === -1328) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 2) {
            item.classList.add("active__slide");
          }
        });
        rightActivImg.src = "./images/arrow_right.svg";
        rightActivImg.style.transform = "rotate(" + 360 + "deg)";
        progresBar.style.width = "75%";
      }
      if (offset === -1972) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 3) {
            item.classList.add("active__slide");
          }
        });
        progresBar.style.width = "100%";
      }
      sliderContainer.style.marginLeft = offset + "px";
    }
  }else if (window.innerWidth <= 576 && window.innerWidth > 380) {
    if (offset !== 0) {
      offset += 335;
    
      if (offset === 0) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 0) {
            item.classList.add("active__slide");
          }
        });
        leftActivImg.src = "./images/arrow_left.svg";
        leftActivImg.style.transform = "rotate(" + 360 + "deg)";
        progresBar.style.width = "25%";
      }
      if (offset === -335) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 1) {
            item.classList.add("active__slide");
          }
        });
        progresBar.style.width = "50%";
      }
      if (offset === -670) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 2) {
            item.classList.add("active__slide");
          }
        });
        rightActivImg.src = "./images/arrow_right.svg";
        rightActivImg.style.transform = "rotate(" + 360 + "deg)";
        progresBar.style.width = "75%";
      }
      if (offset === -1005) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 3) {
            item.classList.add("active__slide");
          }
        });
        progresBar.style.width = "100%";
      }
      sliderContainer.style.marginLeft = offset + "px";
    }
  }
  else if (window.innerWidth <= 380) {
    if (offset !== 0) {
      offset += 300;
    
      if (offset === 0) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 0) {
            item.classList.add("active__slide");
          }
        });
        leftActivImg.src = "./images/arrow_left.svg";
        leftActivImg.style.transform = "rotate(" + 360 + "deg)";
        progresBar.style.width = "25%";
      }
      if (offset === -300) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 1) {
            item.classList.add("active__slide");
          }
        });
        progresBar.style.width = "50%";
      }
      if (offset === -660) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 2) {
            item.classList.add("active__slide");
          }
        });
        rightActivImg.src = "./images/arrow_right.svg";
        rightActivImg.style.transform = "rotate(" + 360 + "deg)";
        progresBar.style.width = "75%";
      }
      if (offset === -900) {
        slideItem.forEach((item, idx) => {
          item.classList.remove("active__slide");
          if (idx === 3) {
            item.classList.add("active__slide");
          }
        });
        progresBar.style.width = "100%";
      }
      sliderContainer.style.marginLeft = offset + "px";
    }
  }
}



// Team Slider ВТОРОЙ СЛАЙДЕР
const teamLeftBtn = document.querySelector(".team__slider .slider__btn .left");
const teamRightBtn = document.querySelector(
  ".team__slider .slider__btn .right"
);
const teamSliderContainer = document.querySelector(".team__slider_container");
const card = document.querySelectorAll(".card");

const teamRightActivImg = document.querySelector(".team__slider .slider__btn .right img");
const teamLeftActivImg = document.querySelector(".team__slider .slider__btn .left img");

const teamProgresBar = document.querySelector(".team__slider .progress .progress_active");


let teamX1 = null;
let teamY1 = null;
let teamOffset = 0;

teamRightBtn.addEventListener("click", () => {
    teamRightSwipe();
  });
  teamLeftBtn.addEventListener("click", () => {
    teamLeftSwipe();
  });


  teamSliderContainer.addEventListener("touchstart", teamHandleTouchStart, false);
  teamSliderContainer.addEventListener("touchmove", teamHandleTouchMove, false);



  function teamHandleTouchStart(event) {
    const firstTouch = event.touches[0];
    teamX1 = firstTouch.clientX;
    teamY1 = firstTouch.clientY;
  }
  function teamHandleTouchMove(event) {
    if (!teamX1 || !teamY1) {
      return false;
    }
  
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
  
    let xDiff = x2 - teamX1;
    let yDiff = y2 - teamY1;
  
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        console.log("right");
  
        teamLeftSwipe();
      } else {
        console.log("left");
        teamRightSwipe();
      }
    } else {
      if (yDiff > 0) {
        console.log("down");
      } else {
        console.log("top");
      }
    }
    teamX1 = null;
    teamY1 = null;
  }

  function pcSwipe(){
    let isDragging = false;
let startPos = null;
let sensitivity = 10; // Чувствительность свайпа

teamSliderContainer.addEventListener("mousedown", (event) => {
  isDragging = true;
  startPos = event.clientX;
});

teamSliderContainer.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const currentPos = event.clientX;
    const difference = currentPos - startPos;
    
    if (Math.abs(difference) >= sensitivity) {
      if (difference > 0) {
        console.log("right");
        teamLeftSwipe();
      } else {
        console.log("left");
        teamRightSwipe();
      }
      
      isDragging = false;
      startPos = null;
    }
  }
});

teamSliderContainer.addEventListener("mouseup", () => {
  isDragging = false;
  startPos = null;
});
  }

  pcSwipe()



  function teamRightSwipe() {
    teamProgresBar.style.width = "33%";
    if (window.innerWidth > 1400) {
      if (teamOffset === 0) {
        teamOffset += -664;
      
        teamSliderContainer.style.marginLeft = teamOffset + "px";
        
        teamLeftActivImg.src = "./images/arrow_right.svg";
        teamLeftActivImg.style.transform = "rotate(" + 180 + "deg)";
        teamProgresBar.style.width = "66%";
      } else if (teamOffset === -664) {
        teamOffset += -664;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "100%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } 
    } else if (window.innerWidth <= 1400 && window.innerWidth > 1200) {
      if (teamOffset === 0) {
        teamOffset += -664;
      
        teamSliderContainer.style.marginLeft = teamOffset + "px";
        
        teamLeftActivImg.src = "./images/arrow_right.svg";
        teamLeftActivImg.style.transform = "rotate(" + 180 + "deg)";
        teamProgresBar.style.width = "66%";
      } else if (teamOffset === -664) {
        teamOffset += -664;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "100%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } 
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      if (teamOffset === 0) {
        teamOffset += -664;
       
        teamSliderContainer.style.marginLeft = teamOffset + "px";
        
        teamLeftActivImg.src = "./images/arrow_right.svg";
        teamLeftActivImg.style.transform = "rotate(" + 180 + "deg)";
        teamProgresBar.style.width = "66%";
      } else if (teamOffset === -664) {
        teamOffset += -664;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "100%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } 
    } else if (window.innerWidth <= 992 && window.innerWidth > 576) {
      if (teamOffset === 0) {
        teamProgresBar.style.width = "25%";
        teamOffset += -664;
       
        teamSliderContainer.style.marginLeft = teamOffset + "px";
        
        teamLeftActivImg.src = "./images/arrow_right.svg";
        teamLeftActivImg.style.transform = "rotate(" + 180 + "deg)";
        teamProgresBar.style.width = "50%";
      } else if (teamOffset === -664) {
        teamOffset += -664;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "75%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } else if (teamOffset === -1328) {
        teamOffset += -664;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "100%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } 
    }else if (window.innerWidth <= 576) {
      teamProgresBar.style.width = "10%";
      if (teamOffset === 0) {
       
        teamOffset += -215;
       
        teamSliderContainer.style.marginLeft = teamOffset + "px";
        
        teamLeftActivImg.src = "./images/arrow_right.svg";
        teamLeftActivImg.style.transform = "rotate(" + 180 + "deg)";
        teamProgresBar.style.width = "20%";
      } else if (teamOffset === -215) {
        teamOffset += -215;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "30%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } else if (teamOffset === -430) {
        teamOffset += -215;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "40%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } else if (teamOffset === -645) {
        teamOffset += -215;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "50%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } else if (teamOffset === -860) {
        teamOffset += -215;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "60%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } else if (teamOffset === -1075) {
        teamOffset += -215;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "70%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } else if (teamOffset === -1290) {
        teamOffset += -215;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "80%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } else if (teamOffset === -1505) {
        teamOffset += -215;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "90%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } else if (teamOffset === -1720) {
        teamOffset += -215;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "100%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } else if (teamOffset === -1935) {
        teamOffset += -215;
        teamSliderContainer.style.marginLeft = teamOffset + "px";
       
        teamProgresBar.style.width = "100%";
        teamRightActivImg.src = "./images/arrow_left.svg";
        teamRightActivImg.style.transform = "rotate(" + 180 + "deg)";
      } 
    }
    
    
  }












  function teamLeftSwipe() {
    teamProgresBar.style.width = "33%";
    if (window.innerWidth > 1400) {
      if (teamOffset !== 0) {
        teamOffset += 664;
        console.log(teamOffset);
        if (teamOffset === 0) {
         
            teamLeftActivImg.src = "./images/arrow_left.svg";
            teamLeftActivImg.style.transform = "rotate(" + 360 + "deg)";
          teamProgresBar.style.width = "33%";
        }
        if (teamOffset === -664) {
         
            teamProgresBar.style.width = "66%";
        }
        if (teamOffset === -1328) {
         
            teamRightActivImg.src = "./images/arrow_left.svg";
            teamRightActivImg.style.transform = "rotate(" + 360 + "deg)";
          teamProgresBar.style.width = "100%";
        }
       
        teamSliderContainer.style.marginLeft = teamOffset + "px";
      }
    }else if (window.innerWidth <= 1400 && window.innerWidth > 1200) {
      if (teamOffset !== 0) {
        teamOffset += 664;
        console.log(teamOffset);
        if (teamOffset === 0) {
         
            teamLeftActivImg.src = "./images/arrow_left.svg";
            teamLeftActivImg.style.transform = "rotate(" + 360 + "deg)";
          teamProgresBar.style.width = "33%";
        }
        if (teamOffset === -664) {
         
            teamProgresBar.style.width = "66%";
        }
        if (teamOffset === -1328) {
         
            teamRightActivImg.src = "./images/arrow_left.svg";
            teamRightActivImg.style.transform = "rotate(" + 360 + "deg)";
          teamProgresBar.style.width = "100%";
        }
       
        teamSliderContainer.style.marginLeft = teamOffset + "px";
      }
    } else if (window.innerWidth <= 1200 && window.innerWidth > 576) {
      if (teamOffset !== 0) {
        teamOffset += 664;
        console.log(teamOffset);
        if (teamOffset === 0) {
         
            teamLeftActivImg.src = "./images/arrow_left.svg";
            teamLeftActivImg.style.transform = "rotate(" + 360 + "deg)";
          teamProgresBar.style.width = "33%";
        }
        if (teamOffset === -664) {
         
            teamProgresBar.style.width = "66%";
        }
        if (teamOffset === -1328) {
         
            teamRightActivImg.src = "./images/arrow_left.svg";
            teamRightActivImg.style.transform = "rotate(" + 360 + "deg)";
          teamProgresBar.style.width = "100%";
        }
       
        teamSliderContainer.style.marginLeft = teamOffset + "px";
      }
    }else if (window.innerWidth <= 992 && window.innerWidth >= 768) {
      if (teamOffset !== 0) {
        teamOffset += 664;
      
        if (teamOffset === 0) {
         
            teamLeftActivImg.src = "./images/arrow_left.svg";
            teamLeftActivImg.style.transform = "rotate(" + 360 + "deg)";
          teamProgresBar.style.width = "25%";
        }
        if (teamOffset === -664) {
         
            teamProgresBar.style.width = "50%";
        }
        if (teamOffset === -1328) {
         
            teamRightActivImg.src = "./images/arrow_left.svg";
            teamRightActivImg.style.transform = "rotate(" + 360 + "deg)";
          teamProgresBar.style.width = "75%";
        }
        if (teamOffset === -1992) {
         
          teamRightActivImg.src = "./images/arrow_left.svg";
          teamRightActivImg.style.transform = "rotate(" + 360 + "deg)";
        teamProgresBar.style.width = "100%";
      }
       
        teamSliderContainer.style.marginLeft = teamOffset + "px";
      }
    }else if (window.innerWidth <= 576) {
      teamProgresBar.style.width = "10%";
      if (teamOffset !== 0) {
        teamOffset += 215;
      
        if (teamOffset === 0) {
         
            teamLeftActivImg.src = "./images/arrow_left.svg";
            teamLeftActivImg.style.transform = "rotate(" + 360 + "deg)";
          teamProgresBar.style.width = "10%";
        }
        if (teamOffset === -215) {
            teamProgresBar.style.width = "20%";
        }
        if (teamOffset === -430) {
          teamProgresBar.style.width = "30%";
        }
        if (teamOffset === -645) {
        teamProgresBar.style.width = "40%";
      }
        if (teamOffset === -860) {
        teamProgresBar.style.width = "50%";
      }
        if (teamOffset === -1075) {
        teamProgresBar.style.width = "60%";
      }
        if (teamOffset === -1290) {
        teamProgresBar.style.width = "70%";
      }
        if (teamOffset === -1505) {
        teamProgresBar.style.width = "80%";
      }
        if (teamOffset === -1720) {
        teamProgresBar.style.width = "90%";
      }
        if (teamOffset === -1935) {
        teamProgresBar.style.width = "100%";
      }
       
        teamSliderContainer.style.marginLeft = teamOffset + "px";
      }
    }
  }





// ПАРАЛАКС ЭФЕКТ
  
const stars = document.querySelectorAll('.work__principles_img')
const credoText = document.querySelector('.big__text')
const microphoneImg = document.querySelector('.marketing__mikrophone')

window.addEventListener('scroll', function(){
  

  var scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

stars.forEach((item,idx)=>{
  item.style.transform = 'translateY(' + ((scrollOffset - 3000) / -3) + 'px)'
  credoText.style.transform = 'translateY(' + ((scrollOffset - 1000) / -8) + 'px)'
  microphoneImg.style.transform = 'translateY(' + ((scrollOffset - 6500) / -12) + 'px)'
})

 
})

//ЭФЕКТ ПЕЧАТНОЙ МАШИНКИ
let spanElement = document.createElement('span');
spanElement.textContent = ' |';
spanElement.classList.add('my-class');

const textsPrint = document.querySelector('.text__right_first');
const textsPrintSecond = document.querySelector('.text__right_second');

print(textsPrint, textsPrintSecond);

function print(textPrint, textPrintSecond) {
  const text = textPrint.textContent.replace(/\s+/g, ' ').trim();
  const textSecond = textPrintSecond.textContent.replace(/\s+/g, ' ').trim();
  textPrint.textContent = '';
  textPrintSecond.textContent = '';
  let count = 0;
  let newText = '';

  const addPrint = () => {
    let interval = setInterval(() => {
      newText += text[count];
      textPrint.innerHTML = newText;
      textPrint.appendChild(spanElement);
      count++;

      if (count === text.length) {
        clearInterval(interval);
       
        setTimeout(() => {
          removePrint();
        }, 1500);
      }
    }, 120);
  }

  const addPrintSecond = () => {
    let interval = setInterval(() => {
      newText += textSecond[count];
      textPrint.innerHTML = newText;
      textPrint.appendChild(spanElement);
      count++;

      if (count === textSecond.length) {
        clearInterval(interval);
     
        setTimeout(() => {
          removePrintSecond();
        }, 1500);
      }
    }, 120);
  }

  const removePrint = () => {
    let interval = setInterval(() => {
      if (newText.length) {
        newText = newText.slice(0, -1);
        textPrint.innerHTML = newText;
      textPrint.appendChild(spanElement);
        count--;
      } else {
        clearInterval(interval);
        
        setTimeout(() => {
          addPrintSecond();
        }, 1500);
      }
    }, 120);
  }

  const removePrintSecond = () => {
    let interval = setInterval(() => {
      if (newText.length) {
        newText = newText.slice(0, -1);
        textPrint.innerHTML = newText;
      textPrint.appendChild(spanElement);
        count--;
      } else {
        clearInterval(interval);
       
        setTimeout(() => {
          addPrint();
        }, 1500);
      }
    }, 120);
  }

  addPrint();
}

// Появление меню
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.header__right_mobil_close');
  const menuActive = document.querySelector('.menu_mobil');
  const munuClose = document.querySelector('.header__right_mobil_open')
  const wrapper = document.querySelector('.wrapper')

  menuBtn.addEventListener('click', () => {
    menuActive.classList.add('active');
    wrapper.classList.add('active');

  });
  munuClose.addEventListener('click', ()=>{
    menuActive.classList.remove('active');
    wrapper.classList.remove('active');
  })

  console.log(menuBtn)
  console.log(menuActive)
});












