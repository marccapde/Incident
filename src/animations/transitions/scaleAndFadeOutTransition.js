import { fadeOutTransition } from './fadeOutTransition'

export const scaleAndFadeOutTransition = (transitionInfo) => {
  const { progress, start, end } = transitionInfo

  const scaleInterpolation = progress.interpolate({
    inputRange: [0, start, end, 1],
    outputRange: [1, 1, 0.5, 0.5]
  })

  const result = {
    ...fadeOutTransition(transitionInfo),
    transform: [{
      scale: scaleInterpolation
    }]
  }

  console.log(result)
  
  return result;
}