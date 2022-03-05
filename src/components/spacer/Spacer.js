import React from 'react'
// @ts-ignore
import styled from 'styled-components'

// @ts-ignore
const TopSmall = styled.View`margin-top:${(props) => props.theme.space[1]}`;
// @ts-ignore
const TopMedium = styled.View`margin-top:${(props) => props.theme.space[2]}`;
// @ts-ignore
const TopLarge = styled.View`margin-top:${(props) => props.theme.space[3]}`;

// @ts-ignore
const BottomSmall = styled.View`margin-bottom:${(props) => props.theme.space[1]}`;
// @ts-ignore
const BottomMedium = styled.View`margin-bottom:${(props) => props.theme.space[2]}`;
// @ts-ignore
const BottomLarge = styled.View`margin-bottom:${(props) => props.theme.space[3]}`;

// @ts-ignore
const LeftSmall = styled.View`margin-left:${(props) => props.theme.space[1]}`;
// @ts-ignore
const LeftMedium = styled.View`margin-left:${(props) => props.theme.space[2]}`;
// @ts-ignore
const LeftLarge = styled.View`margin-left:${(props) => props.theme.space[3]}`;

// @ts-ignore
const RightSmall = styled.View`margin-right:${(props) => props.theme.space[1]}`;
// @ts-ignore
const RightMedium = styled.View`margin-right:${(props) => props.theme.space[2]}`;
// @ts-ignore
const RightLarge = styled.View`margin-right:${(props) => props.theme.space[3]}`;

export const Spacer = ({ variant }) => {
  if (variant === "top.medium") {
    return <TopMedium />
  }

  if (variant === "top.large") {
    return <TopLarge />
  }

  if (variant === "bottom.small") {
    return <BottomSmall />
  }

  if (variant === "bottom.medium") {
    return <BottomMedium />
  }

  if (variant === "bottom.large") {
    return <BottomLarge />
  }

  if (variant === "left.small") {
    return <LeftSmall />
  }

  if (variant === "left.medium") {
    return <LeftMedium />
  }

  if (variant === "left.large") {
    return <LeftLarge />
  }

  if (variant === "right.small") {
    return <RightSmall />
  }

  if (variant === "right.medium") {
    return <RightMedium />
  }
  if (variant === "right.large") {
    return <RightLarge/>
  }

  return <TopSmall />
}