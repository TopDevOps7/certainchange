import { React, useState } from "react";
import { Section } from "react-scroll-section";
import useWeb3Integration from "../../hooks/useWeb3Integration.js";

export default function Mint() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);
  const mint = () => alert(counter);
  const [
    account,
    provider,
    isPaused,
    isPresale,
    web3provider,
    onConnect,
    resetApp,
    mintedAmount,
    mintPreSale,
    mintPublicSale,
  ] = useWeb3Integration(counter);
  console.log(isPaused);
  console.log(mintedAmount);
  return (
    <Section className="mint" id="mint">
      <h3 className="section_title">
        {/* <b>Mint</b>&nbsp; <span> 0/5757</span> */}
        <b>Mint</b>&nbsp; <span> {web3provider ? mintedAmount : "0"}/5757</span>
      </h3>
      <div className="mint_max">
        <span>Max 10 per txn</span>
        <div className="mint_input">
          <button
            disabled={counter <= 0 ? true : false}
            onClick={decrementCounter}
          >
            -
          </button>
          <input
            type="text"
            name=""
            id=""
            onChange={() => {}}
            value={counter}
            maxLength={2}
          />
          <button
            disabled={counter >= 10 ? true : false}
            onClick={incrementCounter}
          >
            +
          </button>
        </div>
        <div className="mint_button">
          {isPaused ? (
            <button disabled>Pause</button>
          ) : // <button>Mint</button>
          isPresale && !isPaused ? (
            <button onClick={() => mintPreSale(web3provider, counter)}>
              Mint Presale
            </button>
          ) : (
            <button onClick={() => mintPublicSale(web3provider, counter)}>
              Mint
            </button>
          )}{" "}
        </div>
      </div>
      <div className="svgdive" style={{ width: "100%" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,128L80,149.3C160,171,320,213,480,197.3C640,181,800,107,960,80C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </Section>
  );
}
