import { useState, useEffect } from "react";
import styled from "styled-components";
import LogoSrc from "./assets/cat.png";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";

const Logo = styled.img`
  display: flex;
  justify-self: flex-start;
  width: auto;
  height: 450px;
  align: center;
  margin: 0 auto;
`;

const apiKey = "1b8ca91d-d2a3-4644-98bd-d03da5404885";
const url = "https://api.thecatapi.com/v1/images/search";

function Generator() {
  const [catUrl, setCatUrl] = useState("");
  const [checked, toggleCheckbox] = useState({
    checkbox1: false,
    checkbox2: false,
    disabled: true,
  });

  useEffect(() => {
    getCat();
    if (checked.checkbox2) {
      const update_interval = setInterval(() => {
        getCat();
      }, 5000);
      return () => {
        clearInterval(update_interval);
      };
    }
  }, [checked.checkbox2]);

  const getDisabled = (state) => {
    if (state.checkbox1 || state.checkbox2) {
      return false;
    } else if (!state.checkbox1 && !state.checkbox2) {
      return true;
    } else {
      return true;
    }
  };

  const handleCheckbox = (checkbox) => {
    toggleCheckbox({
      ...checked,
      [checkbox]: !checked[checkbox],
      disabled: getDisabled(checked),
    });
  };

  const isDisabled = !checked.checkbox1;
  const checkDisable = isDisabled ? "disabled" : "";

  const getCat = () => {
    fetch(url, {
      headers: {
        "x-api-key": apiKey,
      },
    })
      .then((res) => res.json())
      .then((cats) => {
        const catUrl = cats[0].url;
        setCatUrl(catUrl);
      });
  };

  return (
    <div>
      <Checkbox
        label="Enabled"
        onChange={() => handleCheckbox("checkbox1")}
        checked={checked.checkbox1}
      />
      <Checkbox
        label="Auto-refresh every 5 seconds"
        onChange={() => handleCheckbox("checkbox2")}
        checked={checked.checkbox2}
      />

      <Button disabled={checkDisable} onClick={getCat} />

      <Logo
        src={catUrl}
        alt=""
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = { LogoSrc };
        }}
      />
    </div>
  );
}

export default Generator;
