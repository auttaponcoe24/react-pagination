import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export default function Images({ data }) {
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 6;

	const endOffset = itemOffset + itemsPerPage;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const currentItems = data.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(data.length / itemsPerPage);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % data.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};
	return (
		<>
			{/* <Items currentItems={currentItems} /> */}
			<div className="images">
				{currentItems.map((image) => {
					return (
						<div key={image.id} className="image">
							<img src={image.url} alt={image.title} />
						</div>
					);
				})}
			</div>
			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
				containerClassName="pagination"
				pageLinkClassName="page-num"
				previousLinkClassName="page-num"
				nextLinkClassName="page-num"
				activeLinkClassName="active"
			/>
		</>
	);
}
