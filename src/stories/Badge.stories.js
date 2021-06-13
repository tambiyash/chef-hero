import React from 'react';
import { Badge } from "../components";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: 'Badge',
  component: Badge,
  decorators: [withKnobs],
};

const handleClick = () => alert("Clicked!")


export const primaryBadge = () => {
  return (
    <Badge
      value="default"
      rounded={boolean("Show Rounded", false)}
      boldText={boolean("Show Text in Bold", false)}
      uppercase={boolean("Show Text in Uppercase", false)}
    />
  );
};

export const badgeWithCloseIcon = () => {
  return (
    <Badge
      value="default"
      onRemove={() => {}}
      rounded={boolean("Show Rounded", false)}
      boldText={boolean("Show Text in Bold", false)}
      uppercase={boolean("Show Text in Uppercase", false)}
    />
  );
};

export const purpleBadge = () => {
  return (
    <Badge
      purple
      value="default"
      onRemove={() => {}}
    />
  );
};

export const yellowBadge = () => {
  return (
    <Badge
      yellow
      value="default"
      onRemove={() => {}}
    />
  );
};

export const greenBadge = () => {
  return (
    <Badge
      green
      value="default"
      onRemove={() => {}}
    />
  );
};
