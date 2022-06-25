import React, { useEffect, useState, useMemo, memo } from "react";
import { COMPONENTS_MAP_BUILDER, COMPONENTS_MAP_VIEW } from "./constants";
import isEqual from "lodash.isequal";
import { useSelector } from 'react-redux'
import { configSelectors } from '../store/storeReduxToolkit/reducer'

export const Render = memo(({ id, isEdit }) => {
  const [component, setComponent] = useState({});
  const getComponent = useSelector(configSelectors.selectComponent)

  const { name, children, ...props } = component;

  const componentMap = useMemo(() => {
    return isEdit ? COMPONENTS_MAP_BUILDER : COMPONENTS_MAP_VIEW;
  }, [isEdit]);

  useEffect(() => {
    const newProps = getComponent(id) || {};

    if (!isEqual(newProps, component)) {
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
});

Render.displayName = 'Render'
