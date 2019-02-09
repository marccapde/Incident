
export const fadeOutTransition = (transitionInfo) => {
  const { progress, start, end } = transitionInfo

  const opacityInterpolation = progress.interpolate({
    inputRange: [0, start, end, 1],
    outputRange: [1, 1, 0, 0]
  })

  const result = {
    opacity: opacityInterpolation
  }

  return result;
}