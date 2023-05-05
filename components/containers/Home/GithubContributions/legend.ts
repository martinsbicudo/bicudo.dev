const legend = [
  {
    isInRange: (v) => v === 0,
    color: 'rgba(150, 150, 150, 0.15)',
    label: '= 0',
  },
  {
    isInRange: (v) => v === 1,
    color: 'rgba(255, 255, 255, 0.3)',
    label: '= 1',
  },
  {
    isInRange: (v) => v === 2,
    color: 'rgba(255, 255, 255, 0.5)',
    label: '= 2',
  },
  {
    isInRange: (v) => v === 3,
    color: 'rgba(255, 255, 255, 0.75)',
    label: '= 3',
  },
  {
    isInRange: (v) => v >= 4,
    color: 'rgba(255, 255, 255, 1)',
    label: '>= 4',
  },
]

export default legend
