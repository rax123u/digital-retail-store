import { useScroll, useTransform, useSpring } from 'framer-motion'

export const useProductTimeline = (targetRef) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  // Optimised hardware tracking engine
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 28 })

  const opacities = [
    useTransform(smoothProgress, [0.05, 0.12, 0.18], [0, 1, 0]),
    useTransform(smoothProgress, [0.18, 0.25, 0.31], [0, 1, 0]),
    useTransform(smoothProgress, [0.31, 0.38, 0.44], [0, 1, 0]),
    useTransform(smoothProgress, [0.44, 0.51, 0.57], [0, 1, 0])
  ]

  return { smoothProgress, opacities }
}