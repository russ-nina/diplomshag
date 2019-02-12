import React from 'react';
import './filterCategory.css';

export default class FilterCategory extends React.Component{
    onFilterCategoryClick = (filterCategory) => {
        this.props.onFilterCategoryClick(filterCategory);
    };
    render(){
        let filterCategories = this.props.filterCategories.map((filterCategory, index) => {
            let selectedFilterCategory = this.props.selectedFilterCategory;
            const activeClassNameFilter = filterCategory === selectedFilterCategory ? `active` : '';
            return <div
                key={index}
                className={`filter_category ${activeClassNameFilter}`}
                onClick={() => this.onFilterCategoryClick(filterCategory)}
                data-filterCategory={filterCategory}
                >
                <p>{filterCategory}</p>
            </div>
        });
        return(
            <div className="filter_headline">
                {filterCategories}
            </div>
        );
    }
}