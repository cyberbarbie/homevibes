import React, { Component} from 'react'


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
    }
      this.loopListings = this.loopListings.bind(this)
  }
    loopListings(){
    
        var listingsData = this.props.filteredData
        var noResult = 'No Results Found.';
        if(listingsData == undefined || listingsData.length == 0){
            return noResult;
        }
    return listingsData.map((listing,index) =>{
        
        if (this.props.globalState.view == 'box'){
            // THIS IS THE BOX VIEW
        return ( <div id='responsivegrid' className='listing' key={index}>
                    <div className='listing-img' style={{background: `url("${listing.image}") no-repeat center center`}}>
                    <span className='address'>{listing.address}</span>
                <div className='details'>
                    <div className='user-img'></div>
                    <div className='user-details'>
            <span className='user-name'>John Smith</span>
            <span className='post-date'>05/08/2017</span>
            </div>
            <div className='listing-details'>
            <div className='floor-space'><i className="far fa-square"></i><span>{listing.floorSpace} ft&sup2;</span></div>
            <div className='bedrooms'><i className="fas fa-bed"></i><span>{listing.rooms} Bedrooms</span></div>
             <button className='view-listing'>View Listing</button>
            </div>
                </div>
                    </div>
             <div className='bottom-info'>
            <span id='rent-price'>${listing.price} / month</span>
            <span><i className="fas fa-map-marker"></i>{listing.city}, {listing.state}</span>
            </div>
                </div>)
   
                }    else {
            // THIS IS THE LONG LIST VIEW
                  return ( <div id='longview' className='listing' key={index}>
                    <div className='listing-img' style={{background: `url("${listing.image}") no-repeat center center`}}>
                    <span className='address'>{listing.address}</span>
                <div className='details'>
                    <div className='user-img'></div>
                    <div className='user-details'>
            <span className='user-name'>John Smith</span>
            <span className='post-date'>05/08/2017</span>
            </div>
            <div className='listing-details'>
            <div className='floor-space'><i className="far fa-square"></i><span>{listing.floorSpace} ft&sup2;</span></div>
            <div className='bedrooms'><i className="fas fa-bed"></i><span>{listing.rooms} Bedrooms</span></div>
             <button className='view-listing'>View Listing</button>
            </div>
                </div>
                    </div>
             <div className='bottom-info'>
            <span id='rent-price'>${listing.price} / month</span>
            <span><i className="fas fa-map-marker"></i>{listing.city}, {listing.state}</span>
            </div>
                </div>)
        }
                    
                 })
        }
  render () {
    return (<section id='listings'>
             <section className='search-area'> 
            <input type='text' name='search'  placeholder='Enter an address, neighborhood, or city' onChange={this.props.change}/>
            </section>
            <section className='sortby-area'>
            <div className='results'>{this.props.globalState.filteredData.length} results found</div>
            <div className='sort-options'>
            <select name='sortby' className='sortby' onChange={this.props.change}>
            <option value='price-dsc'>Lowest Price</option>
            <option value='price-asc'>Highest Price</option>
            </select>
            <div className='view'>
            <i className="fas fa-th-list" onClick={this.props.changeView.bind(null, 'long')}></i>
            <i className="fas fa-th" onClick={this.props.changeView.bind(null, 'box')}></i>
            </div>
             </div>
            </section>
            
            <section className='listings-results'>
                {this.loopListings()}
            </section>
            
           
            
             <section className='pagination'>
            <ul className='pages'>
                <li>Prev</li>
                <li className='active'>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>Next</li>
            
            </ul>
            
            </section>
            </section>)
  }
}




