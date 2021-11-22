import React from "react"
import Layout from "../../components/Layout"
import coherentVideo from "../../assets/videos/coherent-vid.mp4"
import EmbedVideo from "../../components/EmbedVideo"

function index() {
    return (
        <Layout>
            <EmbedVideo video={coherentVideo} />
        </Layout>
    )
}

export default index
