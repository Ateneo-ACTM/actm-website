import React from "react"
import Stories from '../../../components/Stories'
import Layout from "../../../components/Layout"

const StoriesPage = () => {
    const seo = {
        siteTitle: 'Hello',
        siteDescription: 'World'
    }

    return (
        <Layout path ="/stories" seo={seo}>
            <Stories />
        </Layout>
    )
}

export default StoriesPage
