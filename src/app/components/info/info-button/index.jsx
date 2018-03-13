import React, { Component } from 'react';
import style from './style.scss'

import * as constants from '@src/constants.js'

import SvgIcon from '@src/app/components/common/svg-icon';
import iconInfo from '@src/static/svg/info.svg?file-loader';

// actions
import { setPopupSettings } from '@src/actions/index.js';

export default class InfoButton extends Component {
  showPopup () {
    setPopupSettings({
      openState: true,
      content: constants.POPUP_INFO
    })
  }

  render() {
    // return (
    //   <SvgIcon
    //     glyph={iconInfo}
    //     className={style.icon}
    //     onClick={this.showPopup}
    //   />
    // );
    return (
      <img src={iconInfo}  className={style.icon} alt={'Info'} onClick={this.showPopup}/>
    )
  }
}