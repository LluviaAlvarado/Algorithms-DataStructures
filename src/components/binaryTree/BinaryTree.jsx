import styles from './BinaryTree.module.css'

export const BinaryTree = (props) => {
  const nodeColors = [styles.lila, styles.pink, styles.blue]
  let tree
  let nodeColor = -1
  let i = 0,
    level = 0
  const mappedHeap = []

  while (i < props.elements.length) {
    const levelLength = i + 2 ** level
    const levelNodes = props.elements.slice(i, levelLength)
    for (let j = 0; j < levelLength - props.elements.length; j++) {
      levelNodes.push('-')
    }
    mappedHeap.push(
      // eslint-disable-next-line no-loop-func
      levelNodes.map((node, index) => {
        if (index % 2 === 0) {
          nodeColor++
          if (nodeColor >= nodeColors.length) {
            nodeColor = 0
          }
        }
        return (
          <button
            key={index}
            className={`${styles.node}  ${nodeColors[nodeColor]}`}
          >
            {node}
          </button>
        )
      })
    )
    i = levelLength
    level++
  }

  tree = mappedHeap.map((level, index) => (
    <div key={index} className={styles.level}>
      {level}
    </div>
  ))

  return (
    <div className={`${styles.treeContainer} ${props.className}`}>
      <h2>{props.title}</h2>
      <div className={styles.tree}>{tree}</div>
    </div>
  )
}
