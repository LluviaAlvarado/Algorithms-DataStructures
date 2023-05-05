import React from 'react'
import { Array } from '../array/Array'
import { BinaryTree } from '../binaryTree/BinaryTree'

export const ListVisualizer = (props) => {
  return (
    <>
      {(() => {
        switch (props.type) {
          case 'array':
            return (
              <Array
                className={props.className}
                title={props.title}
                elements={props.elements}
              />
            )
          case 'binary-tree':
            return (
              <BinaryTree
                className={props.className}
                title={props.title}
                elements={props.elements}
              />
            )
          default:
            return (
              <div className={props.className}>
                <h2>{props.title}</h2>
                <ul>
                  {props.elements.map((element, index) => (
                    <li key={index}>{element}</li>
                  ))}
                </ul>
              </div>
            )
        }
      })()}
    </>
  )
}
