import React from "react";
import {default as Paginate} from "react-js-pagination";
import styles from './Pagination.module.css';

const Pagination = props =>{
    return(
        <div className='mt_1 mb_1'>
            <Paginate
                activePage={props.activePage}
                itemsCountPerPage={props.itemsCountPerPage}
                totalItemsCount={props.totalItemsCount}
                pageRangeDisplayed={props.pageRangeDisplayed}
                innerClass={styles.list}
                itemClass={styles.item}
                linkClass={styles.link}
                activeLinkClass={styles.active}
                onChange={props.handlePageChange}
                lastPageText={props.lastPageText}
                firstPageText={props.firstPageText}
            />
        </div>
    );

};

export default Pagination;