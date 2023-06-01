import React from 'react'
import { Div, DivVideo, Pr, Span, WatchWrapper } from './style_watxhvideo'

const url = "https://www.youtube.com/embed/t8mnqGfseVg"
const WatchVideo = () => {
  return (
    <div className='container'>
        <WatchWrapper>
            <Div>
                <Span>Watch Video
                </Span>
                <Pr>Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.
                </Pr>
                <Pr>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet consectetuer diam nonummy.
                </Pr>
            </Div>
            <DivVideo>
            <iframe width="100%" height="350px" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </DivVideo>
        </WatchWrapper>
    </div>
  )
}

export default WatchVideo
