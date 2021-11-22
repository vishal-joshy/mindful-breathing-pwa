import React from "react"
import Layout from "../../components/Layout"
import FourSevenVideo from "../../assets/videos/four-seven-vid.mp4"
import EmbedVideo from "../../components/EmbedVideo"

function index() {
    return (
        <Layout>
            <EmbedVideo video={FourSevenVideo} />
        </Layout>
    )
}

export default index
