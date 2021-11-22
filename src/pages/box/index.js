import React from "react"
import Layout from "../../components/Layout"
import boxVideo from "../../assets/videos/box-vid.mp4"
import EmbedVideo from "../../components/EmbedVideo"

function index() {
    return (
        <Layout>
            <EmbedVideo video={boxVideo} />
        </Layout>
    )
}

export default index
