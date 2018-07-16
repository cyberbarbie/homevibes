import React, { Component} from 'react'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
    }
      this.cities = this.cities.bind(this)
       this.homeTypes = this.homeTypes.bind(this)
       this.bedrooms = this.bedrooms.bind(this)
  }
    componentWillMount(){
        this.props.populateAction()
    }
    cities(){
        if(this.props.globalState.populateFormsData.cities != undefined){
        var {cities} = this.props.globalState.populateFormsData
        return cities.map((item) => {
            
            return ( 
                 <option key={item} value={item}>{item}</option>
                )
        })
        }
    }
    homeTypes(){
         if(this.props.globalState.populateFormsData.homeTypes != undefined){
          var {homeTypes} = this.props.globalState.populateFormsData
        return homeTypes.map((item) => {
            
            return ( 
                 <option key={item} value={item}>{item}</option>
                )
        })
         }
    }
    bedrooms(){
         if(this.props.globalState.populateFormsData.bedrooms != undefined){
           var {bedrooms} = this.props.globalState.populateFormsData
        return bedrooms.map((item) => {
            
            return ( 
                 <option key={item} value={item}>{item}+ Bedrooms</option>
                )
        })
         }
    }
  render () {
    return (<section id='filter'>
            <div className='inside'>
            <h4>Filter</h4>
            <div className='responsiveFilter'>
            <label htmlFor='city' className='title'>City</label>
            <select name='city' className='neighborhood' onChange = {this.props.change}>
             <option value='All'>All Cities</option>
            {this.cities()}
            </select>
            <label htmlFor='homeType' className='title'>Home Type</label>
            <select name='homeType' className='housetype' onChange = {this.props.change}>
             <option value='All'>All Homes</option>
            {this.homeTypes()}
            </select>
            <label htmlFor='bedrooms' className='title'>Bedroom</label>
            <select name='bedrooms' className='bedrooms' onChange = {this.props.change}>
            {this.bedrooms()}
            </select>
            </div>
            <div className='responsiveFilter'>
            <div className='filters price'>
            <span className='title'>Price</span>
            <input type='text' name='min_price' className='min-price' value={this.props.globalState.min_price} onChange = {this.props.change}/>
            <input type='text' name='max_price' className='max-price' value={this.props.globalState.max_price} onChange = {this.props.change}/>
            </div>
            <div className='filters floor-space'>
            <span className='title'>Floor Space</span>
            <input type='text' name='min_floorspace' className='min-floor-space' value={this.props.globalState.min_floorspace} onChange = {this.props.change}/>
            <input type='text' name='max_floorspace' className='max-floor-space' value={this.props.globalState.max_floorspace} onChange = {this.props.change}/>
            </div>
            </div>
            <div className='responsiveFilter'>
            <div className='filters extras'>
            <span className='title'>Extras</span>
            <label htmlFor='extras'>
            <span>Elevators</span>
            <input name='elevator' value='elevator' type='checkbox' onChange = {this.props.change}/>
            </label>
             <label htmlFor='extras'>
            <span>Swimming Pool</span>
            <input name='swimming_pool' value='swimming-pool' type='checkbox' onChange = {this.props.change}/>
            </label>
             <label htmlFor='extras'>
            <span>Finished Basement</span>
            <input name='finished_basement' value='finished-basement' type='checkbox' onChange = {this.props.change}/>
            </label>
            <label htmlFor='extras'>
            <span>Gym</span>
            <input name='gym' value='gym' type='checkbox' onChange = {this.props.change}/>
            </label>
            
            </div>
            </div>
            </div>
            </section>)
  }
}




