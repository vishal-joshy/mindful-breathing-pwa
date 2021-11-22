import React from "react"
import { useMediaQuery } from "react-responsive"

function EmbedVideo({ video }) {
    const isMobileDevice = useMediaQuery({
        query: "(max-device-width: 600px)",
    })

    console.log({ isMobileDevice })
    return (
        <>
            <video
                style={{
                    width: isMobileDevice ? "100%" : null,
                    height: "auto",
                }}
                autoPlay={true}
                muted
                loop
            >
                <source src={video} type="video/mp4" />
            </video>
        </>
    )
}

export default EmbedVideo
