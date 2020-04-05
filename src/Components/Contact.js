import React, { Component } from 'react';

class Contact extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
  
      }

      return (
         <section id="contact">
            <div>
               <h4>Contact Info</h4>
               <p className="address">
                  {name}<br />
                  {street} <br />
                  {city}, {state} {zip}<br />
                  <span>{phone}</span><br />
                  <span> <a href="mailto:rob.m.quinn@gmail.com">Email Me</a></span>
               </p>
            </div>
            <aside className="four columns footer-widgets">
            </aside>
         </section>
      );
   }
}

export default Contact;
