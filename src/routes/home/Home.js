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

import s from './Home.scss';

class Home extends Component {
  displayTime() {
    var arr = [];

    for(var i = 0; i < 34; i++) {
      arr.push(
        <div class="flex">
          <div class={s.boxtime}>00:00</div>
          <div class={`${s.box} ${s.wide}`}>

          </div>
        </div>
      );
    }
    return arr;
  }

  render() {
    console.log(this.displayTime());
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

export default withStyles(s)(Home);
