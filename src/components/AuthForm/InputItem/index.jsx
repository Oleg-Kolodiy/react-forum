import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Label, Input, VisibilityBox } from "./style";
import { ReactComponent as Check } from "assets/check.svg";
import { ReactComponent as XCicrcle } from "assets/x-circle.svg";
import { ReactComponent as Hidden } from "assets/hidden.svg";
import { ReactComponent as Visible } from "assets/view.svg";

export const InputItem = ({ formik, id, name, type, labelText, required }) => {
  const [visible, setVisible] = useState(false);

  const inputItemRef = useRef(null);

  const onClickOutside = (e) => {
    if (!e.path.includes(inputItemRef.current)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickOutside);
  }, []);

  return (
    <Wrapper ref={inputItemRef}>
      <Label htmlFor={id}>{required ? labelText + "*" : labelText}</Label>
      <Input
        id={id}
        name={name}
        type={visible ? "text" : type}
        value={formik.values[name]}
        error={formik.errors[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {!!formik.errors[name] && formik.touched[name] ? (
        <XCicrcle title={formik.errors[name]} />
      ) : (
        <Check />
      )}
      {type === "password" && !!formik.values[name] && (
        <VisibilityBox>
          {visible ? (
            <Visible title="Hide password" onClick={() => setVisible(false)} />
          ) : (
            <Hidden title="Show password" onClick={() => setVisible(true)} />
          )}
        </VisibilityBox>
      )}
    </Wrapper>
  );
};
