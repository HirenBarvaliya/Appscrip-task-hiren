import React, { useState } from 'react'
import './home.css'
import Card from '../components/common/card/Card';
import DownArrow from '../assets/svg/DownArrow';
import SideFilter from '../components/common/sidefilter/SideFilter';
import TrueIcon from '../assets/svg/TrueIcon';
import { filterOptions, ProductData } from '../utils/commonArray';
import { Helmet } from 'react-helmet';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSelectedFilter, setIsSelectFilter] = useState({
    ideal_for: 'All',
    occasion: 'All',
    work: 'All',
    fabric: 'All',
    segment: 'All',
    suitable_for: 'All',
    raw_materials: 'All',
    pattern: 'All'
  })
  const [selected, setSelected] = useState({ value: '1', label: 'Recommended' });
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is home page." />
      </Helmet>
      <div className="container">
        <p><span style={{ color: '#c7cfd3', paddingLeft: '8px' }}>HOME  |</span>  SHOP</p>
        <h1 style={{ textAlign: 'center' }}>DISCOVER OUR PRODUCTS</h1>
        <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br /> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        <div className='filter-heading'>
          <div className='inner-filter-heading'>
            <p><b>3425 ITEMS</b></p>
            <button className='show-hide-filter' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>{isSidebarOpen ? '< HIDE FILTER' : '> SHOW FILTER'}</button>
          </div>
          <div className='mobile-filter'>FILTER</div>
          <div className="filter-dropdown">
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
              <span>{selected ? selected.label : 'Select an option'}</span>
              <span className={`arrow ${isOpen ? 'open' : ''}`}><DownArrow /></span>
            </div>
            {isOpen && (
              <div className="dropdown-menu">
                {filterOptions.map(option => (
                  <div
                    key={option.value}
                    className={`dropdown-item ${selected === option ? 'selected' : ''}`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.label}
                    {selected.value === option.value && (
                      <span><TrueIcon /></span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={`app ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          {isSidebarOpen ? <aside className="sidebar">
            <div style={{ padding: '3px 0px', cursor: 'pointer' }}>
              <div style={{ width: '100%', display: 'inline-block' }}>
                <label style={{ padding: '3px 0px', cursor: 'pointer', width: '100%', position: 'relative', display: 'flex' }}>
                  <input type='checkbox' />
                  <div>Customizble</div>
                </label>
              </div>
            </div>
            <hr />
            <SideFilter label='IDEAL FOR' SelectedFilter={isSelectedFilter.ideal_for} data={['Men', 'Women', 'Baby & Kids']} />
            <SideFilter label='OCCASION' SelectedFilter={isSelectedFilter.occasion} data={['Birthday', 'Anniversary']} />
            <SideFilter label='WORK' SelectedFilter={isSelectedFilter.work} data={['Learning', 'Planning']} />
            <SideFilter label='FABRIC' SelectedFilter={isSelectedFilter.fabric} data={['Linen', 'Silk', 'Cotton']} />
            <SideFilter label='SEGMENT' SelectedFilter={isSelectedFilter.segment} data={['Education', 'Personality']} />
            <SideFilter label='SUITABLE FOR' SelectedFilter={isSelectedFilter.suitable_for} data={['Childrens', 'Elders']} />
            <SideFilter label='RAW MATERIALS' SelectedFilter={isSelectedFilter.raw_materials} data={['Limestone', 'Mineral']} />
            <SideFilter label='PATTERN' SelectedFilter={isSelectedFilter.pattern} data={['Creational', 'Structural']} />
          </aside> : ''}
          <main className="main-content">
            <div className="product-list">
              <div className="card-container">
                {ProductData.map((ele, i) => (
                  <Card item={ele} index={i} key={i} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Home