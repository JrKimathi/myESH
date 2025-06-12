import React from 'react';

const ArticleDetailPage = ({ article, onBack }) => {
    if (!article) return null;

    return (
        <div className="container mx-auto px-4 py-8">
            <button onClick={onBack} className="mb-4 text-sm text-blue-500 hover:underline">&larr; Back to Articles</button>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
                <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded mb-4" />
                <p className="text-gray-700 dark:text-gray-300">{article.content}</p>
            </div>
        </div>
    );
};

export default ArticleDetailPage;
