/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import s from './Home.scss';

const getEvent = gql`
  {
    event(id: "5baa638dfb6fc011c0094f53") {
      id
      name
      description
      address
    }
  }
`

class Home extends Component {
  displayEvent = () => {
    if (this.props.data.loading) return <div>Loading...</div>
    else {
      return (
        <p style={{position: "relative", left: "7%"}}>Address: {this.props.data.event.address}</p>
      );
    }
  }
  
  displayTime = () => {
    var arr = [];

    for(var i = 0; i < 34; i++) {
      arr.push(
        <div key={i} className={s.flex}>
          <div className={s.boxtime}>00:00</div>
          <div className={`${s.box} ${s.wide}`}>
            {this.displayEvent()}
          </div>
        </div>
      );
    }
    return arr;
  }

  render() {
    console.log(this.props);
    return (
        <div>
          
          <div className={`${s.flex} ${s.con_box__hor} ${s.abs}`}>
            <div>
              <div className={s.box} style={{border: 0}}>&nbsp;</div>
              <div>

              </div>
            </div>
            <div className={s.flex_col}>
              <div className={s.box}>

                Mon
              </div>
            </div>
          </div>

          <div>
            <div className={`${s.abs_div} ${s.col}`}>

            </div>
          </div>

          <div className={`${s.con_box__vert} ${s.padd}`}>
            {this.displayTime()}
          </div>
        
        </div>
    );
  }
}

export default graphql(getEvent)(withStyles(s)(Home));
