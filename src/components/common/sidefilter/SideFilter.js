import React, { useState } from 'react'
import DownArrow from '../../../assets/svg/DownArrow'
import './sidefilter.css'

function SideFilter({label, SelectedFilter, data}) {
    const [isFilter, setIsFlter] = useState(false)

    const handleChange = (w) => {
console.log(w.target.value);

    }

  return (
    <>
    <section className='dropdown-section'>
        <div className='filter-title' onClick={() => setIsFlter(!isFilter)}>
          <div className='filter-title-inner'>{label}</div>
          <div style={{transform: isFilter ? 'rotate(180deg)' : '', transition: 'transform 0.3s ease'}}>
          <DownArrow />
          </div>
          
        </div>
        <p>{SelectedFilter}</p>
        {isFilter ? <div>
          <div style={{margin: '7px 0px'}}>
            {data?.map((ele) => (
                <>
                    <div style={{padding: '3px 0px', cursor: 'pointer'}}>
                        <div style={{width: '100%', display: 'inline-block'}}>
                            <label style={{padding: '3px 0px', cursor: 'pointer', width: '100%', position: 'relative', display: 'flex'}}>
                            <input type='checkbox' onChange={(e) => handleChange(e)} />
                            <div>{ele}</div>
                            </label>
                        </div>
                    </div>
                </>
            ))}
            </div>
        </div> : ''}
          </section>
          <hr />
          </>
  )
}

export default SideFilter