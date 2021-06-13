import React from 'react';
import { Button } from "../components";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

const handleClick = () => alert("Clicked!")


export const primaryButton = () => {
  return (
  <Button
    onClick={handleClick}>Default
  </Button>
  );
};

export const purpleButton = () => {
  return (
    <Button
      rounded={boolean("Show rounded", false)}
      purple={boolean("Show purple", true)}
      onClick={handleClick}>Variants</Button>
    );
};

export const blueButton = () => {
  return (
    <Button
      rounded={boolean("Show rounded", false)}
      blue={boolean("Show blue", true)}
      onClick={handleClick}>Variants</Button>
    );
};
