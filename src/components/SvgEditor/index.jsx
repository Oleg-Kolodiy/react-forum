import React from "react";

import { Wrapper } from "./style";
import { Button } from "components";
import { ReactComponent as Close } from "assets/close.svg";

export const SvgEditor = ({ isOpen, setIsOpenSvgEditor }) => {
  return (
    isOpen && (
      <Wrapper>
        <Button
          bg="gray"
          color="gray"
          onClick={() => setIsOpenSvgEditor(false)}
        >
          <Close />
        </Button>
        <iframe src="https://jarjad.ru/svg-editor/" title="SVG-paint">
          Ваш браузер не поддерживает плавающие фреймы!
        </iframe>
      </Wrapper>
    )
  );
};
