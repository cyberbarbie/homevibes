import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './listingsdata.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
        listingsData,
        city: 'All',
        homeType: 'All',
        bedrooms: 0,
        min_price: 0,
        max_price: 5000,
        min_floorspace: 0,
        max_floorspace: 5000,
        elevator: false,
        swimming_pool: false,
        finished_basement: false,
        gym: false,
        filteredData: listingsData,
        populateFormsData: '',
        sortby: 'price-dsc',
        view: 'box',
        search: ''
    }
      this.change = this.change.bind(this)
      this.filteredData = this.filteredData.bind(this)
      this.populateForms = this.populateForms.bind(this)
        this.changeView = this.changeView.bind(this)
  }
    componentWillMount(){
        var listingsData = this.state.listingsData.sort((a,b) => {
            return a.price - b.price
        })
        this.setState({
            listingsData
        })
    }
 change(event){
     var name = event.target.name;
     var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    this.setState({
        [name]: value
        
    }, () => {
        console.log(this.state)
        this.filteredData()})
 }
changeView(viewName){
    this.setState({
        view: viewName
    })
}
    filteredData(){
        var newData = this.state.listingsData.filter((item) => {
            return item.price >= this.state.min_price &&
                item.price <= this.state.max_price &&
                item.floorSpace >= this.state.min_floorspace &&
                item.floorSpace <= this.state.max_floorspace && item.rooms >= this.state.bedrooms 
                
        })
        if(this.state.city != 'All'){
            newData = newData.filter((item) => {
            return item.city == this.state.city
        })
        }
        if(this.state.homeType != 'All'){
            newData = newData.filter((item) => {
            return item.homeType == this.state.homeType
        })
        }
        if(this.state.sortby == 'price-dsc'){
            newData.sort((a,b) => {
                return a.price - b.price
            })
        }
          if(this.state.sortby == 'price-asc'){
            newData.sort((a,b) => {
                return b.price - a.price
            })
        }
        if(this.state.elevator){
            newData = newData.filter((item) => {
                return item.extras.includes('elevator')
            })
        }
         if(this.state.swimming_pool){
            newData = newData.filter((item) => {
                return item.extras.includes('swimming pool')
            })
        }
         if(this.state.finished_basement){
            newData = newData.filter((item) => {
                return item.extras.includes('finished basement')
            })
        }
         if(this.state.gym){
            newData = newData.filter((item) => {
                return item.extras.includes('gym')
            })
        }
        if(this.state.search != ''){
            newData = newData.filter((item) => {
                var city = item.city.toLowerCase()
                var address = item.address.toLowerCase()
                var state = item.state.toLowerCase()
                var searchText = this.state.search.toLowerCase()
                
                var cityMatch = city.match(searchText)
                var addressMatch = address.match(searchText)
                var stateMatch = state.match(searchText)
                if (cityMatch !=null || addressMatch !=null || stateMatch !=null){
                    return true
                }
            })
        }
  
        this.setState({
            filteredData: newData
        })
    }
    populateForms(){
        //City
        var cities = this.state.listingsData.map((item) => {
            return item.city
        })
        cities = new Set(cities)
        cities =  [...cities]
        cities = cities.sort()
        //HomeType
         var homeTypes = this.state.listingsData.map((item) => {
            return item.homeType
        })
        homeTypes = new Set(homeTypes)
        homeTypes =  [...homeTypes]
        homeTypes = homeTypes.sort()
        
        //Bedrooms
        var bedrooms = this.state.listingsData.map((item) => {
            return item.rooms
        })
        bedrooms = new Set(bedrooms)
        bedrooms =  [...bedrooms]
        bedrooms = bedrooms.sort()
        this.setState({
            
            populateFormsData: {
                homeTypes,
                bedrooms,
                cities
            }
        }, console.log(this.state))
    }
   
  render () {
    return (<div>
            <Header />
            <section id="content-area">
            <section className='landing'> 
            <h3 className='positioningtext'>HomeVibes</h3>
            <h5 className='sub-positioningtext'>Find your next dream home</h5>
           <a class="smoothScroll" href='#content'> <i className="fas fa-chevron-down fa-3x"></i></a>
            </section>
            <div id='content'>
            <Filter change = {this.change} globalState= {this.state} populateAction = {this.populateForms}/>
           <Listings filteredData = {this.state.filteredData} change = {this.change} globalState= {this.state} changeView = {this.changeView} />
            </div>
            </section>
            <footer>
            <section className='mobile'> 
            <div className='container'>
            <h4>Download the HomeVibes App</h4>
            <button><i className="fab fa-google-play"></i>
                    <p>Playstore</p>
            </button>
            <button>
                    <i className="fab fa-apple"></i>
                    <p>AppStore</p>
            </button>
              <p className='copyrighttext'>2006-2018 HomeVibes.com</p>
            </div>
            <img src='/img/localhomes.png'/>
            </section>
            <section className='additionalinfo'> 
                <ul>
                    <li><a href='#top'>HomeVibes.com</a></li>
                    <li>About HomeVibes.com</li>
                    <li>Meet the realtors</li>
                    <li>HomeVibes App</li>
                    <li>Work with Us</li>
                </ul>
            </section>
            </footer>
            </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
