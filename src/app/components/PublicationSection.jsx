import React from "react";

const PublicationData = [
    {
        id: 1,
        title: "Multimodal Sentiment Analysis of #MeToo Tweets",
        publicationDetails: "Published in IEEE BigMM Conference, 2020",
        authors: [
            "Soham Tiwari",
            "Priyam Basu",
            "Joseph Mohanty",
            "Sayantan Karmakar",
        ],
        abstract: "The #MeToo trend has led to people talking about personal experiences of harassment more openly. This work attempts to aggregate such experiences of sexual abuse to facilitate a better understanding of social media constructs and to bring about social change. We propose an approach to multimodal sentiment analysis using deep neural networks combining visual analysis and natural language processing. Our goal is different than the standard sentiment analysis goal of predicting whether a sentence expresses positive or negative sentiment; instead we try to detect the stand of a person on the topic and deduce the emotions conveyed. We have made use of a Multimodal Bi-Transformer (MMBT) model which combines both image and text features to produce an optimal prediction of a tweet's stand and sentiments on the #MeToo campaign.",
        link: "https://ieeexplore.ieee.org/document/9232518",
        pdf: "public/files/Publication/Multimodal_Sentiment_Analysis_of_MeToo_Tweets_using_Focal_Loss_Grand_Challenge.pdf"
    }
];

const PublicationSection = () => {
    return (
        <section id="publications" className="py-10">
            <div className="container mx-auto px-5">
                <h2 className="text-4xl font-bold text-white mb-8">
                    PUBLICATIONS
                </h2>
                {PublicationData.map((publication) => (
                    <div key={publication.id} className="mb-8">
                        <h3 className="text-2xl font-semibold text-blue-400 hover:underline">
                            <a
                                href={publication.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {publication.title}
                            </a>
                        </h3>
                        <p className="text-gray-400 italic">
                            {publication.publicationDetails}
                        </p>
                        <p className="text-gray-300 mt-2">
                            <span className="font-semibold">Authors: </span>
                            {publication.authors.map((author, index) => (
                                <span key={index}>
                                    {author === "Joseph Mohanty" ? (
                                        <strong>{author}</strong>
                                    ) : (
                                        author
                                    )}
                                    {index < publication.authors.length - 1
                                        ? ", "
                                        : ""}
                                </span>
                            ))}
                        </p>
                        <p className="text-gray-300 mt-4">
                            <span className="font-semibold">Abstract: </span>
                            {publication.abstract}
                        </p>
                        <p className="text-blue-400 hover:underline mt-4">
                            <a
                                href={publication.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download PDF
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default PublicationSection
