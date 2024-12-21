import React from 'react'

function TechIcon({
    component,
}: {
    component: React.ElementType
}) {

const Component = component;

  return (
    <Component className="size-10" />
  )
}

export default TechIcon
