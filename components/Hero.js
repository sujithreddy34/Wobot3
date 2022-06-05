import React from 'react'

// import '../node_modules/bootstrap/dist/css/bootstap.mim.css'

const Hero = () => {
    return (
        <div className="Hero">
<div className='hero-img'>
<img src="./images/Solid_lines.png" />
</div>
            <div className="hero-header">
            <h1>It's delight to have you onboard</h1>
            <p>Help us know you better.</p>
            <p>(This is how we optimize Wobot as per your business needs)</p>
            </div>
            

            <form >
                <div className='div-form1'>

                <label>Company name</label>
                <input type="type" class="form-control" id="exampleFormControlInput1" placeholder="e.g.Example Inc"/>
                </div>


                <div className='div-form2'>

                <label className="label-in">Industry</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
            
            <div className='div-form3'>

            <label>Company size</label>
                <div className="hero-button">

                <button type="button" class="btn btn-light">1-20</button>
                <button type="button" class="btn btn-light">21-50</button>
                <button type="button" class="btn btn-primary">51-200</button>
                <button type="button" class="btn btn-light">201-500</button>
                <button type="button" class="btn btn-light">500+</button>
                </div>
            </div>

               
            
               
      

                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="button">Get Started</button>

                </div>
                <div>
                    <p>Terms of use|Privacy policy</p>
                </div>
            </form>

        </div>
    )
}


export default Hero