import React from "react";
import { LockBody, ReleaseBody, Spinner, Picture } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      console.log(`/images/users/${src}.png`)
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
