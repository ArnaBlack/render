import React, { useEffect, useState, useMemo } from "react";
import { COMPONENTS_MAP_BUILDER, COMPONENTS_MAP_VIEW } from "./constants";
import { useGetComponent } from "../store/builderStore";
import isEquial from "lodash.isequal";

export const Render = ({ id, isEdit }) => {
  const [component, setComponent] = useState({});
  const getComponent = useGetComponent();

  const { name, children, ...props } = component;

  const componentMap = useMemo(() => {
    return isEdit ? COMPONENTS_MAP_BUILDER : COMPONENTS_MAP_VIEW;
  }, [isEdit]);

  useEffect(() => {
    const newProps = getComponent(id) || {};

    if (!isEquial(newProps, component)) {
      setComponent(getComponent(id) || {});
    }
  }, [id, getComponent, component]);

  if (children)
    return React.createElement(componentMap[name], {
      ...props,
      key: id,
      children: children.map((ch) => (
        <Render id={ch} key={`render_${ch}`} isEdit={isEdit} />
      ))
    });
  if (name)
    return React.createElement(componentMap[name], { ...props, key: id });

  return null;
};
