import c from "classnames";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

export interface Props extends LinkProps {
  onActive?: () => void;
  activeClassName?: string;
}

const ActiveLink: React.FC<Props> = props => {
  const {
    children,
    href,
    onActive,
    activeClassName = "active",
    ...otherProps
  } = props;

  const child = React.Children.only(children) as NonNullable<
    React.ReactElement<{ className?: string }>
  >;

  const router = useRouter();

  const isActive = React.useMemo(
    () => router.pathname === href,
    [href, router.pathname]
  );

  React.useEffect(() => {
    if (isActive && onActive) onActive();
  }, [isActive, onActive]);

  return (
    <Link href={href} {...otherProps}>
      {React.cloneElement(child, {
        className: c(child.props?.className, {
          [activeClassName]: isActive
        })
      })}
    </Link>
  );
};

export default ActiveLink;
