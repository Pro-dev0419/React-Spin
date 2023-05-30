import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { useSelector } from "react-redux";
import "./Wheel.scss";
import { random } from "underscore";
import { useLocation } from "react-router-dom";
import { getSelectedItemImage } from "./utils";
import { RARITY_COLORS } from "../../utils/constants";
import { getColoredIcon } from "../BoxCardItem/BoxCardItem";

const defaultTransform = "translateX(-50%)";

const Wheel = forwardRef(({ onFinish }, ref) => {
  const itemData = useSelector((state) => state.wheel.rewards || []);
  const boxData = useSelector((state) => state.box.currentBox);
  const { selectedItem } = useSelector((state) => state.wheel);
  const spinning = useSelector((state) => state.wheel.spinning);
  const rotationDiff = useRef(0);
  // const [selectedItem, setSelectedItem] = React.useState(null);
  // const [spinning, setSpinning] = React.useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSpinning(true);
  //   }, 1000);
  //   setTimeout(() => {
  //     setSelectedItem(10);
  //   }, 3000);
  // }, []);
  const randomPosition = useSelector((state) => state.wheel.randomPosition);
  const isFirstLap = useRef(true);
  const wheelContainerRef = useRef(); // Ref for the wheel container
  const spinningInProcess = useRef(false);
  const rotationDegree = useRef(0);
  const hasStopped = useRef(false);
  const location = useLocation();

  function finish() {
    if (!spinningInProcess.current) {
      hasStopped.current = true;
      onFinish();
      wheelContainerRef.current.removeEventListener("transitionend", finish);
      wheelContainerRef.current.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    } else {
      spinningInProcess.current = false;
    }
  }

  const resetWheel = () => {
    const wheelContainer = wheelContainerRef.current;
    // wheelContainer.style.transitionDuration = "0ms";
    // wheelContainer.style.transitionTimingFunction = "linear";
    // wheelContainer.style.transitionProperty = "none";
    // wheelContainer.style.transformOrigin = "50% 50%"; // Set transform-origin to center
    //  set rotationDegree.current to wheelContainer's transform rotation
    wheelContainer.removeEventListener("transitionend", handleTransitionEnd);
    wheelContainer.removeEventListener("transitionend", finish);
  };

  useImperativeHandle(ref, () => ({
    resetWheel,
  }));

  const checkBottomHalfItems = useCallback(() => {
    if (
      !(
        boxData &&
        location.pathname.includes(`/unboxing/boxes/${boxData._id}`) &&
        spinningInProcess.current
      )
    ) {
      return;
    }
    const { rewards } = boxData;
    const wheelContainerHeight = wheelContainerRef.current.offsetHeight;
    const wheelContainerTop = wheelContainerRef.current.offsetTop;
    const elemsToChange = [];
    itemData.forEach((item, index) => {
      if (index === selectedItem) {
        return;
      }
      const itemElement = document.getElementById(`item-${index}`);
      if (itemElement) {
        const itemTop = itemElement.getBoundingClientRect().top;
        if (itemTop >= wheelContainerTop + wheelContainerHeight / 2) {
          elemsToChange.push(itemElement);
        }
      }
    });
    setTimeout(() => {
      elemsToChange.splice(elemsToChange.length / 2).forEach((item) => {
        const randomReward = rewards[random(0, rewards.length - 1)];
        let rewardToChangeTo = randomReward;
        if (randomReward.type == "NFT" && randomReward.balance <= 0) {
          let missIndex = rewards.findIndex((x) => x.name == "MISS");
          let missItem = { ...rewards[missIndex] };
          missItem.image = "/MISS.png";
          rewardToChangeTo = missItem;
        }
        item.children[0].children[2].setAttribute(
          "src",
          rewardToChangeTo.image
        );
        item.children[0].children[0].setAttribute(
          "src",
          getColoredIcon(rewardToChangeTo.rarity)
        );
        item.style.setProperty(
          "--item-nb-color",
          RARITY_COLORS[rewardToChangeTo.rarity]
        );
        item.children[0].children[1].innerText = `${
          rewardToChangeTo.amount == 0 || rewardToChangeTo.type == "NO_REWARD"
            ? ""
            : rewardToChangeTo.amount
        }`;
      });
    }, 1);
  }, [itemData, selectedItem, boxData, location]);

  const updateSections = useCallback(() => {
    const wheelContainer = wheelContainerRef.current;
    const els = wheelContainer.children[0].children;
    Array.from(els).forEach((el, i) => {
      const id = el.id.split("-")[1];
      if (selectedItem === null || selectedItem !== parseInt(id)) {
        const chance = itemData[id].amount;
        el.style.setProperty("--item-nb", i);
        el.style.setProperty(
          "--item-nb-color",
          RARITY_COLORS[itemData[id].rarity]
        );
        el.children[0].children[1].innerText = `${
          chance == 0 || itemData[id].type == "NO_REWARD" ? "" : chance
        }`;
        el.children[0].children[2].setAttribute("src", itemData[id].image);
        el.children[0].children[0].setAttribute(
          "src",
          getColoredIcon(itemData[id].rarity)
        );
      }
    });
  }, [itemData, selectedItem]);

  const getClosestEdges = (degree) => {
    let i = 1;
    while (true) {
      if (degree < i * 18 + 9 && degree > (i - 1) * 18 + 9) {
        return [(i - 1) * 18 + 9, i * 18 + 9];
      }
      i++;
    }
  };

  const findClosestSelectedItemDegree = (rotation, selectedItemDegree) => {
    let i = 0;
    while (true) {
      if (selectedItemDegree + i * 360 > rotation) {
        return i * 360 - (selectedItemDegree === 360 ? 0 : selectedItemDegree);
      }
      i++;
    }
  };

  const stopWheel = () => {
    if (!spinningInProcess.current || hasStopped.current) {
      return;
    }
    updateFinalSection();
    const wheelContainer = wheelContainerRef.current;
    const sectionDegree = 360 / itemData.length;
    const selectedItemDegree = sectionDegree * selectedItem; // Calculate the degree at which the selectedItem is located
    rotationDegree.current += 720;
    const resultDegree =
      findClosestSelectedItemDegree(
        rotationDegree.current,
        selectedItemDegree || 360
      ) + randomPosition;
    const [start, end] = getClosestEdges(resultDegree);
    const resultWithOffset = random(start + 2, end - 2);
    wheelContainer.style.transitionDuration = `8000ms`;
    wheelContainer.style.transitionTimingFunction =
      "cubic-bezier(.29,.69,.47,.99)";
    wheelContainer.style.transitionProperty = "transform";
    // wheelContainer.style.transformOrigin = '50% 50%'; // Set transform-origin to center
    wheelContainer.style.transform =
      defaultTransform + ` rotate(${resultWithOffset}deg)`; // Stop the wheel at the selectedItem degree
    wheelContainer.addEventListener("transitionend", finish);
    wheelContainer.removeEventListener("transitionend", handleTransitionEnd);
    rotationDegree.current = resultWithOffset;
    rotateWheelCenter(
      -getRotationDegrees(wheelContainer),
      wheelContainer.style
    );
    isFirstLap.current = true;
  };

  const getRotationDegrees = (el) => {
    return +el.style.transform.match(/-?[\d\.]+/g)?.[1] || 0;
  };

  const spinWheel = () => {
    if (spinningInProcess.current) {
      return;
    }
    const wheelContainer = wheelContainerRef.current;
    if (isFirstLap.current) {
      hasStopped.current = false;
    }
    spinningInProcess.current = true;
    if (selectedItem !== null) {
      stopWheel();
      return;
    }
    wheelContainer.style.transitionDuration = isFirstLap.current
      ? "3000ms"
      : "3500ms";
    wheelContainer.style.transitionTimingFunction = isFirstLap.current
      ? "cubic-bezier(.19,-0.59,.54,.17)"
      : "linear";
    wheelContainer.style.transitionProperty = "transform";
    wheelContainer.style.transformOrigin = "50% 50%"; // Set transform-origin to center
    rotationDegree.current = isFirstLap.current
      ? rotationDegree.current + 360
      : rotationDegree.current + 360;
    wheelContainer.style.transform =
      defaultTransform + ` rotate(${rotationDegree.current}deg)`;
    rotateWheelCenter(-rotationDegree.current, wheelContainer.style);
    isFirstLap.current = false;
  };

  useEffect(() => {
    // Call the spinWheel function when spinning prop changes
    let intervalId = null;
    if (spinning && selectedItem === null) {
      if (isFirstLap.current) {
        intervalId = setInterval(checkBottomHalfItems, 100);
      }
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [spinning, selectedItem]);

  useEffect(() => {
    if (spinning && selectedItem === null) {
      hasStopped.current = false;
      spinWheel();
    }
  }, [spinning]);

  const handleTransitionEnd = () => {
    spinningInProcess.current = false; // Set spinningInProgress flag to false to indicate spinning is not in
    // progress
    // Call spinWheel recursively after transition is finished
    if (!hasStopped.current) {
      spinWheel();
    }
  };

  useEffect(() => {
    if (spinning) {
      wheelContainerRef.current.addEventListener(
        "transitionend",
        handleTransitionEnd
      );
    }
    return () => {
      if (wheelContainerRef.current) {
        wheelContainerRef.current.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
      }
    };
  }, [spinning, handleTransitionEnd]);

  const getRewardItem = useCallback(
    (item) => {
      return boxData.rewards.find((r) => r.name === item.name);
    },
    [boxData]
  );

  const rotateWheelCenter = useCallback(
    (
      degree,
      { transitionDuration, transitionTimingFunction, transitionProperty }
    ) => {
      const styleElement = document.createElement("style");
      styleElement.innerHTML = `
  .wheel::after {
    transform: translate(-50%, -50%) rotate(${degree}deg);
    transition-duration: ${transitionDuration};
    transition-timing-function: ${transitionTimingFunction};
    transition-property: ${transitionProperty};
  }
`;
      document.head.appendChild(styleElement);
    },
    []
  );

  const updateFinalSection = useCallback(() => {
    const itemElement = document.getElementById(`item-${selectedItem}`);
    if (selectedItem !== null) {
      const rewardItem = getRewardItem(itemData[selectedItem]);
      const chance = rewardItem.amount;
      itemElement.style.setProperty(
        "--item-nb-color",
        RARITY_COLORS[rewardItem.rarity]
      );
      itemElement.children[0].children[0].setAttribute(
        "src",
        getColoredIcon(rewardItem.rarity)
      );
      itemElement.children[0].children[2].setAttribute(
        "src",
        getSelectedItemImage(itemData, selectedItem)
      );
      itemElement.children[0].children[1].innerText = `${
        chance == 0 || rewardItem.type == "NO_REWARD" ? "" : chance
      }`;
    }
  }, [selectedItem, itemData, getRewardItem]);

  useEffect(() => {
    updateSections();
  }, [itemData]);

  return (
    <>
      <div className="wheel-winning-line" />
      <div
        className="wheel-container"
        // style={{ transform: `rotate(${currentDegrees}deg)` }}
        ref={wheelContainerRef} // Set ref for wheel container
      >
        <div
          className={`wheel`}
          style={{
            "--nb-item": itemData.length,
            "--selected-item": selectedItem,
            "--random-position": `${randomPosition}deg`,
          }}
        >
          {itemData.map((item, index) => {
            return (
              <div
                className="wheel-item wheel-item-legendary"
                key={index}
                id={`item-${index}`}
              >
                <div className="image-item">
                  <img className="box-icon" />
                  <span
                    style={{
                      transform: "rotate(90deg) translateY(25px)",
                      display: "inline-block",
                      position: "relative",
                      left: "-20px",
                    }}
                  >
                    {item.amount}
                  </span>
                  <img
                    className="image-item-product"
                    alt="aa"
                    style={{ maxWidth: "19%" }}
                  />

                  {/* <img
                className="image-item-icon"
                src="https://i.ibb.co/mX0bjDt/mask.png"
                alt="mask"
              /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default Wheel;
