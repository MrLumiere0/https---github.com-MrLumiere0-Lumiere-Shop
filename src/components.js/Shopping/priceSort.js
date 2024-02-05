import React from "react";

export default function DropDownMenu({ props, onSelect, sorttype }) {
  return (
    <div className='menu'>
      <label className='Filter-label'>Sort</label>
      <select
        className='Filters'
        for='product-sort'
        value={sorttype}
        onChange={onSelect}
      >
        <option value='none'>None</option>
        <option value='price'>Price</option>
        <option value='atoz'>Alphabetical (A to Z)</option>
        <option value='ztoa'>Alphabetical (Z to A)</option>
      </select>
    </div>
  );
}
