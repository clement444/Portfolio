import * as React from 'react';

type AdditionalProps = Record<string, unknown>;

type ClonableChildProps = {
  children?: React.ReactNode;
  asChild?: boolean;
};

export function recursiveCloneChildren(
  children: React.ReactNode,
  additionalProps: AdditionalProps,
  displayNames: string[],
  uniqueId: string,
  asChild?: boolean,
): React.ReactNode | React.ReactNode[] {
  const mappedChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    const childType = child.type as React.ComponentType;
    const displayName = childType.displayName || '';
    let newProps: AdditionalProps = {};

    if (displayNames.includes(displayName)) {
      newProps = additionalProps;
    }

    const childProps = child.props as ClonableChildProps;
    const clonedProps = {
      ...newProps,
      key: `${uniqueId}-${index}`,
    } as React.Attributes;

    return React.cloneElement(
      child,
      clonedProps,
      recursiveCloneChildren(
        childProps.children,
        additionalProps,
        displayNames,
        uniqueId,
        childProps.asChild,
      ),
    );
  });

  if (asChild) {
    return mappedChildren?.[0];
  }

  return mappedChildren;
}
