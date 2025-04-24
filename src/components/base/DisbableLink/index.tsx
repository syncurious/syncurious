import Link from "next/link";
import React from "react";

function DisableLink(props: any) {
  if (props.isDisabled) return <div {...props}>{props.children}</div>;
  return <Link {...props}>{props.children}</Link>;
}

export default DisableLink;
