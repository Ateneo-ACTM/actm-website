import React, { useState } from 'react';
import { Container, CategoriesList, Categories, Category } from './styles';

function StoryList() {
    const categories = [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
        "Category 6",
    ]

    const [categoryFilter, setCategoryFilter] = useState('');
    const [activeCategory, setActiveCategory] = useState(null);

    const handleOnClick = (category) => {
        setCategoryFilter(category);
        setActiveCategory(category);
    }

    return (
        <Container>
            <CategoriesList>
                <Categories>
                    {categories.map((category, index) => (
                        <Category 
                            key={index}
                            onClick={() => handleOnClick(category)}
                            className={ activeCategory === category ? "active" : "" }>
                            { category }
                        </Category>
                    ))}
                </Categories>
            </CategoriesList>
        </Container>
    )
}

export default StoryList